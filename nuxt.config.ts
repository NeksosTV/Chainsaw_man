
const config = {}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  target: 'static', // default is 'server'
    css: [
        // charge un module Node.js directement (ici c'est un fichier SASS)
        //'bulma',
        // fichier CSS dans notre projet
        //'~/assets/css/main.css',
        // fichier SCSS dans notre projet
        '~/assets/css/main.scss',
        '~/assets/css/footer.scss'
        
      ],
      modules: ['@nuxtjs/tailwindcss'],

      
})


