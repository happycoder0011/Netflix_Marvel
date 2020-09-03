import React, { useState, useEffect } from 'react';
import instance from "./axios";
import "./Row.css";
function Row(props) {
    const axios = require('axios');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(props.fetchUrl);
            setMovies(request.data.data.results);
            //setMovies(request.data.data);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);
    console.log(movies);
    //[] is called dependies if it is like blank [],it will run once the row loads and dont run again
    //if it is populated such as [movies] it will run everytime movies changes
    return (
        <div className="row">
            {/*Title */}
            <h2>{props.title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        className="row__poster"
                        src={movie.thumbnail.path + "." + movie.thumbnail.extension}
                        alt={movie.name} />
                ))}
            </div>
            {/*Container ->poster */}

        </div>
    )
}

export default Row
