<template>
  <v-card class="post_card" tile height="300" hover @click="overlay = post.img" :to="post.path">
    <v-img
      class="card_image white--text align-end"
      height="130"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <!-- <v-card-title class="card-title"></v-card-title> -->
      <h3 class="card-title" v-html="post.title" />
    </v-img>
    <div class="row flex">
      <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

      <v-card-text
        class="text--primary"
      >{{post.description }}</v-card-text>

      <v-card-actions class="tag-buttons">
        <PostTags :post="post" />
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import PostMeta from "~/components/content/PostMeta";
import PostTags from "~/components/content/PostTags";

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>
