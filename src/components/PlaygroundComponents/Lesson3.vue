<template>
  <div id="Lesson3">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 3</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col cols="12">
            <h3>Using Conditionals</h3>
            <p>I will be using the 'v-if' and 'v-else', the also the 'v-show'</p>
          </b-col>
          <b-col cols="6">
            <h3>v-if and v-else</h3>
            <p v-if="show">Click the button to hide me</p>
            <p v-else>Im the v-else</p>
            <b-button @click="show = !show" style="margin-bottom: 20px;">Hide</b-button>
          </b-col>
          <b-col cols="6">
            <h3>v-show</h3>
            <p v-show="show1">You can just make me dissapear</p>
            <b-button @click="show1 = !show1" style="margin-bottom: 20px;">Hide</b-button>
          </b-col>
          <b-col cols="12">
            <h3>Note</h3>
            <p>'v-show' adds a 'display: none' attribute to the element where as 'v-if' is removed from the DOM</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson3',
  data () {
    return {
      show: true,
      show1: true
    }
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson3 {
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
