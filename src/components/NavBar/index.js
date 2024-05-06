import './index.css'

const NavBar = props => {
  const {score, totalScore, isGameEnd} = props

  return (
    <nav className="navbar">
      <div className="logo-card">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      {isGameEnd ? null : (
        <div className="score-card">
          <p className="scores-heading">Score: {score}</p>
          <p className="scores-heading">Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
