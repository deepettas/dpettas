<template>
  <Layout>
    <section>
      <Services />
      </section>
  </Layout>
</template>

<script>



  export default {
    
    metaInfo () {
      return {
        title: 'Hello, world !',
        meta: [
          { name: 'description', content: 'Landing page' },
        ],
        
      }
    },
    components: {
      Services: () => import('@/components/Services.vue')
    }
  }
</script>
