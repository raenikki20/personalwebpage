<template>
  <div id="app">
    <div class="sideBar">
      <SideBar></SideBar>
    </div>
    <div class="main">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Sidebar'
import Main from '@/components/Main'
export default {
  name: 'App',
  components: {
    SideBar,
    Main
  }
}
</script>

<style>
  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #EBEBEB;
  }
  .sideBar {
    position: fixed;
    width: 250px;
    height: 100vh;
    border-radius: 0px 60px 60px 0px;
    background-color: #D3D3D3;
    overflow: hidden;
  }
  .main {
    margin-left: 250px;
    padding: 0px 15px 0px 15px;
    height: 100%;
    bottom: 0;
    overflow: no-display;
  }
  .container-fluid {
    padding-right: 0px;
    padding-left: 0px;
  }
  .titleBox {
    padding: 30px;
    background-color: #5D99B6;
    border-radius: 50px;
    margin: 40px 0px 40px 0px;
    text-transform: uppercase;
  }
  .titleBox h1 {
    font-size: 40px;
    color: white;
  }
</style>
