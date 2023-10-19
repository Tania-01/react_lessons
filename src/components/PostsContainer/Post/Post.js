import React from 'react';

const Post = ({post,click}) => {
    const {id,title}=post

    return (
        <div>
        <h3>{id}</h3>
        <p>{title}</p>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export default Post;