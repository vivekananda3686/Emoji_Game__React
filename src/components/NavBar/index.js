// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore} = props

  const authDisplay = () => {
    if(score !== 12)
    {
        return (
          <div className="nav-para">
            <div className="nav-image">
              <div>
                <p>Score: {score} </p>
              </div>
              <div>
                <p>Top Score: {topScore}</p>
              </div>
            </div>
          </div>
        )
    }
  }
  return (
    <div className="navbar">
      <div className="nav-image">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
        </div>
        <div>
          <h1>Emoji Game</h1>
        </div>
      </div>
       {authDisplay()}
    </div>
  )
}

export default Navbar
