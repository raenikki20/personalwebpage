<template>
  <div id="About">
    <b-container>
      <b-row align-h="center">
        <b-col cols="11" class="titleBox">
          <h1>Learn about me</h1>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12">
          <b-img blank width="600" height="600" blank-color="#777" alt="img" fluid class="image"/>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="blue">
          <h2>A few fun facts about myself</h2>
          <p>I graduated Brigham Young University with a Bachelors in Information Technology</p>
          <p>I played D1 Mens's Tennis for 2 years</p>
          <p>Currently a Software Engineer at PassiveLogic</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="gray">
          <h2>Who I am as a person</h2>
          <p>I graduated Brigham Young University with a Bachelors in Information Technology</p>
          <p>I played D1 Mens's Tennis for 2 years</p>
          <p>Currently a Software Engineer at PassiveLogic</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="blue">
          <h2>What my future entails</h2>
          <p>I graduated Brigham Young University with a Bachelors in Information Technology</p>
          <p>I played D1 Mens's Tennis for 2 years</p>
          <p>Currently a Software Engineer at PassiveLogic</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  #About {
    text-align: center;
    padding-bottom: 60px;
    height: 100%;
  }
  h2 {
    font-size: 35px;
    color: white;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    color: white;
  }
  .image {
    border-radius: 80px;
    margin-bottom: 40px;
  }
  .blue {
    padding: 20px 15px 20px 15px;
    background-color: #5D99B6;
    border-radius: 50px;
    margin: 10px 0px 10px 0px;
  }
  .gray {
    padding: 20px 15px 20px 15px;
    background-color: #D3D3D3;
    border-radius: 50px;
    margin: 10px 0px 10px 0px;
  }
</style>
