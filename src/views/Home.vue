<template>
  <section>
    <services />
  </section>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: 'Creative'
      }
    },

    components: {
      Services: () => import('@/components/Services.vue')
    }
  }
</script>
