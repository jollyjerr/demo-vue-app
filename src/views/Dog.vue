<template>
    <div class="dog" >
    <h2>{{dog.name}}</h2>
    <img :src="dog.imageUrl" alt="dog">
    <p>Votes: {{dog.likes}}</p>
    <button @click="upvoteDog" >Vote!</button>
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
            this.$store.dispatch("upvoteDog", this.dogId)
        }
    }
}
</script>

<style lang="scss">

</style>