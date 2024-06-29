/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import Navbar from '../NavBar'
import Emojicard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    prevImage: -1,
    score: 0,
    topScore: 0,
    win: false,
    lose: false,
    emojisList: this.props.emojisList,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiscoreupdates = val => {
    const {prevImage, score} = this.state
    console.log(prevImage, val)
    if (prevImage !== val) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojisList: this.shuffledEmojisList(),
        prevImage: val,
      }))
    } else {
      this.setState({
        lose: true,
        emojisList: this.shuffledEmojisList(),
      })
    }
  }

  resetGame = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }
    this.setState({
      prevImage: -1,
      score: 0,
      win: false,
      lose: false,
      emojisList: this.shuffledEmojisList(),
    })
  }

  displayAcCondi = () => {
    const {win, lose, score} = this.state
    if (win === true || score === 12) {
      return (
        <div className="win-card">
          <div className="winning">
            <div>
              <h1 className="won-heading">You Won</h1>
              <p className="won-heading">
                Best SCore <br />
                {score}/12
              </p>
              <button onClick={this.resetGame} className="playAgain">
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )
    } else if(lose === true) {
      return (
        <div className="win-card">
          <div className="winning">
            <div>
              <h1 className="won-heading">You Lose</h1>
              <p className="won-heading">
                Best SCore <br />
                <span className="span">{score}/12</span>
              </p>
              <button onClick={this.resetGame} className="playAgain">
                Play Again
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="win or lose"
              />
            </div>
          </div>
        </div>
      )
    } else {
      const {emojisList} = this.state
      return (
        <ul className="emojis-list-class">
          {emojisList.map(each => (
            <Emojicard
              list={each}
              key={each.id}
              emojiscoreupdates={this.emojiscoreupdates}
            />
          ))}
        </ul>
      )
    }
  }

  render() {
    const {score, topScore} = this.state
    return (
      <div className="main-container">
        <Navbar score={score} topScore={topScore} />
        <div>{this.displayAcCondi()}</div>
      </div>
    )
  }
}

export default EmojiGame
