<template>
  <Layout :show-logo="true" :show-about="false" :show-entries="false">
    <!-- Author intro
    <Author :show-title="true" /> -->
    
    <!-- List posts -->
    
    <h1> Header </h1>
    <div class="flex-container">
      <p style="flex 3" >
        This is my space
      </p>

      <!-- <div style="flex 1">
        <Sidemenu/> 
      </div>       -->
      
    </div>
    <!-- <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->
<!-- 
    <g-link class= "entries_link" to="/entries/">Enter the space</g-link>
    <g-link class= "entries_link" to="/self/"> Check me out</g-link> -->

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
import PostCard from '~/components/PostCard.vue'
import Sidemenu from '~/components/Sidemenu.vue'
export default {
  components: {
    PostCard,
    Sidemenu
  },
  metaInfo: {
    title: 'Portal'
  }
}
</script>

<style lang="scss">
.entries_link{
  text-decoration: none;
  color: var(--body-color)!important;
  width: 100%;
  font-size: .7em;
  // font-family: HelveticaNowText-Medium;
}


</style>
