<template>
  <div class="homepage-content">
    <div class="art-grid">
    <h1 class="name-title">Clara Delahaye</h1>
    <div class="artsContainer">
      <div class="left-arts arts-block">
        <router-link to="/illustration">
          <div class="illustrations art-block">
            <h3>Illustration</h3>
          </div>
        </router-link>
        <router-link to="/graphism">
          <div class="graphism art-block">
            <h3>Graphism</h3>
          </div>
        </router-link>
      </div>
      <div class="center-art arts-block">
          <router-link to="/licence-project">
            <div class="licence-project art-block">
              <h3>Licence Project</h3>
            </div>
          </router-link>
      </div>
      <div class="right-arts arts-block">
        <router-link to="/photography">
          <div class="photography art-block">
            <h3>Photography</h3>
          </div>
        </router-link>
        <router-link to="/typography">
          <div class="typography art-block">
            <h3>Typography</h3>
          </div>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homepageItems: [
        {
          name: "illustration",
          url: "/illustration"
        },
        {
          name: "art graphique",
          url: "/graphism"
        },
        {
          name: "projet de licence",
          url: "/licence-project"
        },
        {
          name: "photographie",
          url: "/photography"
        },
        {
          name: "typographie",
          url: "/typography"
        }
      ]
    };
  }
};
</script>

<style scoped>
h1.name-title {
  font-weight: 300;
  text-transform: capitalize;
  font-size: 25px;
  margin-top: 0;
}
.homepage-content {
  padding-top: 20px;
  position: relative;
}
.homepage-content h3{
  font-size: 15px;
  font-weight: 300;
}
.art-grid{
  position: absolute;
  width: 100%;
  top: 11px;
  left: 0;
}
.artsContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}
.arts-block{
  width: 30%;
}
.left-arts{
  text-align: right;
}
.left-arts .art-block{
  border-radius: 0 4px 4px 0;
  transition: all .2s ease-in-out;
}
.left-arts a:hover .art-block{
  margin-right: 20px;
}
.right-arts{
  text-align: left;
}
.right-arts .art-block{
  border-radius: 4px 0 0 4px;
  transition: all .2s ease-in-out;
}
.right-arts a:hover .art-block{
  margin-left: 20px;
}
.center-art{
  background-color: black;
  color: white;
  margin-top: 25px;
  border-radius: 4px 4px 0 0;
  width: 25%;
  transition: all .2s ease-in-out;
}
.center-art:hover{
  margin-top: 45px;
}
.center-art .licence-project{
  margin: 0;
  padding-bottom: 0;
  height: 100%;
  border-radius: 4px 4px 0 0;
}
.center-art a{
  color: white;
  text-decoration: none;
}
.art-block{
  padding: 40px;
  background-color: black;
  margin: 25px 0;
  color: white;
}
.artCard{
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  width: auto;
  height: auto;
  -webkit-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  position: relative;
}
.artCard:hover {
  -webkit-transform: scale(1.005);
  -ms-transform: scale(1.005);
  transform: scale(1.005);
  -webkit-box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}
.artsContainer img {
  height: 45vh;
  transition: all 0.7s ease-in-out;
}
.margin-around{
  margin: 30px;
}
@media screen and (max-width: 768px){
  .homepage-content{
    position: relative;
  } 
  .artsContainer{
  flex-direction: column;
  }
  .arts-block{
    width: 65vw;
  }
  .right-arts{
    text-align: right;
  }
  .right-arts .art-block,
  .center-art,
  .center-art .art-block{
    border-radius: 0 4px 4px 0;
  }
  .center-art .licence-project{
  padding: 40px;
  margin: 0;
  text-align: right;
  }
  .center-art{
    margin-top: 0;
  }
  .center-art:hover{
  margin-top: 0;
  margin-right: 20px;
}
  .right-arts a:hover .art-block{
  margin-left: 0;
  margin-right: 20px;
}
h1.name-title {
  font-size: 2rem;
}
}
@media screen and (max-width: 449px){
  .artsContainer img {
  width: 90vw;
  height: auto;
  transition: all 0.7s ease-in-out;
  }
  .margin-around{
    margin: 0 0 50px 0;
  }
}
</style>
