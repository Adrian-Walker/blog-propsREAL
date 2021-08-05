import React from "react"
// import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import mapArray from "./mapArray"

function BlogList() {
    const blogs = mapArray.map()
    return (
        <div>
            <BlogPost />
        </div>
    )
}

export default BlogList
