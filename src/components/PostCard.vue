<template>
  <div class="postcard">
    <div class="posting">
      <div class="title">
        <div class="row height-50">
          <label>Title:</label>
        </div>
        <div class="row height-50">
          <input v-model="title" placeholder="edit me">
        </div>
      </div>
      <div class="table">
        <table>
          <tr>
            <td><label class="text">Start Price:</label></td>
            <td><input type="number" v-model="price" placeholder="enter price"></td>
            <td></td>
          </tr>
          <tr>
            <td><label>Select Date:</label></td>
            <td>
              <v-date-picker 
                class="datepicker" mode="single"
                :available-dates="this.availableDate"
                v-model='selectedDate'>
              </v-date-picker>
            </td>
            <td>
              <select v-model="selectedTime" class="options">
                <option disabled value="">Please select time</option>
                <option v-for="slot in openSlots" :key="slot">{{ slot }}</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <div class="desription">
        <div class="row height-10">
          <label>Description:</label>
        </div>
        <div class="row height-90">
          <textarea v-model="description" placeholder="add multiple lines"></textarea> 
        </div>
      </div>
      <div class="image">
        <div class="row">
          <label>Picture:</label>
          <input type="file" @change="onFileChanged">
        </div>
      </div>
      <div class="button" @click="onUpload">
        <span class="text">submit</span> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "postCard",
  data() {
    return {
      title: "",
      price: "",
      selectedDate: null,
      selectedTime: null,
      selectedFile: null,
      description: "",
      openSlots: ["13:20-13:40", "13:40-14:00", "14:00-14:20"],
      availableDate: null
    }
  },
  created() {
    let data = this.$store.getters.getavailableDates
    let _avaDates = []
    for(var i = 0; i < data.length; i++) {
      _avaDates.push({ start: data[i].date, end: data[i].date})
    }

    this.availableDate = _avaDates
  },
  watch: {
    selectedDate: function(val) {
      let data = this.$store.getters.getavailableDates
      let temp = data.filter( x => x.date.getTime() === val.getTime() )
      this.openSlots = temp[0].timeslots
      // console.log(temp[0])
    }
  },
  methods: {
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload: function(event) {
      if (event) {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name)
        fd.set("product_name", this.$data.title);
        fd.set("current_price", this.$data.price);

        let regex = /([\d]*:[\d]*)/;
        let timeslot = "13:20-13:40";
        let startDate = this.$data.selectedDate
        let date = startDate.getDay() + " " + startDate.getMonth() + " " + startDate.getFullYear()
        let startTime =  date + " " + timeslot.match(regex)[1];
        let endTime = date + " " + timeslot.match(regex)[2];

        fd.set("start_time", startTime);
        fd.set("end_time", endTime);
        fd.set("accessToken", this.$store.getters.getToken)
        
        console.log("title " + this.$data.title);
        console.log("price " + this.$data.price);
        console.log("description " + this.$data.description);
        console.log("time " + startTime);
        console.log(fd)
        axios.post('http://localhost:3030/postitems', fd)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
}
</script>

<style lang="scss">
.postcard {

  .posting {
    height: 500px;
    width: 600px;
    margin: 0 auto;
    position: relative;
    background-color: white;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 7px 0 #cfcfc4;
    font-family: "Bree Serif", serif;

    .row {
      width: 100%;
    }

    .title {
      width: 100%;
      height: 10%;
      margin: 20px 0px 0px 10px;

      .height-10 {
        height: 10%;
        width: 100%;
      }

      .height-90 {
        height: 90%;
        width: 100%;
      }

      label, input {
        color: black;
        position: relative;
        float: left;
      }

      label {
        height: 10%;
      }

      input {
        width: 90%;
        height: 90%;
      }
    }

    .table{
      height: 15%;
      width: 80%;
      margin: 0px;
      padding-left: 5px;

      .options {
        color: black;
      }

      table {
        height: 100%;
        width: 80%
      }

      tr {
        margin: 10px 0px 0px 0px;
        height: 50%;
      }

      td{
        height: 100%;
        padding-left: 0px;
        margin-left: 0px;
        white-space:nowrap;
      }

      label{
        color: black;
      }

      select {
        height: 24.5px;;
      }
    }

    .desription {
      width: 100%;
      height: 50%;
      margin: 10px 0px 0px 10px;

      .height-10 {
        height: 10%;
        width: 100%;
      }

      .height-90 {
        height: 90%;
        width: 100%;
      }

      label, textarea {
        color: black;
        position: relative;
        float: left;
      }

      label {
        height: 10%;
      }

      textarea {
        width: 98%;
        height: 90%;
      }
    }

    .image {
      height: 5%;
      width: 100%;
      margin: 0px 0px 20px 5px;

      label {
        color: black;
        width: 60px;
        float: left;
      }

      input {
        float: left;
      }
    }

    .button {
      background-color: red;
      height: 30px;
      width: 150px;
      margin: 5px auto;
      border-radius: 2px;

      .text {
        font-size: 14px;
        margin: 0 auto;
        top: 10%;
        position: relative;
        transform: translateY(-50%);
      }
    }

    .button:hover {
      box-shadow: 0 0 10px 0 #cfcfc4;
      cursor: pointer;
      .text {
        font-size: 15px;
      }
    }
  }
}
</style>