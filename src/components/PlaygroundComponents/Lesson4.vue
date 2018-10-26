<template>
  <div id="Lesson4">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 4</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          Lesson 4
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson4',
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
  #Lesson4 {
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
