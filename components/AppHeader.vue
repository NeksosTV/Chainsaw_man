
<template>
     <!-- link des fichier css -->
      <link rel="stylesheet" href="~assets/css/main.scss" />


    <header class="header">

    
        <nav >
            <h1 class="header__title">PowerUp</h1>
            <p class="header__p">Le fan site pas officiel de ChainSaw man</p>
            <div >
                <div>
                    <ul >
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
                            <NuxtLink to="/about">A propros</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>