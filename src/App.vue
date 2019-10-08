<template>
  <div id="app">
    <header>
      <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-8C-01-rBVaI1h0b7uAAw3eAADOgwXBYRU213.jpg/hot-sale-pet-paw-print-with-heart-dog-funny.jpg" alt="logo">
      <h1>BarkWire</h1>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
  #app {
    header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: hsl(240, 30%, 80%);
      img {
        width: 150px;
      }
    }
  }
</style>
