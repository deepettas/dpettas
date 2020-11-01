<template>
  <Layout>
    <div>
      <div class="text-center">
        <g-image src="~/assets/images/fibonacci/fibonacciAsset 25@4x.png" max-width="100%" />
        <h1 class="text-left mt-2">
          Hi, I'm
          <a style="font-size: 1em; text-decoration:none;" href="/about">Dionisis Pettas</a>, a Computer Scientist & Creator. I like working with AI and Data. Currently in Greece.
        </h1>
        <br />
      </div>

      <div>
        <h3 class="mt-1">Areas of interest</h3>
        <p
          class="intro"
        >We live in an era of exponential intelligence. I am interested in understanding and architecting such intelligence.</p>
        <h3 class="mt-1">Activity space</h3>
        <p class="intro">
          Our world is governed by an emerging gradient of systems and architectures, with (post-)humanity in the center. My focus lies in humans,
          data and artificial intelligence.
        </p>
        <h3 class="mt-1">Writing</h3>

        <p class="intro">
          Information explosion has led the human mind astray when dealing with new models and abstractions. The key to innovation now lies in metabolizing all this chaos.
          In order to organise & store my neural output, this space was created.
          <!-- <a href="https://www.subneural.space" style="text-decoration:none;">subneural space</a> was created. -->
        </p>

        <p class="intro">
          <a class="more" href="about" style="text-decoration:none;">About & CV >></a>
        </p>

        <div class="text-center">
          <h2>Projects &circledast; Work</h2>
        </div>
      </div>

      <br />
      <div class="full_view_width text-center">
        <ProjectSpace />
      </div>
    </div>
  </Layout>
</template>


<script>
import ProjectSpace from "~/components/content/ProjectSpace.vue";

export default {
  components: {
    ProjectSpace
  },

  metaInfo: {
    title: "Dionisis Pettas"
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
        cover_image
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
<style lang="scss">
.full_view_width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

}
.entries_link {
  text-decoration: none;
  color: var(--body-color) !important;
  width: 100%;
  font-size: 0.7em;
}
.intro {
  font-size: 1.1em;
  font-weight: 400;
}
</style>
