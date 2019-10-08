

<template>
    <ul class="dog-list">
            <li v-for="dog in dogs" :key="dog.id">
                <div class="dog-listing">
                    <img :src="dog.imageUrl" alt="dog"> <!-- you can do any js in a bound attribute with : -->
                    <h3>{{dog.name}}</h3>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
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
}

</style>