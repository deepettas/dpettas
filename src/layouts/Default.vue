
<template>
  <v-app>
        <Toolbar />

    <v-fade-transition mode="out-in">
      <main v-bind="attrs">
        <Jumbotron/>
        
        <router-view />
      </main>
    </v-fade-transition>

    <Footer />
  </v-app>
</template>
<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>


<script>
import Toolbar from '~/components/Toolbar.vue'
import Footer from '~/components/Footer.vue'
import Jumbotron from '~/components/Jumbotron.vue'
export default {
  components: {
    Toolbar,
    Footer,
    Jumbotron
  },
    computed: {
      attrs () {
        return {
          key: this.$route.path,
          style: {
            minHeight: 'calc(100vh - ' + this.$vuetify.application.top + 'px'
          }
        }
      }
    }
}
</script>


<style lang="sass">
  section
    padding-top: 64px
    padding-bottom: 64px

    @media screen and (max-width: 640px)
      padding-top: 16px
      padding-bottom: 16px

  // Remove once fixed
  // https://github.com/vuetifyjs/vuetify/issues/8327
  .theme--dark.v-list-item
    color: #FFFFFF
</style>