<template>
  <div id="Home">
    <div class="center">
      <h1>Hi, I'm Nikki</h1>
      <h2>I'm a Web Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  #Home {
    text-align: center;
    height: 100vh;
    vertical-align: middle;
  }
  h1 {
    font-size: 150px;
    color: #5D99B6;
  }
  h2 {
    font-size: 70px;
    color: #5D99B6;
  }
  .center {
    position: relative;
    top: 50%;
    transform: translateY(-50%); /* or try 50% */
  }
</style>
