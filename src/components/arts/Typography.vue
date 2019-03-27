<template>
  <div class="typography-content">
    <h1 class="main-title">{{ mainTitle }}</h1> 
    <div :key="JSON.stringify(typographyItem)"
    v-for="typographyItem in typographyItems"
    :class="typographyItem.class"
    class="typography-item">
      <img :src="typographyItem.url" :alt="typographyItem.name"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      artName: "typography",
      mainTitle: "Typography",
      typographyItems: [
        {
          name: "Police d'écriture",
          class: 'font',
          url: require('../../assets/typography/typography-font.jpg')
        },
        {
          name: "Plus les moyens sont limités",
          class: 'sentence',
          url: require('../../assets/typography/typography-sentence.png')
        }
      ]
    };
  }
}
</script>

<style scoped>
.typography-content {
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
}

h1.main-title {
    text-transform: capitalize;
    text-align: left;
    padding-left: 4%;
    font-size: 20px;
    margin-top: 0;
    transition: all 0.2s;
}

.typography-item img{
  width: 50%;
  padding: 50px 0;
}
@media screen and (max-width: 768px){
  h1.main-title{
    text-align: center;
    padding: 0;
    transition: all 0.2s;
  }
  .typography-content{
    padding-top: 2em;
  }
  .typography-item img{
    width: 100%;
    padding: 15px 0;
  }
}
</style>
