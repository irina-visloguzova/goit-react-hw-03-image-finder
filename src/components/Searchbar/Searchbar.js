import React, { Component } from "react"
import shortid from "shortid"
import style from "../Searchbar/Searchbar.module.css"

class Searchbar extends Component {
  state = {
    search: "",
  }

  hendleInputChange = (event) => {
    this.setState({ search: event.currentTarget.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onChangeQuery(this.state.search)
    this.reset()
  }

  reset = () => {
    this.setState({ search: "" })
  }

  render() {
    const { search } = this.state
    const hendleInputChange = this.hendleInputChange

    return (
      <>
        <header className={style.Searchbar}>
          <form className={style.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={style.SearchFormButton}>
              <span className={style.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={style.SearchFormInput}
              type="text"
              name="searchQuery"
              id={shortid.generate()}
              value={search}
              placeholder="Search images and photos"
              onChange={hendleInputChange}
            />
          </form>
        </header>
      </>
    )
  }
}

export default Searchbar
