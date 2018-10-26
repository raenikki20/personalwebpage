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
    Lesson5
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
