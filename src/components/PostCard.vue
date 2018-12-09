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
            <td><input v-model="price" placeholder="edit me"></td>
            <td></td>
          </tr>
          <tr>
            <td><label>Select Date:</label></td>
            <td>
              <v-date-picker class="datepicker"
                :available-dates='{ start: new Date(), end: null }'
                :min-date='new Date()'
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
      <div class="button" @click="upload">
        <span class="text">submit</span> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "postCard",
  data() {
    return {
      title: "",
      price: "",
      selectedDate: null,
      selectedTime: "",
      selectedFile: null,
      description: "",
      openSlots: ["13:30 - 13:20", "13:40 - 14:00", "14:00 - 14:20"]
    }
  },
  methods: {
    onFileChanged (event) {
      this.selectedFile = event.target.files[0]
    },
    upload: function(event) {
      if (event) {
        console.log("upload");
        window.open(this.url, "_blank");
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