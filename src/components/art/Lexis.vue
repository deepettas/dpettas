
<template>
        <p class="lexis" v-text="lexis.lexis">  </p>
</template>

<script>


export default {
  components: {
    
  },
  props: ['lexis']


}
</script>

<style lang="scss">
//colors
$white: #fff;
.lexis {
    position: absolute;
    background: transparent;
    user-select: none;

    color: var(--title-color);

    font-size: 30px;
}
.lexis:hover{
    color: blue;
    transition: 500ms ease-in-out;
    width: 70%;
}

</style>