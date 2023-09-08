import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from "../components/post/Post";

function InstaFeeds() {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
            try{
                axios
                    .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=10&access_token=${process.env.REACT_APP_INSTA_ACCESS_TOKEN}`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                        console.log(resp.data.data)
                        console.log(feeds)
                    })
            } catch (err) {
                console.log('error', err)
            }
        }

        // manually call the fetch function
        fetchInstagramPost();

        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort();
        };
    }, [])

    return (
        <div className="container">
            {feeds.map((feed:any) => (
                <Post key={feed.id} title={feed.caption} img={feed.media_url} orientation={feed.media_type}/>
            ))}
        </div>
    );
}

export default InstaFeeds;