<template>
    <div class="movie">
      <img :src = poster>
      <div class="movie-info">
        <h2>{{title}}</h2>
      <p>Movie id: {{id}}</p>
      <p>{{popularity}}</p>
      </div>
      
    </div>
</template>

<script>



export default {
    props: ["id", "title", "poster", "popularity"],
    data() {
        return {
            
        };
    },
    
}

</script>

<style>

.movie {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #FFFFFFa0;
    border-radius: 20px;
    padding: 3rem;
    margin: 2rem;
    width: 50vw;
}


.movie-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    text-align: left!important;;
}

.movie-info p {
    padding-top: 1rem;

}

@media screen and (max-width: 800px) {
    .movie {
        flex-direction: column;
    }
}

</style>