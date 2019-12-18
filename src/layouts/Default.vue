<template>
    <v-app >
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item v-for="item in menuItems" :key="item.title" :href="item.href" :target="item.target ? item.target : ''">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}  
              </v-list-item-title>
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
              <v-list-item-title>
                {{ item.title }}  
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>@deepettas</v-toolbar-title>

        <v-spacer />

        <!-- <v-switch v-model="darkMode" label="Dark Mode" style="margin-top: 26px;"></v-switch> -->
        <div class="toolbar-icons">
        <v-btn icon class="mx-1" v-for="entry in socialEntries" :key="entry.href" :href="entry.href" 
          target="_blank">
          <v-icon> {{ entry.icon }} </v-icon>
        </v-btn>
        </div>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout fill-width>
            <div class="col-10 mx-auto ">
              <slot />
            </div>
          </v-layout>
        </v-container>
      </v-content>

      <v-footer app inset>
        <span class="footer">Copyright &copy; Dionisis Pettas 2019</span>
      </v-footer>
    </v-app>
</template>

<script>
import menuItems from "~/../TheVault/json/menu.json"
import socialEntries from "~/../TheVault/json/social.json"
export default {
  name: "Default",
  metaInfo: {
    meta: [
      { property: "og:title", content: "Zarkopafilis' Personal Website" },
      { property: "og:type", content: "website" }
    ]
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  data() {
    return {
      menuItems,
      socialEntries,
      darkMode: true,
      drawer: null
    };
  },
  watch: {
    darkMode(newVal) {
      this.$vuetify.theme.dark = newVal
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Noto Sans', sans-serif;
}
.fill-width {
  width: 100%;
}
.footer {
  font-size: 14px;
}
@media screen and (max-width: 670px) {
  .toolbar-icons {
    display: none;
  }
  .col-10 {
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
}
</style>
