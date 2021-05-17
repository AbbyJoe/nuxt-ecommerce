<template>
    <section class="px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
            <logo class="mx-auto md:mx-0"></logo>
            <section class="grid gap-4 py-3 md:pb-10 pb-3">
                <nuxt-link to="/" class="text-black">Home</nuxt-link>
                <nuxt-link to="/products" class="text-black">Products</nuxt-link>
                <nuxt-link to="/about-us" class="text-black">About Us</nuxt-link>
                <nuxt-link to="/services" class="text-black">Services</nuxt-link>
                <nuxt-link to="/contact" class="text-black">Contact</nuxt-link>
                <p class="font-light text-sm">&copy; CASSIOPEIA 2021</p>
            </section>
        </div>
        <div class="md:space-y-10 space-y-6 md:py-10 py-0">
            <div class="block md:flex space-x-3 items-center">
                <img src="../../assets/location-pin.svg" class="inline w-auto h-10" alt="location-pin">
                <p class="pt-3">21 Revolution Street <br> <span class="font-semibold">Lagos, Nigeria</span></p>
            </div>
             <div class="block md:flex space-x-3">
                <img src="../../assets/call.svg" class="inline w-auto h-10" alt="call">
                <p class="pt-3"><a href="tel:+234-813-959-8226">+234-813-959-8226</a></p>
            </div>
             <div class="md:flex block space-x-3">
                <img src="../../assets/mail.svg" class="inline w-auto h-10" alt="mail">
                <p><a href="mailto:arigbedeabiodun@gmail.com">Support@mail.com</a></p>
            </div>
        </div>
        <div class="pb-4 md:py-4">
            <div class="flex space-x-6 items-center justify-center py-4">
                <a href="https://github.com/AbbyJoe"><img src="../../assets/github.svg" class="inline w-auto h-8" alt=""></a>
                <a href="https://www.linkedin.com/in/%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BBabiodun-arigbede-8a0512178/"><img src="../../assets/linkedin.svg" class="inline w-auto h-8" alt=""></a>
                <a href="https://twitter.com/Abby_joeRGX"><img src="../../assets/twitter.svg" class="inline w-auto h-8" alt=""></a>
                <a href="https://www.instagram.com/abbyjoe___/"><img src="../../assets/instagram.svg" class="inline w-auto h-8" alt=""></a>
            </div>
        </div>
    </section>
</template>
<script>
import Logo from '../icons/logo.vue'
export default {
  components: { 
    Logo
    },
    
}
</script>
<style scoped>

</style>