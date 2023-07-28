// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onClickButton} = props
  const {suggestion} = suggestionsList

  const onButtonClick = () => {
    onClickButton(suggestion)
  }

  return (
    <li className="each-list">
      <p className="title">{suggestion}</p>
      <button type="button" className="button" onClick={onButtonClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
