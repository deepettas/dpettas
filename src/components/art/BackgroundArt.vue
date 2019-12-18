<template>

  <div >
    <g-image
        alt="Logo image"
        class="logo_background logo_background__image_dark"
        src="~/assets/images/Logo_black.png"
      />
  
  </div>

</template>

<script>

export default {
components:{
    
},
data() {
  return 
  },

};
</script>


<style lang="scss">
.logo_background {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-42%, -50%);

  height: 13vh;
  width: auto;
  
  &__image_dark {
		display: var(--hide-dark);
  };

	&__image_light {
    display: var(--hide-light);
    z-index: 999;

	}
  
}




</style>