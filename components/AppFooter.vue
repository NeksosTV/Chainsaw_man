<template>
    <link rel="stylesheet" href="~assets/css/footer.scss">
    <footer>
  <div class="footer-container">

    <!-- <div class="title">
      <h3>Titre du footer</h3>
    </div> -->
    <ul class="menu-nav">
        <h3 class="title_nav_footer">PowerUp</h3>
        <br>
      <li>
        <NuxtLink to="/">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/personnages">Personnages</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/episode">Last Episode</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
    <div class="logo">
      <img class="logo__img" src="~assets/images/logo.webp" alt="Logo">
    </div>
  </div>
</footer>


</template>