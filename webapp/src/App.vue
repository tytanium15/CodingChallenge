<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

* {
  padding: 0px;
  margin: 0px;
}

#app {
  background-image: '@/assets/background-gradient.jpg';
  padding: 0px;
  margin: 0px;
  font-family: Anton, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
