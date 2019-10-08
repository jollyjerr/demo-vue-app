<template>
    <div class="dogs">
        <h2>Dogs</h2>
        <ul>
            <li v-for="dog in dogs">
                <div class="dog-listing">
                    <img :src="dog.imageUrl" alt="dog">
                    <h3>{{dog.name}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dogs: [{
                name: "Bower",
                imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
            }, {
                name: "Waggy",
                imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
            }, {
                name: "Percy",
                imageUrl: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*'
            }]
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