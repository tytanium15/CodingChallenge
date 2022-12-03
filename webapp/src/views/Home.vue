<template>
  <div class="home">
    <div class="search">
      <p>Enter a movie title:</p>
      <input v-model="search" placeholder="edit me" />
      <button @click="doSearch()">Search</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    async doSearch() {
      console.log(this.search);
      await fetch('http://localhost:3000/movies?search='+this.search)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);
                
            }).catch(err => console.error(err));
    }
  }
}
</script>

<style scoped>
</style>