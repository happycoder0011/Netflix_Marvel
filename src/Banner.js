import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from "./requests";
import instance from './axios';
import "./Banner.css";
export default function Banner() {

    const [comics, setComics] = useState([]);
    const [title,setTitle] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchadam);
            const random =  Math.floor(Math.random() * request.data.data.results.length - 1);
         
            setComics(request.data.data.results[random].images[0].path + ".jpg");
            setTitle(request.data.data.results[random]);
        }
        fetchData();
    }, []);


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${comics}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{title.title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{title.description}</h1>
            </div>
            
            <div className="banner--fadebottom"></div>
        </header>
    );
}
