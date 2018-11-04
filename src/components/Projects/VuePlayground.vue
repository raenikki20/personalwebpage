<template>
  <div id="VuePlayground">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="titleBox">
          <h1>Vue.js Playground</h1>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="10" class="grayBox">
          <p>This is my Playground. Im documenting everything im learning as i play with the Vue.js Framework.</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="5" class="lesson">
           <Lesson10></Lesson10>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson9></Lesson9>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson8></Lesson8>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson7></Lesson7>
        </b-col>
        <b-col cols="5" class="lesson">
          <Lesson6></Lesson6>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson5></Lesson5>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson4></Lesson4>
        </b-col>
        <b-col cols="5" class="lesson">
           <Lesson3></Lesson3>
        </b-col>
        <b-col cols="5" class="lesson">
          <Lesson2></Lesson2>
        </b-col>
        <b-col cols="5" class="lesson">
          <Lesson1></Lesson1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Lesson1 from '@/components/PlaygroundComponents/Lesson1'
import Lesson2 from '@/components/PlaygroundComponents/Lesson2'
import Lesson3 from '@/components/PlaygroundComponents/Lesson3'
import Lesson4 from '@/components/PlaygroundComponents/Lesson4'
import Lesson5 from '@/components/PlaygroundComponents/Lesson5'
import Lesson6 from '@/components/PlaygroundComponents/Lesson6'
import Lesson7 from '@/components/PlaygroundComponents/Lesson7'
import Lesson8 from '@/components/PlaygroundComponents/Lesson8'
import Lesson9 from '@/components/PlaygroundComponents/Lesson9'
import Lesson10 from '@/components/PlaygroundComponents/Lesson10'
export default {
  name: 'VuePlayground',
  data () {
    return {

    }
  },
  components: {
    Lesson1,
    Lesson2,
    Lesson3,
    Lesson4,
    Lesson5,
    Lesson6,
    Lesson7,
    Lesson8,
    Lesson9,
    Lesson10
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #VuePlayground {
    text-align: center;
  }
  .grayBox {
    margin-bottom: 10px;
  }
  .lesson {
    background-color: white;
    border-radius: 50px;
    padding: 10px;
    margin: 10px;
  }
</style>
