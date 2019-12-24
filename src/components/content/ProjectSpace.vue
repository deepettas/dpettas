<template>
  <v-container grid-list-md text-xs-center>

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
                <ProjectCard :project="project" />
                </v-col>
            </transition-group>
          </v-container>
        </v-responsive>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import projects from "~/../TheVault/projects.json";
import PostTags from "~/components/content/PostTags.vue";
import ProjectCard from "~/components/content/ProjectCard.vue";
export default {
  name: "ProjectSpace",
  components:{
    PostTags,
    ProjectCard
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