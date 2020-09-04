import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from "./requests";
import instance from './axios';

export default function Banner() {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchtcharacters);
            setComics(request.data.data.results[
                Math.floor(Math.random() * request.data.data.results.length - 1)]);

        }
        fetchData();
    }, []);
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
             )`,
            }}
        >

            <div className="banner_contents">
                <h1></h1>
            </div>
        </header>
    );
}
