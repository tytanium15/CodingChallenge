<template>
  <div class="home">
    <div class="header">
      <h1>MOVIES</h1>
    </div>
    <div class="search-section">
      <div class="search">
        
          <p>Enter a movie title:</p>
       
        
          <input type="text" v-model="search" placeholder="title" />
         <button @click="doSearch()">Search</button>
        
      
    </div>
    </div>

    
    <div class="movies">
      <movie
      v-for="(movie, index) in data"
      :key="`all-${index}`"
      :id="movie.movie_id"
      :title="movie.title"
      :poster="movie.poster_image_url"
      :popularity="movie.popularity_summary"
      ></movie>
    </div>
    
  </div>
</template>

<script>

import Movie from '@/components/Movie.vue'

export default {
  name: 'Home',
  components: {
    "movie": Movie
  },
  data() {
    return {
      data: [],
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
                this.data = data;
                
            }).catch(err => console.error(err));
    }
  }
}
</script>

<style scoped>
.home {
  /* background-image: url("../assets/background-gradient.jpg"); */
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 4rem;
}

.search-section {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFFa0;
  width: 20rem;
  padding: 2rem;
  border-radius: 20px;
}

input[type=text] {
  margin: 1rem;
  width: 80%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  padding: 0.5rem;
  
  transition: width 0.4s ease-in-out;
}

button {
  color: white;
  background-color: black;
  height: 2rem;
  width: 40%;
  border: none;
  border-radius: 4px;
}

button:hover {
  color: black;
  background-color: white;
  cursor: pointer;
  transition: all .4s ease;
-webkit-transition: all .4s ease;
}

.movies {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>