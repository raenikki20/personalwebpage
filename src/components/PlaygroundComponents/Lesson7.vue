<template>
  <div id="Lesson7">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 7</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
           <b-col cols="12">
            <h3>Using Props</h3>
            <p>You can pass not just intividual pieces of data, but can also pass objects</p>
          </b-col>
          <b-col cols="12">
            <h3>Single Data Use & Object </h3>
            <p>the single date peice i am sending is my name 'Nikki'</p>
            <p>The object i will be passing is rooms in a home</p>
          </b-col>
          <b-col cols="6">
            <h3>Single Data Use</h3>
            <component3 :name="myname"></component3>
          </b-col>
           <b-col cols="6">
            <h3>Object</h3>
            <component4 :rooms="home"></component4>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Component3 from '@/components/PlaygroundComponents/Components/Component3'
import Component4 from '@/components/PlaygroundComponents/Components/Component4'
export default {
  name: 'Lesson7',
  data () {
    return {
      myname: 'Nikki',
      home: ['LivingRoom', 'Kitchen', 'Bathroom', 'Bedroom']
    }
  },
  components: {
    Component3,
    Component4
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson7 {
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
