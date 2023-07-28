// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickButton = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-logo"
          />
          <div className="search-list-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-bar"
                placeholder="Search Google"
                onChange={this.onInputChange}
                value={searchInput}
              />
            </div>
            <ul className="list-container">
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionsList={each}
                  key={each.id}
                  onClickButton={this.onClickButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
