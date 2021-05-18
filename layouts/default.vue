<template>
  <div>
    <navbar/>
    <main>
      <Nuxt />
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import navbar from '@/components/UI/navbar'
import AppFooter from '../components/UI/appFooter.vue'
export default {
  components: {
    navbar,
    AppFooter
  }
}
</script>
<style>
html {
  font-family: 'Inter', sans-serif;
}
</style>
