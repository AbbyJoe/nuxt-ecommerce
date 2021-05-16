<template>
  <div>
    <navbar/>
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import navbar from '@/components/UI/navbar'
export default {
  components: {
    navbar
  }
}
</script>
<style>
html {
  font-family: 'Inter', sans-serif;
}
</style>
