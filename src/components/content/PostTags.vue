<template>
  <div>
    <div v-if=showreal>
    <g-link  style="text-decoration: none;" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <a class="post-tags" :href="tag.path">#{{ tag.title }}</a>
    </g-link>
    </div>
    <div style="display:flex"  v-else>
      <div class="mx-1 fake-tags" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <!-- <a class="post-tags" :href="tag.path">#{{ tag.title }}</a> -->
      <span >#{{tag.title}} </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post", "showreal"]
};
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
  position: relative;
  text-decoration: none;
  text-decoration-line: none;
  filter: brightness(95%);
  
  color: var(--title-color) !important;
  position: relative;
  margin-right: 0.7em;
  font-size: 0.9em;
  background-color: var(--bg-color);
  padding: 0.3em;
  border-radius: var(--radius);

  &:hover {
    filter: brightness(80%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
}
@media screen and (max-width: 670px) {
.post-tags{
  font-size: 0.7em;
}
.fake-tags{
  font-size: 0.6em;
}
}
</style>