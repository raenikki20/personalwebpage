<template>
  <div id="Lesson8">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 8</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
           <b-col cols="12">
            <h3>V-Model Binding</h3>
            <p>
              Being able store user changes from a form in the data property and
              changing the value of individual peices of data. This is considered
              2-way binding
            </p>
          </b-col>
          <b-col cols="12">
            <h3>Getting users name from input</h3>
            <br>
            <input type="text" placeholder="Your name" v-model="name">
            <br>
            <br>
            <p>Below is the name thats getting stored</p>
            <p>{{ name }}</p>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson8',
  data () {
    return {
      name: ''
    }
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Lesson8 {
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
