import React, { Component } from "react"
import style from "../components/App.module.css"
import api from "../api/ApiService"
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import Loader from "./Loader/Loader"

class App extends Component {
  state = {
    hits: [],
    page: null,
    searchQuery: "",
    error: null,
    showModal: false,
    largeImg: "",
    largeImgTags: "",
    isLoading: false,
    fetchLength: "",
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImgs()
    }

    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  fetchImgs = () => {
    const { searchQuery, page } = this.state

    const options = { searchQuery, page }
    this.setState({ isLoading: true })
    api(options).then((hits) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
          fetchLength: hits.length,
        }))
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  onChangeQuery = (query) => {
    if (query !== this.state.searchQuery) {
      this.setState({ hits: [], page: 1 })
    }
    this.setState({
      searchQuery: query,
    })
  }

  onHitClick = (hit, tags) => {
    this.setState({ showModal: true, largeImg: hit, largeImgTags: tags })
  }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
  }

  render() {
    const { hits, largeImg, largeImgTags, showModal, isLoading, page, error, fetchLength } = this.state

    const onChangeQuery = this.onChangeQuery
    const onHitClick = this.onHitClick
    const fetchImgs = this.fetchImgs
    const toggleModal = this.toggleModal

    return (
      <div className={style.App}>
        <Searchbar onChangeQuery={onChangeQuery} />

        <ImageGallery hits={hits} onClick={onHitClick} />

        {hits.length !== 0 && fetchLength === 12 && !isLoading && <Button onClick={fetchImgs} page={page} />}

        {isLoading && <Loader />}

        {error && alert("Please try again")}

        {showModal && <Modal url={largeImg} alt={largeImgTags} onClose={toggleModal} />}
      </div>
    )
  }
}

export default App
