<template>
  <div id="Projects">
    <b-container fluid>
      <b-row no-gutters>
        <b-col md="12" lg="6" cols="4" class="containers" v-for="(project, key) in projects" :key="key">
          <b-img src="https://via.placeholder.com/750x750" width="750" height="750" alt="img" fluid class="img"/>
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
        { id: 1, ref: '/vuePlayground', title: 'Vue Playground', tags: ['Vue.js', 'Bootstrap-Vue', 'HTML', 'CSS'] },
        { id: 2, ref: '/myWebsite', title: 'This Website', tags: ['Vue.js', 'Bootstrap-Vue', 'HTML', 'CSS'] },
        { id: 3, ref: '/vuePlayground', title: 'Project 3', tags: ['Swift', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Enyo.js', 'Vue.js', 'LESS'] },
        { id: 4, ref: '/vuePlayground', title: 'Project 4', tags: ['Swift', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Enyo.js', 'Vue.js', 'LESS'] },
        { id: 5, ref: '/vuePlayground', title: 'Project 5', tags: ['Swift', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Enyo.js', 'Vue.js', 'LESS'] }

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
