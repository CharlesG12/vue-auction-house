<template>
  <div class="postcard">
    <div class="container">
      <label>Name</label>
      <input v-model="title" placeholder="enter name" class="form-control">
      <label>Price</label>
      <input type="number" class="form-control" v-model="price" placeholder="enter price">
      <label>Start date</label>
      <input type="date" v-model="selectedDate" class="form-control">
      <label>Time slot</label>
      <select v-model="selectedTime" class="form-control">
        <option disabled value="">Please select time</option>
        <option v-for="slot in openSlots" :key="slot">{{ slot }}</option>
      </select>
      <!-- <label>Description</label> -->
      <!-- <textarea class="form-control" v-model="description"></textarea> -->
      <label>Upload image</label>
      <input type="file" accept="image/*" class="upload-image form-control" @change="onFileChanged">
      <button class="submit btn btn-primary" @click="testing">Submit</button>
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
      // description: "",
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
    testing() {
      console.log("upload testing")
      let _token = this.$store.state.token
      console.log(this.title)
      console.log(this.price)
      console.log(this.selectedDate)
      console.log(this.selectedTime)
      let img_url = "https://static1.squarespace.com/static/59413d96e6f2e1c6837c7ecd/t/5b7232f31ae6cfe55027a722/1535309412013/VVRRR%C2%A0-+Manolo+April%2C+2018?format=750w"

      let regex = /([\d]*:[\d]*)/;
      let regex2 = /-([\d]*:[\d]*)/;
      let timeslot = "13:20-13:40";
      let startTime =  this.selectedDate + " " + timeslot.match(regex)[1];
      let endTime =  this.selectedDate + " " + timeslot.match(regex2)[1];
      console.log(startTime)
      console.log(endTime)

      axios.post('http://localhost:3030/postitems', { 
            product_name: this.title, 
            current_price: this.price,
            start_time: startTime,
            end_time: endTime,
            accessToken: _token})
        .then(function(response){
          console.log('saved successfully')
        });  
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
  .container {
    width: 400px;
    margin: 0 auto;
    text-align: left;
    color: #000;

    label {
      margin-top: 10px;
    }

    .submit {
      margin: 10px 0;
    }
  }
}
</style>