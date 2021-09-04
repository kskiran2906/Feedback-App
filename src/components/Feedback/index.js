import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {emojiShow: true}

  onChangeState = () => {
    this.setState({emojiShow: false})
  }

  onShowEmojis = () => {
    const {emojiShow} = this.state
    const {feedbackData} = this.props
    const {emojis, loveEmojiUrl} = feedbackData
    if (emojiShow) {
      return (
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="all-emoji-container">
            {emojis.map(emoji => (
              <li
                key={emoji.id}
                className="emoji-container"
                onClick={this.onChangeState}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <p className="emoji-name">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="card-container">
        <img className="emoji-img" src={loveEmojiUrl} alt="loveEmoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="heading">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.onShowEmojis()}</div>
  }
}

export default Feedback
