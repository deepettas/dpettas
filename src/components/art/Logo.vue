<template>
	<g-link class="logo" to="/">
	<g-image alt="Logo image" class="logo__image_dark" src="~/assets/images/Logo_black.png" />
	<g-image alt="Logo image" class="logo__image_light" src="~/assets/images/Logo_white.png" />
	
	  <span class="logo__text">
		  
	    {{ $static.metadata.siteName }}
	  </span>
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>





<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color)!important;
  &__image_dark {
		vertical-align: middle;
		border-radius: 99px;
		height: 27px;
		width: 27px;
		margin-right: .9em;
		display: var(--hide-dark);
  		transition: display .6s;

		
  };
	&__image_light {
		vertical-align: middle;
		border-radius: 99px;
		height: 27px;
		width: 27px;
		margin-right: .9em;
		display: var(--hide-light);
  		transition: display .6s;


		
	}

}
</style>
