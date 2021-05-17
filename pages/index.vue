<template>
  <section>
    <banner-header></banner-header>
    <services></services>
    <div class="px-10 text-2xl py-10 flex justify-between font-semibold">
      <h1 class="text-black">Hot products</h1>
      <arrow-icon></arrow-icon>
    </div>
    <div class="px-10 py-10 grid grid-cols-1 gap-10 md:grid-cols-3 text-center">
      <product-layout v-for="product in products" :key="product.id" :title="product.title" :image="product.image" :price="product.price"></product-layout>
    </div>
    <banner></banner>
    <appFooter></appFooter>
  </section>
</template>

<script>
import ArrowIcon from '../components/icons/arrowIcon.vue'
import BannerHeader from '../components/UI/banner-header.vue'
import banner from '../components/UI/banner.vue'
import appFooter from '../components/UI/appFooter.vue'
import productLayout from '../components/UI/product-layout.vue'
import Services from '../components/UI/services.vue'
export default {
  components: { 
    productLayout,
    Services,
    banner,
    ArrowIcon,
    BannerHeader,
    appFooter
  },
  data() {
      return {
      products: []
      }
  },
  async mounted() {
      await this.getProducts()
  },
  methods: {
      async getProducts() {
          const response = await this.$axios.$get('https://fakestoreapi.com/products?limit=6')
          this.products = response
      }
  }
}
</script>

<style>


</style>
