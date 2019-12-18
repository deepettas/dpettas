<template>
  <div class="logo_hover">
    <g-image
      alt="Logo image"
      class="white_art  base hang"
      src="~/assets/images/wt_base.png"
    />
    <g-image
      alt="Logo image"
      class="white_art  mid"
      src="~/assets/images/wt_mid.png"
    />
    <g-image
      alt="Logo image"
      class="white_art  top hover"
      src="~/assets/images/wt_top.png"
    />


  <!-- <g-image
      alt="Logo image"
      class="white_art white_art__image_light"
      src="~/assets/images/Logo_white.png"
      /> -->

  </div>
</template>

<script>
import Lexis from "~/components/art/Lexis.vue";

export default {
  components: {
    Lexis
  },
  data() {
    return {};
  }
};
</script>


<style lang="scss">
// Default options
$defaultDuration: .3s;
$primaryColour: #ececec;
$secondaryColour: #666;
$shadowColour: rgba(0, 0, 0, .6);


@mixin hideTapHighlightColor() {
	//Prevent highlight colour when element is tapped
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

@mixin hardwareAccel() {
	//Improve performance on mobile/tablet devices
	transform: translateZ(0);
}

@mixin improveAntiAlias() {
	//Improve aliasing on mobile/tablet devices
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.white_art {
  left: 50%;
  margin-left: -(8vw);
  user-select: none;
  width: 16vw;
  height: auto;
  display: var(--hide-light);

	@media screen and (max-width: 650px) {
		
		width: 12vh;
		margin-left: -(6vh);
		margin-top: -(10vh);

	}

}

.base{
  position: absolute;
    top: 40.5%;

}
.mid{
  z-index: 3;
  top: 40%;
  position:absolute;
}
.top{
  z-index: 4;
  top: 39.5%;
  position: absolute;
}
div.logo_hover{
  width:100%;
}

div.logo_hover:hover .top {
    	transform: translateY(-10px);
		animation-name: hover;
		animation-duration: 1.5s;
		animation-delay: $defaultDuration;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
    
}
div.logo_hover:hover .base {
    	transform: translateY(+10px);
		animation-name: hang;
		animation-duration: 1.5s;
		animation-delay: $defaultDuration;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
    
}

/* Hover */
@keyframes hover {
	50% {
		transform: translateY(-7px);
	}

	100% {
		transform: translateY(-10px);
	}
}
.hover {
	// display: inline-block;
	transition-duration: .5s;
	transition-property: transform;

	@include hideTapHighlightColor();
	@include hardwareAccel();
	@include improveAntiAlias();

	&:hover {
		transform: translateY(-10px);
		animation-name: hover;
		animation-duration: 1.5s;
		animation-delay: $defaultDuration;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
}



/* Hang */
@keyframes hang {
	50% {
		transform: translateY(7px);
	}

	100% {
		transform: translateY(10px);
	}
}

.hang {
	// display: inline-block;
	transition-duration: .5s;
	transition-property: transform;

	@include hideTapHighlightColor();
	@include hardwareAccel();
	@include improveAntiAlias();

	&:hover {
		transform: translateY(10px);
		animation-name: hang;
		animation-duration: 1.5s;
		animation-delay: $defaultDuration;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
}


</style>