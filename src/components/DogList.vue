<template>
    <ul class="dog-list">
            <li v-for="dog in dogs" :key="dog.id">
                <DogListing :dog="dog" @click.native="upvoteDog(dog.id)" />
            </li>
        </ul>
</template>

<script>
import DogListing from '@/components/DogListing'
export default {
    components: {
        DogListing,
    },
    props: {
        dogs: Array,
    },
    methods: {
        upvoteDog(id){
            this.$emit("upvoteDog", id)
        }
    }
}
</script>

<style lang="scss">
.dog-list {
    ul {
            list-style: none;
        }
}

</style>