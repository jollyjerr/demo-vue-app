<template>
    <ul class="dog-list">
            <li v-for="dog in dogs" :key="dog.id">
                <DogListing :dog="dog" />
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