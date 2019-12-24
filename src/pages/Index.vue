<template>
  <Layout>
    <div>
      <div class="text-center">
        <g-image src="~/assets/images/fibonacci/fibonacciAsset 25@4x.png" max-width="100%" />
        <h2
          class="text-left mt-2"
        >Hi, I'm Dionisis Pettas, a Computer Scientist & Creator. Currently in Greece.</h2>
        <br />
      </div>

      <div>
        <p class="intro">
          We all have our chosen models of intelligence. Mine gravitate towards forming teams,
          experimenting with intelligence and satisfying my curiocity
          <a
            class="more"
            href="about"
            style="text-decoration:none;"
          >&ctdot;</a>
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
  font-weight: 500;
}
</style>
