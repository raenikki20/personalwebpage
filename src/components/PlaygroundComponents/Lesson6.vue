<template>
  <div id="Lesson6">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 6</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col cols="12">
            <h3>Event Handling</h3>
            <p>Learning how to access DOM Events using the 'v-on' directive</p>
          </b-col>
          <b-col cols="6">
            <h3>onClick</h3>
            <b-button @click="greet" style="margin-bottom: 20px;">click me</b-button>
          </b-col>
          <b-col cols="12">
            <h3>Note</h3>
            <p>You can access DOM event infomartion by passing an event parameter in the function</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson6',
  data () {
    return {}
  },
  components: {},
  methods: {
    greet: function (event) {
      alert('Hello Viewer')
    }
  },
  computed: {}
}
</script>

<style scoped>
  #Lesson6 {
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
