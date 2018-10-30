<template>
  <div id="Component2">
    <b-container fluid>
      <b-row align-h="center" class="lesson">
          <h1>Component 2</h1>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  data () {
    return {}
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Component2 {
    text-align: center;
  }
  h1 {
      font-size: 20px;
      margin: 10px;
  }
</style>
