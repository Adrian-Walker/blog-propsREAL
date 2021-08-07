import React from "react"
import BlogList from "./BlogList"

function BlogPost(props) {



    return (
        <div className="blog">
            <a href="twitter.com"><h1>{props.title}</h1></a>
            <a href="yahoo.com"><h2>{props.subtitle}</h2></a>
            <p>Posted By: <a href="youtube.com">{props.author}</a></p>
            <p>on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost
