<template>
  <div class="postcard">
    <div class="container">
      <label>Name</label>
      <input v-model="title" placeholder="enter name" class="form-control">
      <label>Price</label>
      <input type="number" class="form-control" v-model="price" placeholder="enter price">
      <!-- <label>Start date</label>
      <input type="date" v-model="selectedDate" class="form-control"> -->
      <label>Time slot</label>
      <select ref="slotSelection" v-model="selectedTime" class="form-control">
        <option disabled value="">Please select time</option>
        <option v-for="(slot, index) in $store.state.schedule" :key="index">{{ `${slot.date} ${slot.start_time}~${slot.end_time}` }}</option>
      </select>
      <label>Description</label>
      <textarea class="form-control" v-model="description"></textarea>
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
      description: null,
      openSlots: ["13:20-13:40", "13:40-14:00", "14:00-14:20"],
      availableDate: null
    }
  },
  created() {
    this.$store.dispatch("getAllTimeSlots")

    // let data = this.$store.getters.getavailableDates
    // let _avaDates = []
    // for(var i = 0; i < data.length; i++) {
    //   _avaDates.push({ start: data[i].date, end: data[i].date})
    // }
    // this.availableDate = _avaDates

    let _slots = this.$store.state.schedule
    console.log(_slots)

  },
  computed: {
    selectedSlot: function(val) {
      let index = this.$refs.slotSelection.selectedIndex - 1
      return this.$store.state.schedule[index]
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
      let img_url = "https://static1.squarespace.com/static/59413d96e6f2e1c6837c7ecd/t/5b7232f31ae6cfe55027a722/1535309412013/VVRRR%C2%A0-+Manolo+April%2C+2018?format=750w"
      console.log(this.selectedSlot.date)
      console.log(this.selectedSlot.start_time)
      console.log(this.selectedSlot.end_time)
      console.log(this.description)
      console.log(img_url)

      axios.post('http://localhost:3030/postitems', { 
            product_name: this.title, 
            current_price: this.price,
            date: this.selectedSlot.date,
            start_time: this.selectedSlot.start_time,
            end_time: this.selectedSlot.end_time,
            description: this.description,
            url: img_url,
            accessToken: _token})
        .then(function(response){
          console.log('saved successfully')
          alert("Post Success")
        });  
    },
    // onUpload: function(event) {
    //   if (event) {
    //     const fd = new FormData();
    //     fd.append('image', this.selectedFile, this.selectedFile.name)
    //     fd.set("product_name", this.$data.title);
    //     fd.set("current_price", this.$data.price);

    //     let regex = /([\d]*:[\d]*)/;
    //     let timeslot = "13:20-13:40";
    //     let startDate = this.$data.selectedDate
    //     let date = startDate.getDay() + " " + startDate.getMonth() + " " + startDate.getFullYear()
    //     let startTime =  date + " " + timeslot.match(regex)[1];
    //     let endTime = date + " " + timeslot.match(regex)[2];

    //     fd.set("start_time", startTime);
    //     fd.set("end_time", endTime);

    //     fd.set("accessToken", this.$store.getters.getToken)

        
    //     console.log("title " + this.$data.title);
    //     console.log("price " + this.$data.price);
    //     console.log("description " + this.$data.description);
    //     console.log("time " + startTime);
    //     console.log(fd)
    //     axios.post('http://localhost:3030/postitems', fd)
    //       .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    // }
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