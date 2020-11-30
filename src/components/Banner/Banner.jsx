import React from 'react';

import './index.css';
// import requests from './requests';
import axios from '../../axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = ({fetchUrl}) => {
    const [movie, setMovie] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const res = await axios.get(fetchUrl);
            const randomMovie = Math.floor(Math.random() * res.data.results.length - 1);
            setMovie(res.data.results[randomMovie])
    
        }
        fetchData()

    }, [fetchUrl])

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
            backgroundPosition: "center top"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    { movie?.title || movie?.name || movie?.original_name }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                    <h1 className="banner__description">{movie?.overview}</h1>
            </div>
            <div className="banner--fadeBottom"></div>

        </header>
    );
}

export default Banner;
