<template>
    <div class="dog" >
    <h2>Dog</h2>
        
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("fetchDog", this.$route.params.id)
    },
}
</script>

<style lang="scss">

</style>