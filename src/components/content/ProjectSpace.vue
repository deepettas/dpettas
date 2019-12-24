<template>
<div>
                    <EntryCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>

</div>

  <!-- <v-container grid-list-md text-xs-center>

    <v-row class="px-0">
      <v-col cols="12">
        <v-responsive min-height="700">
          <v-container>
            <transition-group tag="v-row" name="fade-transition">
              <v-col
                v-for="project in projects"
                :key="project.img"
                cols="12"
                class="gallery-card"
                md="4"
              >
                <template>
                  <v-card
                    class="project_card"
                    tile
                    height="300"
                    hover
                    @click="overlay = project.img"
                    :to="project.path"
                  >
                    <!-- <v-fade-transition>
                        <v-overlay v-if="hover" absolute>Yo</v-overlay>
                      </v-fade-transition>

                      <v-slide-y-reverse-transition>
                        <v-footer v-if="hover" absolute class="justify-center" height="75">
                          <div class="heading">{{ project.name }}</div>
                        </v-footer>
                    </v-slide-y-reverse-transition>-->

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
              </v-col>
            </transition-group>
          </v-container>
        </v-responsive>

        <!-- <v-fade-transition mode="out-in">
          <v-overlay
            v-if="overlay"
            fixed
            opacity=".9"
          >
            <v-btn
              color="transparent"
              depressed
              fab
              fixed
              large
              right
              top
              @click="overlay = false"
            >
              <v-icon large>
                mdi-close
              </v-icon>
            </v-btn>

            <v-img
              :src="`/static/${overlay}`"
              width="800"
              max-width="90vw"
            />
          </v-overlay>
        </v-fade-transition> -->
      </v-col>
    </v-row>
<!-- 
    <v-layout row wrap>
      <v-card tile class="mx-auto mt-4" outlined v-for="project in projects" :key="project.title" >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{ project.type }}</div>
            <v-list-item-title class="headline mb-1">{{ project.title }}</v-list-item-title>
            <div class="text--primary">
              <br />
              {{ project.description }}
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn
            v-for="(url, name) in project.urls"
            :key="url"
            text
            :href="url"
            target="_blank"
          >{{ name }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout> -->
  </v-container> -->
</template>

<script>
import projects from "~/../TheVault/projects.json";
import PostTags from "~/components/content/PostTags.vue";
export default {
  name: "ProjectSpace",
  components:{
    PostTags
  },
  data() {
    return {
      category: null,
      
      categories: [
        {
          text: "All Services",
          filter: null
        },
        {
          text: "Skyscrapers",
          filter: 1
        },
        {
          text: "Government",
          filter: 2
        },
        {
          text: "Customized",
          filter: 3
        }
      ],
      projects: [
        {
          name: "Project 1",
          img: "project1.png",
          categories: [1, 3]
        },
        {
          name: "Project 2",
          img: "project2.png",
          categories: [2, 3]
        },
        {
          name: "Project 3",
          img: "project3.png",
          categories: [4, 3]
        },
        {
          name: "Project 4",
          img: "project4.png",
          categories: [1, 2]
        },
        {
          name: "Project 5",
          img: "project5.png",
          categories: [2, 4]
        },
        {
          name: "Project 6",
          img: "project6.png",
          categories: [1, 4]
        },
        {
          name: "Project 6",
          img: "project6.png",
          categories: [1, 4]
        },
        {
          name: "Project 6",
          img: "project6.png",
          categories: [1, 4]
        },
        {
          name: "Project 6",
          img: "project6.png",
          categories: [1, 4]
        },
        {
          name: "Project 6",
          img: "project6.png",
          categories: [1, 4]
        }
      ]
    };
  }
};
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }} ,order: DESC, sortBy: "index") {
    edges {
      node {
        id
        title
        display_index
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>



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
    background-color: var(--bg-color)!important;
}
.card-title{
    background-color: var(--bg-color);
    font-size: 0.9em;
    display: table;
    padding: 0;
    opacity: 0.6;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
    
    
    color: var(--title-color);
}
.tag-buttons{
    position: absolute;
    bottom: 0%;
    left: 1%;
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