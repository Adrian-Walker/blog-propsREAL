import React from "react"
// import ReactDOM from "react-dom"
import BlogPost from "./BlogPost"
import mapArray from "./mapArray"

function BlogList() {
    const blogs = mapArray.map(post => <BlogPost title={post.title} subtitle={post.subTitle} author={post.author} date={post.date} />)
    return (
        <div>
            {blogs}
        </div>
    )
}

export default BlogList
