import React from "react"



function BlogPost(props) {

    return (
        <div className="blog">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
            <p className="author">Posted By: <a>{props.author}</a></p>
            <p>on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost
