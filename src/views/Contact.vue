<template>
  <div>
    <section class="py-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14521638.285109874!2d-92.82342782189147!3d27.30311420794963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida!5e0!3m2!1sen!2sus!4v1562426706108!5m2!1sen!2sus"
        width="100%"
        height="600"
        frameborder="0"
        style="border:0"
        allowfullscreen
      />
    </section>

    <section>
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="([icon, info1, info2], i) in details"
            :key="i"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <v-icon
                size="64"
                class="mb-3"
                v-text="icon"
              />
              <div
                class="mb-2 headline"
                v-text="info1"
              />
              <div v-text="info2" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="grey lighten-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Your Name*"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Your Email*"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Subject"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                label="Your Message"
              />
            </v-col>
            <v-col text-center>
              <v-btn
                :block="$vuetify.breakpoint.smAndDown"
                class="px-5 text-capitalize"
                color="secondary"
                large
              >
                Send
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      details: [
        ['mdi-crosshairs-gps', '2620 Smith Drive', 'Titusville, FL 32796'],
        ['mdi-email', 'info@example.com', 'contact@example.com'],
        ['mdi-phone', '+1 (321) 383-4531', '']
      ]
    })
  }
</script>
