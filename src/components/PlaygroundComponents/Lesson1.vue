<template>
  <div id="Lesson1">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 1</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col>
            <h3>Understanding components</h3>
            <p>
              These components are created in seperate files and injected into this Lesson Box
              I imported the file using the import method, then using the 'components' property
              I was able to call the components inside this box
            </p>
            <component1></Component1>
            <component2></Component2>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Component1 from '@/components/PlaygroundComponents/Components/Component1'
import Component2 from '@/components/PlaygroundComponents/Components/Component2'
export default {
  name: 'Lesson1',
  data () {
    return {}
  },
  components: {
    Component1,
    Component2
  },
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson1 {
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
