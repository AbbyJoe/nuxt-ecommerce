<template>
    <div>
        {{ip}}
        testing navbar
    </div>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            ip: ''
        }
    },
    async mounted() {
        await this.fetchSomething()
    },
    methods: {
    
    }    
}
</script>

<style scoped>

</style>