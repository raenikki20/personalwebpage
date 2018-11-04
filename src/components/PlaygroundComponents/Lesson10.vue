<template>
  <div id="Lesson10">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 10</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
           <b-col cols="12">
            <h3>Props Advanced</h3>
            <p>
              Diving deeper into components, components can be registered globally and locally.
              Globally registering components can be very costly since you may not be using all
              registered components when building the app. Registering Locally only builds the actual
              components that you use.
            </p>
          </b-col>
          <b-col cols="12">
            <h3>How?</h3>
            <br>
            <p>import 'component from './component.vue'</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson10',
  data () {
    return {}
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson10 {
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
