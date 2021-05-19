<template>
<section>
    <section class="px-10 md:pt-10">
        <transition name="fade">
            <div v-if="success" class="fixed space-x-4 top-8 right-4 md:top-14 md:right-10 p-3 flex justify-between items-center bg-green text-white md:w-1/4 text-left rounded-md">
                <p class="text-lg font-light">{{success}}</p>
                <p class="cursor-pointer rounded-full opacity-75 cursor-pointer bg-red text-center text-white flex items-center justify-center text-lg h-6 w-6">x</p>
            </div>
        </transition>
        <div class="px-24 pb-12">
            <nuxt-link to="/collections" class="text-green flex text-lg"><img class="inline w-6 pr-1 h-6" src="../../../assets/left-arrow.svg" alt="left-arrow"> Back</nuxt-link>
        </div>
        <div v-if="loading" class="text-center mt-5">
            <div id="loading"></div>
        </div>
        <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="text-center">
            <img :src="singleProduct.image" class="inline w-auto md:h-3/6 h-48" alt="">
        </div>
        <div>
            <p class="font-semibold text-2xl py-3">{{ singleProduct.title}}</p>
            <p class="font-light text-lg">Price: {{ singleProduct.price}}</p>
            <p class="font-light text-xl py-3">Category: {{singleProduct.category}}</p>
            <p class="text-lg font-light">Description: {{singleProduct.description}}</p>
            <p class="pt-6 text-lg">Count:</p>
            <div class="flex space-x-4 items-center py-3">
                <div class="rounded-full cursor-pointer bg-gray text-center text-green flex items-center justify-center text-lg font-semibold h-8 w-8" @click="quantity > 0 ? quantity-- : quantity = 0">-</div>
                <p>{{quantity}}</p>
                <div class="rounded-full cursor-pointer bg-gray text-center flex items-center justify-center text-green text-lg font-semibold h-8 w-8" @click="quantity++">+</div>
            </div>
            <div class="flex items-center mt-4 space-x-4">
                <button @click="addCart" type="button" class="btn bg-green text-white rounded-sm focus:outline-none focus:ring focus:border-blue-300 font-semibold px-8 py-3">Add to cart </button>
                <div class="border-2 px-3 py-2 border-gray">
                    <svg width="24" class="inline" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.98421 5.66663L6.71575 4.51331C6.50676 3.62373 5.7579 2.99995 4.89901 3H4V4.33331H4.89901C5.19287 4.32417 5.45289 4.53519 5.52332 4.83997L7.74587 14.4932L7.97686 15.4865C8.18752 16.3833 8.94647 17.0091 9.81234 16.9998H18.3592V15.6665H9.81234C9.51848 15.6756 9.25846 15.4646 9.18803 15.1598L9.11311 14.8265L18.3592 12.4999C19.0427 12.3302 19.5801 11.7666 19.7514 11.0399L21 5.66663H6.98421ZM18.5652 10.7199C18.5074 10.9633 18.3264 11.1515 18.097 11.2065L8.82593 13.5332L7.29636 6.99994H19.433L18.5652 10.7199ZM7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19ZM8.33333 19C8.33333 19.3682 8.63181 19.6667 9 19.6667C9.36819 19.6667 9.66667 19.3682 9.66667 19C9.66667 18.6318 9.36819 18.3333 9 18.3333C8.63181 18.3333 8.33333 18.6318 8.33333 19ZM14.1523 18.2346C14.4619 17.4873 15.1911 17 16 17C17.1046 17 18 17.8954 18 19C18 19.8089 17.5127 20.5381 16.7654 20.8477C16.018 21.1573 15.1578 20.9862 14.5858 20.4142C14.0138 19.8422 13.8427 18.982 14.1523 18.2346ZM15.3334 19C15.3334 19.3682 15.6318 19.6666 16 19.6666C16.3682 19.6666 16.6667 19.3682 16.6667 19C16.6667 18.6318 16.3682 18.3333 16 18.3333C15.6318 18.3333 15.3334 18.6318 15.3334 19Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    </section>
    <banner></banner>
</section>
</template>
<script>
import Banner from '../../../components/UI/banner.vue'
import {mapState} from 'vuex'
export default {
  components: { Banner },
    name: 'product-name',
    data(){
        return {
            id: this.$route.params.id,
            quantity: 1,
            loading: false,
            tempcart: [],
            success: '',
            close: false
        }
    },
     computed: {
        ...mapState(['singleProduct']),
    },
    async mounted() {
        await this.getProduct()
    },
    methods: {
        addCart() {
            let item = this.singleProduct;
            item = { 
                ...item, 
                quantity: this.quantity, 
            };
            this.tempcart.push(item);
                this.success = 'Item added to cart'
            setTimeout(()=> {
                this.success = ''
            }, 3000)
            this.$store.commit("addToCart", {...item});
        },
        async getProduct() {
            this.loading = true
            try {
                await this.$store.dispatch('getSingleProduct', this.id)
                this.loading = false
            } catch (error) {
                    
            }
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