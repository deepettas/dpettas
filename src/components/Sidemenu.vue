<template>

	<div class="side-menu">
			<g-link class="link" to='https://subneural.space/'> subneural space </g-link>
        	<g-link class="link" to='/about/'> about this space </g-link>
        	<g-link class="link" to='/entries/'> all neural outputs </g-link>
			<p class="spacer">   </p>
			<g-link class="link" to='/self/'> Dionisis Pettas </g-link>
			

	</div>
</template>


<style lang="scss">
.side-menu{
	display: flex;
	flex-direction: column;
    margin-left: auto;
	text-align: right;
	width: 200px;
    position: relative;
    right: 0px;
    margin-right: 6.25%;
    z-index: 10;
	font-size: 0.9em;
	font-weight: 600;
	@media screen and (max-width: 650px) {
		font-size: 1em;
		width: 200px;
    }

}
.link {
	
	text-decoration: none;
	margin-bottom: 7px;
    color: var(--body-color)!important;
    color: var(--body-color);
    cursor: pointer;
    padding-right: 1em;
    &:hover {
     opacity: .8
    }
      &:focus {
      outline: none;
	}
	@media screen and (max-width: 650px) {
		margin-bottom: 10px;
    }
}
.spacer {
	margin-bottom: 77px;
	@media screen and (max-width: 650px) {
		margin-bottom: 0px;
    }
}

</style>