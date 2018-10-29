<template>
  <div id="ColorRun">
    <b-container>
      <b-row align-h="center">
        <b-col cols="11" class="titleBox">
          <h1>Color Run - Swipe or Tap</h1>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="10" class="grayBox">
          <h3>Objective Statement</h3>
          <p>
            To advance my knowledge in Swift and create a more professional looking game, helping me understand some more key principles
            that Swift has to offer.
          </p>
        </b-col>
      </b-row>
       <b-row align-h="center">
        <b-col cols="10" class="blueBox">
          <h3>Purpose</h3>
          <p>
            During the summer of 2017 I became interested in the creating of IOS Games. I wanted to expand my coding knowledge a further, and decided
            that I wanted to create a basic game that will allow me the learn the basic principles of Swift.
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="10" class="grayBox">
          <h3>Lesson's Learnt</h3>
          <p>• Passing object data between storyboards</p>
          <p>• Listening for collisions between two objects.</p>
          <p>• Understanding the importance of UX design and how to include it in the storyboard</p>
          <p>• Able to add In App Purchases (Remove Ads) functionality</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="10" class="blueBox">
          <h3>Aim of the Game</h3>
          <p>Pass the colored ball by matching it with the correct color segment on the wall, watch out it gets faster.</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="10" class="grayBox">
          <h3>Final Solution</h3>
          <img src="../../../static/cr1.png" alt="" style="height:350px; width: 180px">
          <img src="../../../static/cr2.png" alt="" style="height:350px; width: 180px">
          <img src="../../../static/cr3.png" alt="" style="height:350px; width: 180px">
          <img src="../../../static/cr4.png" alt="" style="height:350px; width: 180px">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ColorRun'
}
</script>

<style scoped>
  #ColorRun {
    text-align: center;
  }
  h3, h4, h5 {
    color: white;
  }
  p {
    margin-bottom: 0px;
    color: white;
    text-align: left;
  }
</style>
