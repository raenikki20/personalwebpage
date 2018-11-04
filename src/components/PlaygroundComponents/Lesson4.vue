<template>
  <div id="Lesson4">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="11" class="projectTitleBox">
          <h1>Lesson 4</h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="lesson">
          <b-col cols="12">
            <h3>Using Loops</h3>
            <p>Below im creating lists using 'v-for' with keys. I will also be changing the arrays</p>
          </b-col>
          <b-col cols="6">
            <p>Iterated through an array</p>
            <ul>
              <li v-for="(fruit, key) in fruits" :key="key">{{ fruit }}</li>
            </ul>
          </b-col>
          <b-col cols="6">
            <p>Iterated through an object</p>
            <ul>
              <li v-for="(person, key) in people" :key="key">{{ key }}: {{ person.name }}, {{ person.age }}</li>
            </ul>
          </b-col>
          <b-col cols="8">
            <p>Add object to above Array</p>
            <b-button @click="addWatermelon" style="margin-bottom: 20px;">Add Watermelon</b-button>
            <b-button @click="removeWatermelon" style="margin-bottom: 20px;">Remove Watermelon</b-button>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Lesson4',
  data () {
    return {
      fruits: ['Apple', 'Oranges', 'Bananas', 'Grapes'],
      people: [
        { name: 'Nikki', age: 24 },
        { name: 'Kyle', age: 22 }
      ]
    }
  },
  components: {},
  methods: {
    addWatermelon: function () {
      this.fruits.push('Watermelon')
    },
    removeWatermelon: function () {
      var that = this
      this.fruits.filter(function (fruit, index) {
        console.log(fruit)
        if (fruit === 'Watermelon') {
          that.fruits.splice(index, 1)
        }
      })
    }
  },
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
