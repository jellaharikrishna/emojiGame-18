import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], totalScore: 0, isGameEnd: false}

  onTogglePlayAgain = () => {
    this.setState({clickedEmojisList: [], isGameEnd: false})
  }

  finishGameAndSetTopScore = currentScore => {
    const {totalScore} = this.state

    if (currentScore > totalScore) {
      this.setState({totalScore: currentScore, isGameEnd: true})
    } else {
      this.setState({isGameEnd: true})
    }
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else if (emojisList.length - 1 === clickedEmojisListLength) {
      this.finishGameAndSetTopScore(emojisList.length)
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const getEmojis = this.shuffledEmojisList()
    const {clickedEmojisList, totalScore, isGameEnd} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList.length === emojisList.length - 1

    return (
      <div className="bg-container">
        <NavBar
          score={clickedEmojisList.length}
          totalScore={totalScore}
          isGameEnd={isGameEnd}
        />
        <div className="app-container">
          {isGameEnd ? (
            <WinOrLoseCard
              score={clickedEmojisList.length}
              isWon={isWon}
              onTogglePlayAgain={this.onTogglePlayAgain}
            />
          ) : (
            <ul className="emoji-card-list">
              {getEmojis.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojisDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}


// Write your code here.

*/
