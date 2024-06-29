// Write your code here.
import './index.css'

const Emojicard = props => {
  const {list, key, emojiscoreupdates} = props
  const {emojiName, emojiUrl, id} = list

  const emojiId = () => {
    emojiscoreupdates(id)
  }

  return (
    <div>
      <li className="emoji-card">
        <button onClick={emojiId}>
          <img src={emojiUrl} alt={emojiName} className="image" />
        </button>
      </li>
    </div>
  )
}

export default Emojicard
