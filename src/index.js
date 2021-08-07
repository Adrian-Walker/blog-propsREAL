import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Header from "./Header"

import BlogList from "./BlogList"

ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<BlogList />, document.getElementById('root'))
