const express = require('express');
const app = express();
const port = 3000;
const https = require('https');
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movies', (req, res) => {
    
    let search = req.query.search;
    console.log(search);
    let requestString = 'https://api.themoviedb.org/3/search/movie?api_key=710a3ffeb5b7707f96f653dfd6c7cffd&include_adult=false&query=' + search;
    console.log(requestString);
    

    https.get(requestString, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        
        let responseData = JSON.parse(data);
        let results = responseData.results;
        if (results.length > 10) {
            results = results.slice(0,10);
        }
        let newResponseArray = [];
        for (var i = 0; i < results.length; ++i) {
            let movie = {
                movie_id: results[i].id,
                title: results[i].title,
                poster_image_url: 'https://image.tmdb.org/t/p/w300/' + results[i].poster_path,
                popularity_summary: (results[i].vote_average * 10) + "% with " + results[i].vote_count + " votes."
            }
            newResponseArray.push(movie);
        }
        res.send(newResponseArray);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
    //let response = await 

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});