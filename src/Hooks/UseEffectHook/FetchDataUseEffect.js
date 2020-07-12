import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchDataUseEffect() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [bid,fetchPosts] = useState(1)

    const fetchPost = () =>{
        fetchPosts(id) // set bid when click button and add bid dependency to useEffect to run effect
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log("res", res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log("err", err)
            })
    }, [bid])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={fetchPost}>Fetch post</button>
            <div>{posts.title}</div>
            {/* {
                posts.map(post => (
                    <ul>
                        <li key={post.id}>{post.title}</li>
                    </ul>
                ))
            } */}
        </div>
    )
}

export default FetchDataUseEffect
