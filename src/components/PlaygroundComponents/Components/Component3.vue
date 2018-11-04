<template>
  <div id="Component3">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h3>{{ name }}</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Component3',
  data () {
    return {}
  },
  props: ['name'],
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Component3 {
    text-align: center;
  }
  h1 {
      font-size: 20px;
      margin: 10px;
  }
  h3 {
      font-size: 16px;
      margin: 0px;
  }
  p {
    font-size: 12px;
  }
</style>
