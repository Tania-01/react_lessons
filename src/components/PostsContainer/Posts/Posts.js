import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../Post/Post";
import {axiosServices} from "../../../services/axiosServices";
import {postService} from "../../../services/postService";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
const [postDetails,setPostDetails]=useState(null)
    const click=async (postId)=>{
const {data}= await postService.getById(postId)
setPostDetails(data)
    }

    useEffect(()=>{
     postService.getALL().then(({data})=>setPosts(data))
    },[])
    return (
        <div>
        <div>
            {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
        </div>
            {postDetails ?<PostDetails postDetails={postDetails}/> : <h1>Not Title</h1>
            }
        </div>
    );
};

export default Posts;