import React from 'react';


const PostDetails = ({postDetails}) => {
    const{body}=postDetails
    return (
        <div>
            <h2>{body}</h2>
        </div>
    );
};

export default PostDetails;