<template>
  <div class="about_container" >
    <span class=" about_container__title" v-html="post.section"  />
    <p class=" about_container__content" v-html="post.description"  />
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>
