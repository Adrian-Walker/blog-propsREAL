import React from "react"
// import ReactDOM from "react-dom"
import BlogPost from "./BlogPost"
import mapArray from "./mapArray"

function BlogList() {
    const blogs = mapArray.map(post => <BlogPost title={array.title} subtitle={array.subtitle} author={array.author} date={array.date} />)
    return (
        <div>
            {blogs}
        </div>
    )
}

export default BlogList
