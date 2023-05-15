<template>
 
<div class="carousel-wrapper">
  <div class="carousel-container">
    <div class="carousel">
      <div class="image-one"></div>
      <div class="image-two"></div>
      <div class="image-three"></div>
    </div>
  </div>
</div>
    

<div class="parent">
  <h2 class="sub__title_episode">Dernier Episode</h2>
  <p class="p__episode">Katana VS Tronconneuse</p>
  <p class="chacha">chapitre</p>
  <p class="nbr_episode">35 - 36 - 37 - 38 - 40</p>
  <div class="div1">
<img class="img__main" src="~assets/images/Chainsaw-Man-episode-12-1600x900.jpg" alt="">
  </div>
</div>



</template>

<style lang="scss" scoped>
$size-width: 1519px;
$size-height: 500px;
$color : white;


.nbr_episode{
  left: 50px;
  position: absolute;
  margin-left: 550px;
  margin-top: 200px;
  font-size: 30px;
}
.chacha{
  left: 50px;
  position: absolute;
  margin-left: 550px;
  margin-top: 150px;
  font-size: 25px;
}

.sub__title_episode{
  color: $color;
  font-size: 25px;
}
.p__episode{
  font-size: 5em;
}

.img__main{
  height:auto;
  width: 450px;
  margin-top: 5px;
  position: relative;
  top:90px
}
.parent {
background-color: #EEB314;
margin: 50px;
padding: 50px;
}

.carousel-wrapper {
  width: $size-width;
  height: $size-height * 1.2;
}

.carousel-container {
  width: $size-width;
  height: $size-height;
  overflow: hidden;
  margin: 0 auto;
  
}

.carousel {
  display: flex;
  width: $size-width * 3;
  animation: sliding 12s infinite;

 
  
  div {
    width: $size-width;
    height: $size-height ;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .image-one {
    background-image: url("assets/images/55722-Power-Chainsaw-ManPower-Chainsaw-Man-HD-Wallpaper.jpg");
    background-size: cover;
}
  .image-two {
    background-image: url("assets/images/chainsaw-man-episode-7.png");
    background-size: cover;
}
  .image-three {
    background-image: url("assets/images/Power_bandw.jpg");
    background-size: cover;
  }
}

@keyframes sliding {
  30% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(-$size-width);
  }
  65% {
    transform: translateX(-$size-width);
  }
  70% {
    transform: translateX(-$size-width * 2);
  }
  98% {
    transform: translateX(-$size-width * 2);
  }
  100% {
    transform: translateX(0);
  }
}


</style>