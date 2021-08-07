import React from "react"



function BlogPost(props) {

    return (
        <div className="blog">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>Posted By: {props.author}</p>
            <p>on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost
