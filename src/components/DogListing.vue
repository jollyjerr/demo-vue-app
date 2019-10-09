<template>
    <div class="dog-listing">
        <img :src="dog.imageUrl" alt="dog"> <!-- you can do any js in a bound attribute with : -->
        <h3>{{dog.name}}</h3>
        <p>Votes: {{dog.likes}}  </p>
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