<template>
  <div id="SideBar">
    <b-img src="../static/logo.svg" alt="img" fluid/>
    <div class="dateContainer">
      <h2>{{ date }}</h2>
    </div>
    <div class="navContainer">
      <router-link v-for="(link, key) in navigation" :key="key" :to="link.ref" class="navButton" exact>{{ link.name }}</router-link>
    </div>
    <div class="social">
      <a href="https://www.facebook.com/nikki.rae2" class="fa fa-facebook"></a>
      <a href="https://www.snapchat.com/add/nikki.rae18" class="fa fa-snapchat"></a>
      <a href="https://www.instagram.com/nikki_rae19/?hl=en" class="fa fa-instagram"></a>
      <a href="https://www.linkedin.com/in/nikki-rae-96a42010a/" class="fa fa-linkedin"></a>
      <a href="https://github.com/raenikki20" class="fa fa-github"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      navigation: [
        { name: 'Home', ref: '/' },
        { name: 'Projects', ref: '/projects' },
        { name: 'About', ref: '/about' },
        { name: 'Contact', ref: '/contact' },
        { name: 'Resume', ref: '/resume' }
      ]
    }
  },
  computed: {
    date: function () {
      var date = new Date()
      var string = ''
      string += date.getDate() + '/'
      string += date.getMonth() + 1 + '/'
      string += date.getFullYear()
      return string
    }
  }
}
</script>

<style scoped >
  #SideBar {
    position: fixed;
    width: 250px;
    height: 100%;
    border-radius: 0px 60px 60px 0px;
    background-color: #D3D3D3;
    overflow: hidden;
  }
  .dateContainer {
    margin: 10px 30px 30px 30px;
    text-align: center;
    color: white;
  }
  .navContainer {
    margin: 30px 30px 30px 30px;
  }
  .navButton {
    display: inline-block;
    color: white;
    font-size: 30px;
    width: 200px;
    margin: 10px 10px 0px 30px;
  }
  .navButton:hover{
    color: gray;
    text-decoration: none;
  }
  .router-link-active {
    color: #5D99B6;
  }
  .social {
    position: absolute;
    bottom: 0;
    padding: 10px;
    margin: 30px 5px 30px 5px;
    text-align: center;
  }
  .fa {
    padding: 10px;
    font-size: 30px;
    width: 70px;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
    background-color: #5D99B6;
    color: white;
    margin: 8px 4px 8px 4px;
  }
  .fa:hover {
    background-color: gray;
  }
</style>
