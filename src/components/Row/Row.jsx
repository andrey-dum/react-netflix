import React from 'react';
import axios from '../../axios';

import './index.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = React.useState([]);

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

    console.log(movies)

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">

                { movies.map(movie => (
               
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                  
                )) }

            </div>
    
        </div>
    );
}

export default Row;
