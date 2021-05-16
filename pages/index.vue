<template>
  <section>
    <div class="container mx-auto hero__section mb-10 text-center bg-opacity-25">
      <div class="px-3">
        <h1 class="text-white font-light text-4xl">Fashion 2021 for you!</h1>
        <h1 class="text-white font-bold text-5xl pt-2">Sales up To <span class="italic text-blue font-light">50% off</span></h1>
        <p class="text-white text-xl font-thin py-3">Discover the latest addictions to our amazing collections...</p>
        <button type="button" class="btn bg-blue text-white rounded-sm focus:outline-none focus:ring focus:border-blue-300 mt-3 font-semibold px-10 py-4">SHOP NOW</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.hero__section {
  background-image: linear-gradient(to right, #000000, rgba(0, 0, 0, 0.08)), url(../assets/bg.jpg);
  background-size: cover;
  height: 80vh;
  padding-top: 150px;
}
</style>
