<template>
    <div>
       <div class="flex items-center justify-between px-10 py-6">
           <div class="flex items-center space-x-2">
                <location-icon></location-icon>
                <span class="text-base font-medium">City</span>
           </div>
            <logo></logo>
            <div class="flex space-x-4">
                <search-icon></search-icon>
                <cart-icon></cart-icon>
            </div>
       </div>
       <section class="container mx-auto flex-wrap space-x-10 py-3 pb-10 flex justify-center">
           <nuxt-link to="/" class="text-green">Home</nuxt-link>
           <nuxt-link to="/collections" class="text-green">Collections</nuxt-link>
           <!-- <nuxt-link to="/about-us" class="text-green">About Us</nuxt-link> -->
           <!-- <nuxt-link to="/services" class="text-green">Services</nuxt-link> -->
           <nuxt-link to="/contact" class="text-green">Contact</nuxt-link>
       </section>
    </div>
</template>
<script>
import locationIcon from '@/components/icons/locationIcon.vue'
import Logo from '@/components/icons/logo.vue'
import SearchIcon from '@/components/icons/searchIcon.vue'
import CartIcon from '@/components/icons/cartIcon.vue'
export default {
    name: 'navbar',
    components: { 
        locationIcon, 
        CartIcon, 
        SearchIcon, 
        Logo
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
      
    }    
}
</script>

<style scoped>

</style>