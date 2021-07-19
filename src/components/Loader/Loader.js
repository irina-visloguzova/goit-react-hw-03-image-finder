import React, { Component } from "react"
import Loader from "react-loader-spinner"
import style from "../Loader/Loader.module.css"

class LoaderApp extends Component {
  render() {
    return <Loader className={style.Container} type="Puff" color="#3f51b5" height={100} width={100} timeout={3000} />
  }
}

export default LoaderApp
