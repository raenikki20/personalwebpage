<template>
  <div id="Lesson3">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 3</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          Lesson 3
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson3',
  data () {
    return {

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
