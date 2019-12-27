<template>
  <v-container grid-list-md text-xs-center>
    <v-row class="px-0">
      <v-col cols="12">
        <v-responsive min-height="700">
          <v-container>
            <transition-group tag="v-row" name="fade-transition">
              <v-col
                v-for="post in $page.posts.edges"
                :key="post.node.id"
                cols="12"
                class="gallery-card"
                md="4"
              >
                <v-card
                  class="project_card"
                  tile
                  height="300"
                  hover
                  @click="overlay = post.node.img"
                  :to="post.node.path"
                >
                  <v-img
                    class="card_image white--text align-end"
                    height="130"
                    :src="post.node.cover_image.src"
                  >
                    <v-card-title class="card-title" v-html="post.node.title"></v-card-title>
                    <!-- <h3  class="card-title" v-html="post.node.title" /> -->
                  </v-img>
                    <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

                    <v-card-text class="text--primary" v-html="post.node.description"></v-card-text>

                    <v-card-actions class="tag-buttons">
                      <PostTags :post="post.node" />
                    </v-card-actions>
                </v-card>
              </v-col>
            </transition-group>
          </v-container>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostTags from "~/components/content/PostTags.vue";
import ProjectCard from "~/components/content/ProjectCard.vue";
export default {
  name: "ProjectSpace",
  components: {
    PostTags,
    ProjectCard
  },

  data() {
    return {};
  }
};
</script>





<style>
.gallery-card {
  transform-origin: center center 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.fade-transition-leave,
.fade-transition-leave-active,
.fade-transition-leave-to {
  display: none;
}
.project_card {
  background-color: var(--bg-color) !important;
}
.card-title {
  /* background-color: var(--bg-color); */
  color: var(--bg-color);
  font-size: 1.1em;
  font-weight: 500;
  display: table;
  padding: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
}
.tag-buttons {
  position: absolute;
  bottom: 0%;
  left: 1%;
  width:100%;
  padding-left: 10;
}
@media screen and (max-width: 670px) {
  .categories_span {
    font-size: 0.6em;
  }
  .project_card {
    height: 180px !important;
  }
  .card_image {
    height: 50% !important;
  }
}
</style>