<template>
  <section>
    <div class="container mx-auto hero__section mb-10 text-center bg-opacity-25">
      <div class="px-3">
        <h1 class="text-white font-light text-4xl">Fashion 2021 for you!</h1>
        <h1 class="text-white font-bold text-5xl pt-2">Sales up To <span class="italic text-green font-light">50% off</span></h1>
        <p class="text-white text-xl font-thin py-3">Discover the latest addictions to our amazing collections...</p>
        <nuxt-link to="/products">
          <button type="button" class="btn bg-green text-white rounded-sm focus:outline-none focus:ring focus:border-blue-300 mt-3 font-semibold px-10 py-4">SHOP NOW</button>
        </nuxt-link>
      </div>
    </div>
    <div class="px-10 text-2xl py-10 flex justify-between font-semibold">
      <h1 class="text-black">Hot products</h1>
      <svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M59.1402 8.11673C59.3271 7.96109 59.6302 7.96109 59.8171 8.11673L64.8598 12.3158L64.916 12.3719C65.0467 12.53 65.0246 12.7488 64.8517 12.8861L59.8089 16.8899L59.7413 16.9347C59.5518 17.0386 59.2944 17.0181 59.1322 16.8765L59.0784 16.8202C58.9537 16.6624 58.9783 16.448 59.1483 16.313L63.3211 13H44.9762L44.8906 12.9919C44.6685 12.9496 44.5 12.7455 44.5 12.5C44.5 12.2239 44.7132 12 44.9762 12H63.1277L59.1402 8.68037L59.0848 8.62517C58.9556 8.46984 58.974 8.25508 59.1402 8.11673Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85981 8.11673C7.6729 7.96109 7.36985 7.96109 7.18293 8.11673L2.14019 12.3158L2.084 12.3719C1.95329 12.53 1.97541 12.7488 2.14834 12.8861L7.19108 16.8899L7.25866 16.9347C7.44823 17.0386 7.70562 17.0181 7.86777 16.8765L7.92156 16.8202C8.04631 16.6624 8.02172 16.448 7.85166 16.313L3.67891 13H22.5238L22.6094 12.9919C22.8315 12.9496 23 12.7455 23 12.5C23 12.2239 22.7868 12 22.5238 12H3.87229L7.85981 8.68037L7.91519 8.62517C8.04442 8.46984 8.02596 8.25508 7.85981 8.11673Z" fill="#E6E6EB"/>
      </svg>
    </div>
    <div class="px-10 py-10 grid grid-cols-1 gap-10 md:grid-cols-3 text-center">
      <product-layout v-for="product in products" :key="product.id" :title="product.title" :image="product.image" :price="product.price"></product-layout>
    </div>
  </section>
</template>

<script>
import productLayout from '../components/UI/product-layout.vue'
export default {
  components: { 
    productLayout
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
.hero__section {
  background-image: linear-gradient(to right, #000000, rgba(0, 0, 0, 0.08)), url(../assets/bg.jpg);
  background-size: cover;
  height: 80vh;
  padding-top: 150px;
}
</style>
