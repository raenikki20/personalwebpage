<template>
  <div id="Lesson2">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 2</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col cols="12">
            <h3>Assigning Style/Classes to Components</h3>
            <p>Below I have 3 objects. Each object as been assigned its styling from 3 different methods</p>
          </b-col>
          <b-col cols="6">
            <h3>First - conditional</h3>
            <p :class="{ red: !isActive }">Watch this text change color when you click the button</p>
            <b-button @click="isActive = !isActive">Change Color</b-button>
          </b-col>
          <b-col cols="6">
            <h3>Second - Array with Expression</h3>
            <p :class="[isActive2 ? blue : green]">Watch this text change color when you click the button</p>
            <b-button @click="isActive2 = !isActive2" style="margin-bottom: 20px;">Change Color</b-button>
          </b-col>
          <b-col cols="6">
            <h3>Third - Inline Styles (object)</h3>
            <p :style="styleObject">This color is set from an object using the style attribute</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson2',
  data () {
    return {
      isActive: true,
      isActive2: true,
      blue: 'blue',
      green: 'green',
      styleObject: {
        color: 'purple'
      }
    }
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson2 {
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
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .green {
    color: green;
  }
</style>
