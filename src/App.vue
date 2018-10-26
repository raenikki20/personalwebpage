<template>
  <div id="app">
    <div>
      <SideBar></SideBar>
    </div>
    <div>
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
    height: auto;
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
  .grayBox {
    padding: 30px;
    background-color: #D3D3D3;
    border-radius: 50px;
    margin-bottom: 40px;
  }
  .blueBox {
    padding: 30px;
    background-color: #5D99B6;
    border-radius: 50px;
    margin-bottom: 40px;
  }
</style>
