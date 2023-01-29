import React, { useState ,useEffect } from 'react';

import axios from "axios";

const baseURL = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=7GS96CNUZ6GG8B4K";

const MyComponent = () => {
    
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios
            .get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=7GS96CNUZ6GG8B4K")
            .then((response) => {
                setPost(response.data);
            })
    }, []);
  
    //if (!post) return null;
    {/* {post.map((item, i) => {
                return (
                <div key={i}>
                    <p>{item.Information}</p>
                </div>
                );
            })} */}
            {/*
        <div>
        <h1>{post}</h1>
        <p>{post}</p>
      </div>
      */
    }
    return (
        <div>
            
            {post ? (
                    post.map((item) => {
                        return (
                            <div>
                            <h1 key={item._id}></h1>
                            <p>{item.Symbol}</p>
                            </div>
                        );
                    })
                ) : (
                        <div>
                            <h1>No Stocks left</h1>
                        </div>
                    )
            }
        </div>
    );
}

export default MyComponent