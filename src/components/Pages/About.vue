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
          <b-img src="../static/me.JPG" width="400" alt="img" fluid class="image"/>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="blue">
          <h2>A few fun facts about myself</h2>
          <p>
            I'll probably be watching The Office, Parks & Rec, or New Girl while your browsing my site. I really hate Peanut Butter and Mushrooms.
            The way to my heart is Tillamook Mudslide ice cream. Tennis is my passion, but ive more recently started playing Pickleball. I am 6" 6
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="gray">
          <h2>Who I am as a person</h2>
          <p>
            Since graduating from Brigham Young University with a Bachelors in Information Technology, I have started to place my mark on
            the world by doing Software/Web Development. I currently am living in Utah, were the mountains are on your door step,
            and adventure is a few minutes away. This opportunity has allowed me to explore the wonders that Utah has to offer during
            the warmer months, and well, when its not so warm I'll be watching netflix :)
          </p>
          <br>
          <p>
            I have been working in this profession for a little under a year, and I'm really starting to understand the art behind coding.
            You come out of University with the knowledge of how to do things, but applying them to a real life working environment...thats not taught.
            I've come to learn coding can be tough most days, its like hitting a brick wall for a few days straight and then finding the loose
            brick and the wall colapses (kind of like finding that missing Semi-Colon so your code now compiles). But that feeling when you figure
            something, that sense of accomplishemnt. Thats what I work for.
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="blue">
          <h2>What my future entails</h2>
          <p>
            One of my biggest goals currently is become an American Citizen (Im British, born and raised). The opportunity that the States has to offer
            in my field is incredible, and not to forget that everythig is bigger and cheaper! I plan on creating my own business, not sure what exactly,
            but the idea of working for myself is a dream.
          </p>
          <br>
          <p>
            Finally, my future happiness. That includes a beautiful wife and family, I want to experience life with someone next to me. I want to always
            be striving to support and take care of a family emotionally, finacially, and spiritually. My future is based of the decisions and actions I
            make today, and I know that I am on the right path so that these things can occur.
          </p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="11" class="gray">
          <h2>What I can do for you</h2>
          <p>
            if you haven't looked yet take at look at my portfoli and see my past projects, and for even more information view my resume.
          </p>
          <b-button to="/resume" download>View my Resume</b-button>
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
    padding: 40px 65px 40px 65px;
    background-color: #5D99B6;
    border-radius: 50px;
    margin: 10px 0px 10px 0px;
  }
  .gray {
    padding: 40px 65px 40px 65px;
    background-color: #D3D3D3;
    border-radius: 50px;
    margin: 10px 0px 10px 0px;
  }
  .btn {
    padding: 15px;
    border-radius: 20px;
    margin-top: 20px;
    background-color: gray;
    border: none;
  }
  .btn:hover {
    border: none;
    background-color: #5D99B6;
  }
</style>
