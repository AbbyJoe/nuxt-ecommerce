<template>
    <div class="shadow-md rounded-sm p-3 pb-10 text-center">
        <img class="inline" :src="image" alt="" >
        <h1 class="py-2">{{title}}</h1>
        <p class="font-semibold">Price: {{price}}</p>
        <nuxt-link :to="`/collections/${id}`">
            <button type="button" class="btn bg-green text-white rounded-sm focus:outline-none focus:ring focus:border-blue-300 mt-3 font-semibold px-5 py-2">View item <svg class="inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1402 8.11673C16.3271 7.96109 16.6302 7.96109 16.8171 8.11673L21.8598 12.3158L21.916 12.3719C22.0467 12.53 22.0246 12.7488 21.8517 12.8861L16.8089 16.8899L16.7413 16.9347C16.5518 17.0386 16.2944 17.0181 16.1322 16.8765L16.0784 16.8202C15.9537 16.6624 15.9783 16.448 16.1483 16.313L20.3211 13H1.97619L1.89059 12.9919C1.66845 12.9496 1.5 12.7455 1.5 12.5C1.5 12.2239 1.7132 12 1.97619 12H20.1277L16.1402 8.68037L16.0848 8.62517C15.9556 8.46984 15.974 8.25508 16.1402 8.11673Z" fill="white"/>
                </svg>
            </button>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name:'product-layout',
    props: {
        id: {
            type: Number
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
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
img {
    width: auto;
    height: 200px;
}
</style>