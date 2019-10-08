<template>
    <div class="dogs">
        <h2>Dogs</h2>
        <ul>
            <li v-for="dog in dogs" :key="dog.id">
                <div class="dog-listing">
                    <img :src="dog.imageUrl" alt="dog"> <!-- you can do any js in a bound attribute with : -->
                    <h3>{{dog.name}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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