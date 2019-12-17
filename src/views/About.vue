<template>
  <div>
    <section class="white">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h2
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']"
              class="mb-4"
            >
              My name is Michael George.<br>
              I want to design your next infrastructure.
            </h2>

            <p class="subtitle-1">
              Etiam ultricies nisi vel augue. Nullam cursus lacinia erat. Donec vitae orci sed dolor rutrum auctor. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Etiam rhoncus. Nullam dictum felis eu pede mollis pretium. Nullam accumsan lorem in dui. Vestibulum ullamcorper mauris at ligula.
            </p>
            <p class="mb-5">
              Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mollis hendrerit risus. Donec vitae sapien ut libero venenatis faucibus. In hac habitasse platea dictumst. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>

            <v-btn
              outlined
              color="primary"
              class="px-5"
              large
            >
              Hire Me
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="5"
            offset-md="1"
          >
            <v-card>
              <v-img src="/static/project7.png" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            v-for="(highlight, i) in highlights"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="mx-n3"
              color="transparent"
              flat
            >
              <v-card-title v-text="highlight" />
              <v-card-text>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Proin faucibus arcu quis ante. Nulla consequat massa quis enim. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Fusce a quam.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="white">
      <v-container>
        <v-row>
          <v-col
            v-for="([icon, number, name], i) in experiences"
            :key="i"
            cols="6"
            md="3"
          >
            <div class="text-center">
              <v-icon
                size="64"
                class="mb-3"
                v-text="icon"
              />
              <div
                class="display-2 font-weight-bold mb-2"
                v-text="number"
              />
              <div
                class="text-uppercase"
                v-text="name"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      highlights: [
        'Architecture development',
        'Cloud computing',
        'Consulting',
        'AWS maintenance',
        'Corporate training',
        'Backend hardening'
      ],
      experiences: [
        ['mdi-vuejs', '75', 'Vue'],
        ['mdi-vuetify', '100', 'Vuetify'],
        ['mdi-aws', '67', 'AWS'],
        ['mdi-server-security', '95', 'Security']
      ]
    })
  }
</script>
