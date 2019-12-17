// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import './assets/style/index.scss'
import router from './router'
import store from './store'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  })

  const vuetifyOpts = {
    rtl: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#F5F5F5',
          accent: '#DCDCDC',
          secondary: '#262626',
          success: '#4CAF50',
          info: '#FF5A09',
          warning: '#FB8C00',
          error: '#FF5252'
        },
        light: {
          primary: '#262626',
          accent: '#3F3F3F',
          secondary: '#F5F5F5',
          success: '#4CAF50',
          info: '#FF5A09',
          warning: '#FB8C00',
          error: '#FF5252'
        }
      }
    }
  }
  
  // opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify(vuetifyOpts)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
