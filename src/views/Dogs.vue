<template>
    <div class="dogs">
        <h2>Dogs</h2>
        <div class="master-detail" >
            <DogList :dogs="dogs" @upvoteDog="upvoteDog" />
            <router-view /> <!-- a hole punched in the view -->
        </div>
    </div>
</template>

<script>
import DogList from '@/components/DogList'

export default {
    components: {
        DogList
    },
    mounted() {
        this.$store.dispatch("fetchDogs")
    },
    computed: {
        dogs() {
            return this.$store.state.dogs
        }
    },
    methods: {
        upvoteDog(id){
            this.$store.dispatch("upvoteDog", id)
        }
    }
}
</script>

<style lang="scss">
    .dogs {
        .master-detail{
            display: flex;
            flex-flow: row wrap;
            padding: 2rem;
            .dog {
                padding: 2rem;
            }
        }
    }
</style>