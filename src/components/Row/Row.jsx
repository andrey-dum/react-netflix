import React, { useState } from 'react';
import axios from '../../axios';

import './index.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    React.useEffect(() => {
        // axios.get(fetchUrl).then(({data}) => {
        //     setMovies(data.results)
        // })
        async function getData() {
            const res = await axios.get(fetchUrl);
            setMovies(res.data.results)
        }
        getData()

    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

    console.log(movies)

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">

                { movies.map(movie => (
               
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                  
                )) }

            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }  
        </div>
    );
}

export default Row;
