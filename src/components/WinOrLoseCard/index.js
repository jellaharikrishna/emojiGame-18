import './index.css'

const wonImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {score, isWon, onTogglePlayAgain} = props

  const resultImgUrl = isWon ? wonImgUrl : loseImgUrl
  const winLoseText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'
  const scored = isWon ? '12' : score

  const onClickPlayAgainBtn = () => {
    onTogglePlayAgain()
  }

  return (
    <div className="win-lose-card">
      <img className="win-loose-img" src={resultImgUrl} alt="win or lose" />
      <div className="result-card">
        <h1 className="won-loose-heading">{winLoseText}</h1>
        <p className="score-title">{scoreText}</p>
        <p className="score-number">{scored}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgainBtn}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
