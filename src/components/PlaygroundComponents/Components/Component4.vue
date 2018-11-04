<template>
  <div id="Component4">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <ul>
            <li v-for="(room, key) in rooms" :key="key">{{ room }}</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Component4',
  data () {
    return {}
  },
  props: ['rooms'],
  components: {},
  methods: {},
  computed: {}
}
</script>

<style scoped>
  #Component4 {
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
