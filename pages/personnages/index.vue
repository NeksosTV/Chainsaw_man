<template>
    <div>
        <h2 class="sub_title">Makima</h2>
        <img class="img1" src="~assets/images/Chainsaw-Man-Makima-2.webp" alt="">
    </div>
    <div>
        <h2 class="sub_title2">Denji</h2>
        <img src="~assets/images/chainsaw-man-episode-7.png" alt="">   
    </div>
    

<div class="pagination">
  <!-- <p>Personnages Suivants</p> -->
  <a class="link" href="#">⇦</a>
  <a class="link" href="#">⇨</a>
</div>
</template>

<style lang="scss">
.sub_title{
     position: absolute;
     font-size: 80px;
     color: white;
}
.sub_title2{
     position: absolute;
     font-size: 80px;
     color: white;
    right: 50px;
}

.img1{
    width: 100%;
}

 .pagination {
  display: inline-block;
  align-items: center;
  padding: 50px 650px;

}

.pagination a {
  color: black;
  float: left;
  padding: 8px 30px;
  text-decoration: none;
  transition: background-color .3s;
 font-size: 50px;
  margin: 3px;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;

}

.pagination a:hover:not(.active) {background-color:  #EEB314;} 

.link{
    background-color: #EEB314;
}

</style>