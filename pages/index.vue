<template>
  <section>
    <banner-header></banner-header>
    <services></services>
    <div class="px-10 text-2xl py-10 flex justify-between font-semibold">
      <h1 class="text-black">Hot products</h1>
      <arrow-icon></arrow-icon>
    </div>
    <div class="px-10 py-10 grid grid-cols-1 gap-10 md:grid-cols-3 text-center">
      <product-layout v-for="product in allProducts" :id="product.id" :key="product.id" :title="product.title" :image="product.image" :price="product.price"></product-layout>
    </div>
    <banner></banner>
  </section>
</template>

<script>
import ArrowIcon from '../components/icons/arrowIcon.vue'
import BannerHeader from '../components/UI/banner-header.vue'
import banner from '../components/UI/banner.vue'
import productLayout from '../components/UI/product-layout.vue'
import Services from '../components/UI/services.vue'
import {mapState, mapActions} from 'vuex'
export default {
  components: { 
    productLayout,
    Services,
    banner,
    ArrowIcon,
    BannerHeader,
  },
  data() {
      return {
      }
  },
   computed: {
    ...mapState(['allProducts']),
  },
  async mounted() {
      await this.getAllproducts()
  },
  methods: {
    ...mapActions(['getAllproducts']),
  }
}
</script>

<style>
  /* spinner */
    #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #00CB6F;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }

</style>
