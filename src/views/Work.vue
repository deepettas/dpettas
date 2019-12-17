<template>
  <section>
    <services />
  </section>
</template>

<script>
  export default {
    components: {
      Services: () => import('@/components/Services.vue')
    }
  }
</script>
