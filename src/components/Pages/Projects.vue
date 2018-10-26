<template>
  <div id="Projects">
    <b-container fluid>
      <b-row no-gutters>
        <b-col md="12" lg="6" cols="4" class="containers" v-for="(project, key) in projects" :key="key">
          <b-img :src="project.img" alt="img" fluid class="img"/>
          <router-link :to="project.ref" tag="div" class="overlay">
            <div class="text">
              <h1>{{ project.title }}</h1>
              <div v-for="(tag, key) in project.tags" :key="key" class="tag">
                <p> {{ tag }} </p>
              </div>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        { id: 1, ref: '/vuePlayground', img: '../static/vuejs.png', title: 'Vue.js Playground', tags: ['Vue.js', 'Bootstrap-Vue', 'HTML', 'CSS'] },
        { id: 2, ref: '#', img: '../static/logo.png', title: 'This Website', tags: ['Vue.js', 'Bootstrap-Vue', 'HTML', 'CSS'] },
        { id: 3, ref: '/inmoment', img: '../static/inmoment.png', title: 'InMoment', tags: ['Vue.js', 'Laravel', 'Bootstrap', 'Raspberry Pi', 'HCI Focused'] },
        { id: 4, ref: '/talkblok', img: 'https://via.placeholder.com/2000x2000', title: 'TalkBlok', tags: ['HCI Focused'] },
        { id: 5, ref: '/react', img: 'https://via.placeholder.com/2000x2000', title: 'React - Dont be slow!', tags: ['Swift'] },
        { id: 6, ref: '/colorrun', img: 'https://via.placeholder.com/2000x2000', title: 'ColorRun - Tap or Swipe', tags: ['Swift'] }
      ]
    }
  }
}
</script>

<style scoped>
  #Projects {
    padding: 15px 0px 15px 0px;
  }
  .containers {
    position: relative;
  }
  .img {
    border-radius: 50px;
    padding: 20px;
  }
  .overlay {
    margin: 20px;
    border-radius: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .3s ease;
    background-color: #5D99B6;
  }

  .containers:hover .overlay {
    opacity: 1;
    cursor: pointer;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  h1 {
    color: white;
    font-size: 50px;
  }
  .tag {
    display: inline-block;
    margin: 5px;
    background-color: #D3D3D3;
    color: #5D99B6;
    border-radius: 10px;
    padding: 5px;
  }
  p {
    margin-bottom: 0px;
  }
</style>
