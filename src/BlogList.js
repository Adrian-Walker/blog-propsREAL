import React from "react"
// import ReactDOM from "react-dom"
import BlogPost from "./BlogPost"
import Header from "./Header"
import mapArray from "./mapArray"
import Navbar from "./Navbar"

function BlogList() {
    const blogs = mapArray.map(post => <BlogPost key={post.key} title={post.title} subtitle={post.subTitle} author={post.author} date={post.date} />)
    return (
        <div>
            <Navbar />
            <Header />
            {blogs}

        </div>
    )
}

export default BlogList
