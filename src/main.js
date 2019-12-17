// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import './assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  })

 
  const opts = { icons: {
    iconfont: 'mdi',

  }, theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: '#F5F5F5',
        accent: '#DCDCDC',
        secondary: '#262626',
        success: '#4CAF50',
        info: '#FF5A09',
        warning: '#FB8C00',
        error: '#FF5252',
        background: 'ffc0cb'

      },
      light: {
        primary: '#ffc0cb',
        accent: '#ffc0cb',
        secondary: '#ffc0cb',
        success: '#ffc0cb',
        info: '#ffc0cb',
        warning: '#ffc0cb',
        error: '#FF5252',
        

      }
    }
  } }// opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify(opts)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
