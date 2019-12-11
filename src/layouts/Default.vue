<template>
  <div id="app">

    <header class="header">
      
      <div class="header__right">
        <!-- <ToggleTheme  style="margin-bottom: 5px"/> -->
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  props: {
    showLogo: { default: true },
    showAbout: {default: true},
    showEntries: {default: true}
  },
  components: {
    Logo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--body-color)!important;

  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  font-size: .7em;
  // font-family: HelveticaNowText-Medium;
  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
  
}


.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
