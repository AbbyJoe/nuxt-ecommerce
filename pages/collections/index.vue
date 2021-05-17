<template>
    <div>
        <section>
            <div class="px-10 flex justify-between items-center ">
                <p @click="showCategories = !showCategories" class="cursor-pointer text-lg">Categories <svg class="inline" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94352 0.350758L4.63636 4.93982C4.56105 5.02006 4.43895 5.02006 4.36364 4.93982L0.0564837 0.350758C-0.0188279 0.270517 -0.0188279 0.140421 0.0564837 0.0601806C0.0926495 0.0216476 0.141701 0 0.192847 0H8.80715C8.91366 0 9 0.0919918 9 0.205469C9 0.259963 8.97968 0.312225 8.94352 0.350758Z" fill="black"/>
                    </svg>
                </p>
                <p class="text-xl font-semibold">{{name}}</p>
            </div>
            <transition name="fade">
                <div class="px-10">
                    <div v-if="showCategories" class="absolute shadow-md md:w-1/6 w-26 mt-3">
                        <div class="py-3 bg-white cursor-pointer hover:bg-green hover:text-white px-4" v-for="category in categories" :key="category">
                            <p @click="getCateg(category)">{{category}}</p>
                        </div>
                    </div>
                </div>
            </transition>
            <div class="px-10 py-10 grid grid-cols-1 gap-10 md:grid-cols-3 text-center">
                <product-layout v-for="product in products" :id="product.id" :key="product.id" :title="product.title" :image="product.image" :price="product.price"></product-layout>
            </div>
            <banner></banner>
            <app-footer></app-footer>
        </section>
    </div>
</template>

<script>
import AppFooter from '../../components/UI/appFooter.vue'
import Banner from '../../components/UI/banner.vue'
import productLayout from '../../components/UI/product-layout.vue'
export default {
  components: { productLayout, Banner, AppFooter },
    data() {
    return {
    categories: [],
    products: [],
    name:'All',
    showCategories: false
    }
  },
  async mounted() {
      await this.getProductCateg(),
      await this.getCateg()
      await this.getProduct()
  },
  methods: {
      async getProductCateg() {
          const response = await this.$axios.$get('https://fakestoreapi.com/products/categories')
          this.categories = response
      },
      async getProduct() {
        const response = await this.$axios.$get('https://fakestoreapi.com/products')
        this.products = response
    },
      async getCateg(categ) {
          const res = await this.$axios.$get(`https://fakestoreapi.com/products/category/${categ}`)
          this.products = res
          this.name = categ
          this.showCategories = false
      }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>