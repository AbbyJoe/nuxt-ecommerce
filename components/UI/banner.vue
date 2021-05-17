<template>
    <div class="sub__hero--section text-center">
      <h1 class="tracking-wide uppercase text-4xl font-semibold text-white">Get ready for summer</h1>
      <p class="px-5 leading-relaxed italic py-4 text-white font-extralight md:w-1/2 mx-auto">We are CASSIOPEIA, a concept born to extend the legacy of clothing Factory, we create wears that focuses on both comfort and aesthetics.</p>
      <nuxt-link to="/collections">
          <button type="button" class="btn bg-green text-white rounded-sm focus:outline-none focus:ring focus:border-green-300 mt-3 font-semibold px-10 py-4 uppercase">View COLLECTIONs</button>
      </nuxt-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sub__hero--section {
  background-image: linear-gradient(to right, #000000, rgba(0, 0, 0, 0.08)), url(./assets/fashion.jpg);
  background-size: cover;
  height: 100%;
  padding: 110px 0px; 
  margin: 100px 0px;
}
</style>