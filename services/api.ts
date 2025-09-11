export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3/",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    HEADERS: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
};

export const fetchMovies = async ({query}: {query: string}) => {

    const endpoint = query // using if else with a shortcut, if (query) {`/search/movie?query=${encodeURIComponent(query)}`} else {"/discover/movie?sort_by=popularity.desc"}
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` // to not meet errors connected to weird characters used u can use encodeURIComponent. 
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    // added TMDB_CONFIG.BASE_URL beacuse we wanna just change the endpoint. Depending on if we have a query or not 

    // API-response
    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.HEADERS,
    });

    if(!response.ok){
        // @ts-ignore
        throw new Error("Failed to fetch movies", response.statusText);
    }

    const data = await response.json();
    return data.results;
}

/* FROM TMDB API. 
const url = 'https://api.themoviedb.org/3/authentication';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTZjMTRiYmNhMjc1NDJiZTZmODlmNTA3OTE3OGNlOSIsIm5iZiI6MTc1NzMwMjUwOC4wMjEsInN1YiI6IjY4YmU0ZWVjYmY1MjdjOTNhNTRlNjI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IIxmWkBhGt_dvMWuy44o1QF6ZfXCacFcT7Hr3nC-w9I'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
  */