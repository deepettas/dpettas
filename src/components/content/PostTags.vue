<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span># </span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 1em 0 0;
 
  &__link {
	margin-right: .7em;
  	font-size: .8em;
  	color: currentColor;
  	text-decoration: none;
  	background-color: var(--bg-color);
  	color: currentColor!important; //Todo: remove important;
  	padding: .3em;
  	border-radius: var(--radius);
  }
  &__link:hover{
	filter: brightness(90%);
	-webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;

  }
}
</style>