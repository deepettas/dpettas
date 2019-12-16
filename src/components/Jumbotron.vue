<template>
  <v-img
    v-if="namespace === 'Home'"
    :height="$vuetify.breakpoint.xsOnly ? '100vh' : '70vh'"
    gradient="to top, rgba(255, 255, 255, .75), rgba(255, 255, 255, .75)"
    src="/static/hero.jpg"
  >
    <v-container
      fill-height
      fluid
      :px-12="$vuetify.breakpoint.mdAndUp"
    >
      <v-row align-center>
        <v-slide-x-transition appear>
          <v-col>
            <h1
              class="text-uppercase font-weight-bold mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']"
            >
              Hi, I'm Michael George
            </h1>

            <div
              class="mb-4"
              :class="[$vuetify.breakpoint.xsOnly ? 'headline' : 'display-2 font-weight-light']"
            >
              I am a Software Engineer
            </div>

            <v-responsive
              max-width="600"
              class="mb-5"
            >
              Vivamus elementum semper nisi. Maecenas malesuada. Donec sodales sagittis magna. Proin faucibus arcu quis ante. Vivamus quis mi.
            </v-responsive>

            <v-btn
              large
              class="px-5"
              color="primary"
            >
              Hire Me
            </v-btn>
          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>
  </v-img>

  <v-sheet
    v-else
    :min-height="$vuetify.breakpoint.smAndDown ? '45vh' : '300px'"
    color="grey lighten-3"
    height="20vh"
  >
    <v-container fill-height>
      <v-row
        align-content="center"
        justify="center"
        class="fill-height"
      >
        <v-col cols="12">
          <h1
            class="display-2 text-center"
            v-text="title"
          />
        </v-col>

        <v-breadcrumbs
          :items="breadcrumbs"
          class="grey--text pb-0 px-3"
        />
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  export default {
    computed: {
      breadcrumbs () {
        const home = { text: 'Home', to: '/' }

        switch (this.namespace) {
          case 'About': return [home, { text: 'About Me' }]
          case 'Contact': return [home, { text: 'Contact Me' }]
          case 'Work': return [home, { text: 'My Work' }]
          default: return []
        }
      },
      namespace () {
        return this.$route.name
      },
      title () {
        switch (this.namespace) {
          case 'About': return 'About Me'
          case 'Contact': return 'Contact Me'
          case 'Work': return 'My Work'
          default: return ''
        }
      }
    }
  }
</script>
