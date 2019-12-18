<template>
  <Layout :show-logo="false" :show-about="false" :show-entries="false">

 

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
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

<script>
import PostCard from '~/components/content/PostCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'

export default {
  components: {
    PostCard,
    Sidemenu,

  },
  metaInfo: {
    title: 'Dionisis Pettas'
  },
  
  mounted() {
  }
}
</script>

<style lang="scss">
.entries_link{
  text-decoration: none;
  color: var(--body-color)!important;
  width: 100%;
  font-size: .7em;
}


</style>
