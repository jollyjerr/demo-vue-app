<template>
    <div class="dog" >
    <h2>Dog</h2>
        
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("fetchDogs")
    },
    computed: {
        dogId() {
            return this.$route.params.id
        },
        dog(){
            return this.$store.getters.dog(this.dogId)
        }
    },
}
</script>

<style lang="scss">

</style>