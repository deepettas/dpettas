<template>
  <Layout :show-logo="true" :show-about="true" :show-entries="false">
    <h2 class="entry__title">all neural outputs</h2>

    <div class="flex-container">
      <div style="flex: 4" class="posts">
        <EntryCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </div>

      <div style="flex: 1">
        <Sidemenu />
      </div>
    </div>
  </Layout>
</template>


<script>
import EntryCard from "~/components/content/EntryCard.vue";
export default {
  components: {
    EntryCard
  },
  metaInfo: {
    title: "Entries"
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
