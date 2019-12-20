// Import main css
import '~/assets/style/index.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, appOptions, head, isClient }) {

  router.options.linkActiveClass = 'is-active';
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Noto+Sans:300,400,500,700,400italic|Material+Icons'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
  })
  head.meta.push({
    name: 'keywords',
    content: 'dennis, dionisis,pettas,cv,ceid'
  })
  const opts = { icons: {
    
    theme: {
      themes: {
        light: {
          primary: '#00000',
          secondary: '#b0bec5',
          anchor: '#8c9eff',
        },
      },
    },
    iconfont: 'mdi',
    
    
  }, 
  }// opts includes, vuetify themes, icons, etc.
  
  Vue.use(Vuetify);
  appOptions.vuetify = new Vuetify(opts)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  head.script.push({src: '/hotjar.js'});
}

