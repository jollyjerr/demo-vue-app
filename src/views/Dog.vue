<template>
    <div class="dog" >
    <h2>{{dog.name}}</h2>
    <p>{{dog.votes}}</p>
    <button @click.native="upoteDog" >Vote!</button>
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
    methods: {
        upvoteDog(){
            this.$emit("upvoteDog", this.dogId)
        }
    }
}
</script>

<style lang="scss">

</style>