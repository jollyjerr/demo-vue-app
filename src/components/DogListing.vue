<template>
    <div class="dog-listing">
        <img :src="dog.imageUrl" alt="dog"> <!-- you can do any js in a bound attribute with : -->
        <h3> <router-link :to="{name: 'dog', params: {id: dog.id}}"> {{dog.name}} </router-link > </h3>
    </div>
</template>

<script>
export default {
    props: {
        dog: Object,
    }
}
</script>

<style lang="scss">
    .dog-listing{
           margin-bottom: 2rem;
           img {
               width: 100px;
           }
           h3 {
               padding: 0;
               margin: 0;
           }
       }
</style>