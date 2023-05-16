<template>
    <main>
      <div class="main__container">
        <h2 class="main__container__subtitle subtitle">épisode 1</h2>
        <h2 class="main__container__title title">le chien et la tronçonneuse</h2>
        
        <h3 class="main__container__subsubtitle subsubtitle">Chapitres 1</h3>
        <img
          class="main__container__img"
          src="~assets/images/Chainsaw-Man-Saison-1-episode-1-1600x900.jpg"
          alt="l'image n'est pas disponible"
        />
      </div>
      
      <div class="main__container2">
        <h2 class="Subtitle2">épisode 11</h2>
        <h2 class="Sub">arrivée a Tokyo</h2>
        <h3 class="main__container2__subsubtitle">
          Chapitres 2-3-4-5
        </h3>
        <img
          class="main__container__img2"
          src="~assets/images/Chainsaw-Man-episode-2-780x439.jpg"
          alt="l'image n'est pas disponible"
        />
      </div>
      <div class="pagination">
  <!-- <p>Personnages Suivants</p> -->
  <a class="link" href="#">⇦</a>
  <a class="link" href="#">⇨</a>
</div>
    </main>
  </template>
  <style scoped lang="scss">
  .main {
    &__container {
      margin: 0 5em;
      background-image: linear-gradient(to bottom, #eeb314 250px, #f1f1f100 250px);
      display: grid;
      margin-top: 20px;
  
      &__subtitle {
        grid-area: 1 / 1 / 2 / 2;
        color: white;
      }
   
      &__title {
        grid-area: 2 / 1 / 3 / 2;
        font-weight: bolder;
        font-size: 3em;
      
       
      }
      &__img {
        grid-area: 3 / 1 / 4 / 2;
        max-width: 30em;
        padding-top: 40px;
      }
      &__img2 {
        grid-area: 3 / 1 / 4 / 2;
        max-width: 30em;
        align-items: end;
        margin-left: 880px;
        padding-bottom: 50px;
        top: 0;
        
      }
      &__subsubtitle {
        grid-area: 3 / 2 / 4 / 3;
        font-size: 2em;
      }
    }
    &__container2 {
      margin: 1em 5em;
      background-image: linear-gradient(to bottom, #eeb314 250px, #f0f4f400 250px);
      grid-template-rows: 2em 4em 1fr;
  
      &__subtitle {
        grid-area: 1 / 2 / 2 / 2;
        color: white;

      }
      &__title {
        grid-area: 2 / 2 / 3 / 2;
        font-weight: bolder;
        font-size: 2em;

      }
  
      &__subsubtitle {
        grid-area: 3 / 1 / 4 / 3;
        font-size: 2em;
        text-align: center;
      }
  
      &__img {
        grid-area: 1 / 2 / 4 / 3;
        max-width: 30em;
        margin-left: 1em;
      }
    }
  }

  .Sub{
    text-align: end;
    font-size: 3.5em;
    padding-right:50px;
  }


  .Subtitle2{
    text-align: end;
    color: white;
    padding-right: 4px;
  }


//   pagination

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