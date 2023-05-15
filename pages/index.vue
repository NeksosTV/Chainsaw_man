<template>
        <!-- <link rel="stylesheet" href="~assets/css/carrousel.scss"> -->
<div class="carousel-wrapper">
  <div class="carousel-container">
    <div class="carousel">
      <div class="image-one"></div>
      <div class="image-two"></div>
      <div class="image-three"></div>
    </div>
  </div>
</div>
    
    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium labore placeat perferendis nihil modi ipsum odio. Veniam animi doloremque odit laboriosam ullam, ducimus praesentium? Numquam ut ex culpa hic doloribus.
    Quam, provident iure magnam vero iusto in dolorem sed rem. Quibusdam error fugiat ullam repellat quia totam porro, quidem, nihil modi enim, sint nam vel maiores harum voluptas? Beatae, velit.
    Id, veniam magnam molestias fuga maxime cumque nesciunt totam atque expedita officia at harum quaerat blanditiis culpa architecto vero alias inventore eaque eligendi nemo? Possimus exercitationem ex optio quod praesentium!
    A voluptate assumenda, quia cumque amet molestias dolor nulla eius rerum eaque? Modi esse quasi consequatur vel tempora enim nobis numquam. Rerum est similique pariatur in consequatur libero voluptatum adipisci.
    Nisi recusandae sunt dolores asperiores quibusdam cum eos similique? Possimus officiis expedita molestias pariatur perspiciatis necessitatibus? Quis maxime eveniet inventore nisi obcaecati? Eum illum nemo, quasi unde consequuntur quos eligendi.</h2>
</template>





<style lang="scss" scoped>
$size-width: 1519px;
$size-height: 500px;

.carousel-wrapper {
  width: $size-width;
  height: $size-height * 1.2;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
  //border-radius: 20px;
 // margin: 100px auto 20px;
 
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
  // &:hover {
  //   animation-play-state: paused;
  // }
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

@media screen and (max-width: 768px) {
  $size-width: 240px;
  $size-height: 150px;
  .carousel-wrapper {
    width: $size-width * 1.3;
    height: $size-height * 1.4;
  }

  .carousel-container {
    width: $size-width;
    height: $size-height;
  }

  .carousel {
    width: $size-width * 3;
     div {
      width: $size-width;
      height: $size-height;
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
}



</style>