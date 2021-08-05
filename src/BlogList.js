import React from "react"
// import ReactDOM from "react-dom"
import BlogPost from "./BlogPost"
import mapArray from "./mapArray"

function BlogList() {
    const blogs = mapArray.map(post => { })
    return (
        <div>
            <BlogPost />
        </div>
    )
}

export default BlogList
