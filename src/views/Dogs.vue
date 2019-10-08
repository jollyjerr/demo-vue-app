<template>
    <div class="dogs">
        <h2>Dogs</h2>
        <DogList :dogs="dogs" />
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
    }
}
</script>

<style lang="scss">
    .dogs {
        
    }
</style>