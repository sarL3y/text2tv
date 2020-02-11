import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let reqHeaders = new Headers();

    reqHeaders.append("X-AYLIEN-TextAPI-Application-Key", "e9b1672bb5e2c11c645c5c5366249ebf");
    reqHeaders.append("X-AYLIEN-TextAPI-Application-ID", "92ae4c9e");

    const urlEncoded = new URLSearchParams();

    const reqOptions = {
        method: 'GET',
        headers: reqHeaders,
    };

    // {
    //     "Accept": "*/*",
    //     "Content-Type": "application/json",
    //     "X-AYLIEN-TextAPI-Application-Key": "e9b1672bb5e2c11c645c5c5366249ebf",
    //     "X-AYLIEN-TextAPI-Application-ID": "92ae4c9e",
    //     "Accept-Encoding": "gzip, deflate",
    //     "Connection": "keep-alive"
    // });

    console.log(reqOptions);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch("https://api.aylien.com/api/v1/summarize?url=https://www.vanityfair.com/news/2020/02/democrats-game-out-very-real-nightmare-of-losing-to-donald-trump-2020&sentences_percentage=20", reqOptions);
                await console.log(res);
                const resJson = await res.json();
                console.log(res);
    
                setResponse(resJson);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            };
        };

        fetchData();
    }, []);

    return { response, error, isLoading };
};

export default useFetch;