<template>
	<div class="signature">
		<a href="/">
        <g-image alt="Logo image" class="signature__image" style="display: var(--hide-dark)" src="~/assets/images/fibonacci/fibonacciAsset 26.png"/>
		
		</a>
		<!-- <g-image alt="Logo image" class="signature__image" style="display: var(--hide-light)" src="~/assets/images/fibonacciAsset 25.png" /> -->
	
		<h1 v-if="showTitle" class="signature__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="signature__intro">
			Spiral in. Spiral out.
		</p>

		<p class="signature__links">
			<a href="//twitter.com/deepettas">Follow on Twitter</a>
			<a href="//github.com/deepettas">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/components/art/Logo.vue'

export default {
	props: ['showTitle'],
	components: {
	Logo
	}
}
</script>

<style lang="scss">
.signature {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image {
		border-radius: 0%;
		width: 110px;
		height: auto;
		margin-bottom: 1em;
		object-fit: scale-down;
		
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
