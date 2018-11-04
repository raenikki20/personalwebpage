<template>
  <div id="Lesson5">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 5</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col cols="12">
            <h3>Computed Properties & Watchers</h3>
            <p>
              I will be using computed/watch properties to do some stuff dynamically.
              We use computed properties because it caches some information. It will
              only run if something it depends on changes. The watch property is used
              for asychronous tasks. When infromation isnt readily available it will
              wait to perform a certain function until that data is avaialble
              </p>
          </b-col>
          <b-col cols="6">
            <p>Computed Property</p>
            <input type="text" v-model="msg">
            <p>{{ reverse }}</p>
          </b-col>
          <b-col cols="6">
            <p>Watch Property</p>
            <input type="text" v-model="first" placeholder="first name">
            <input type="text" v-model="last" placeholder="last name">
            <p>{{ full }}</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson5',
  data () {
    return {
      msg: 'Hello',
      first: '',
      last: '',
      full: ''
    }
  },
  components: {},
  methods: {},
  computed: {
    reverse: function () {
      return this.msg.split('').reverse().join('')
    }
  },
  watch: {
    first: function (val) {
      this.full = val + ' ' + this.last
    },
    last: function (val) {
      this.full = this.first + ' ' + val
    }
  }
}
</script>

<style scoped>
  #Lesson5 {
    text-align: center;
  }
  h1 {
      font-size: 20px;
      color: white;
      margin: 0px;
  }
  h3 {
      font-size: 16px;
      margin: 0px;
  }
  p {
    font-size: 12px;
  }
  .projectTitleBox {
    border-radius: 50px;
    background-color: #5D99B6;
    padding: 10px;
    margin: 20px 0px 20px 0px;
  }
  .lesson {
      margin-bottom: 20px;
  }
</style>
