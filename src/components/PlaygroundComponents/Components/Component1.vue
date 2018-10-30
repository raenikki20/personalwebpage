<template>
  <div id="Component1">
    <b-container fluid>
      <b-row align-h="center" class="lesson">
          <h1>Component 1</h1>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  data () {
    return {}
  },
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Component1 {
    text-align: center;
  }
  h1 {
      font-size: 20px;
      margin:  10px;
  }
</style>
