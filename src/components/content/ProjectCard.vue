<template>
    
   
                  <v-card
                    class="project_card"
                    tile
                    height="300"
                    hover
                    @click="overlay = project.img"
                    :to="project.path"
                  >
                    

                    <v-img
                      class="card_image white--text align-end"
                      height="130"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title class="card-title">Top 10 Australian beaches</v-card-title>
                    </v-img>
                    <div class="row flex">
                    

                      <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

                      <v-card-text class="text--primary">{{project.description }} Description: This is a random description lorem ipsum keftedakos pakis pakis </v-card-text>

                      <v-card-actions class="tag-buttons">
                        <PostTags  :post="project"/>
                      </v-card-actions>
                    </div>
                  </v-card>
</template>

<script>
import PostMeta from '~/components/content/PostMeta'
import PostTags from '~/components/content/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['project'],
}
</script>
