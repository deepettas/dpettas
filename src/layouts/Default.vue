<template>
  <v-app>
    <v-navigation-drawer
      temporary
      width="10rem"
      mobile-break-point="0"
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :href="item.href"
          active-class="highlighted"
          :class="item.href === $route.path ? 'highlighted' : ''"
          :target="item.target ? item.target : ''"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <br />
      <v-divider :inset="inset"></v-divider>
      <v-subheader>Social</v-subheader>

      <v-list dense>
        <div v-for="item in socialEntries" :key="item.title">
          <v-list-item v-if="item.title" :href="item.href" target="_blank">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left height="42" elevation='4'>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar-title" ><a style="text-decoration: none; color: black;" href="/about">@deepettas</a></v-toolbar-title>
      <v-spacer />

      <!-- <v-switch v-model="darkMode" label="Dark Mode" style="margin-top: 26px;"></v-switch> -->
      <div class="toolbar-icons">
        <v-btn
          icon
          class="toolbar-buttons"
          v-for="entry in socialEntries"
          :key="entry.href"
          :href="entry.href"
          target="_blank"
        >
          <v-icon>{{ entry.icon }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <transition name="fade" appear>
      <v-content>
        <v-container fluid fill-height>
          <v-layout fill-width>
            <div class="col-8 mx-auto">
              <main>
                <!-- a wrapper for slot is needed -->
                <slot />
                <!-- the content -->
              </main>
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </transition>

    <v-footer app inset absolute>
      <span class="footer">Copyright &copy; Dionisis Pettas 2020</span>
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
import menuItems from "~/../TheVault/json/menu.json";
import socialEntries from "~/../TheVault/json/social.json";
export default {
  name: "Default",
  metaInfo: {
    meta: [
      { property: "og:title", content: "Dionisis' Personal Website" },
      { property: "og:type", content: "website" }
    ]
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  data() {
    return {
      menuItems,
      socialEntries,
      darkMode: false,
      drawer: false
    };
  },
  watch: {
    darkMode(newVal) {
      this.$vuetify.theme.dark = newVal;
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Noto Sans", sans-serif;
}
.toolbar-buttons{
  width: 10px!important;
}

.footer {
  font-size: 10px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.highlighted{
  /* the gradient on top, adjust color and opacity to your taste */
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
}
.fade-enter {
  opacity: 0;
}

.col-8{
  max-width: 62.5vw;
  min-width: 62.5vw
}
@media screen and (max-width: 670px) {
  .toolbar-title {
    font-size: 1em;
    margin-left: -1em;
  }
  .toolbar-icons {
    display: none;
  }
 
  .col-8 {
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
}
</style>
