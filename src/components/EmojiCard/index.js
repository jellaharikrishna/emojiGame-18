import './index.css'

const EmojiCard = props => {
  const {emojisDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  const onClickEmojiBtn = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emojicard">
      <button className="emoji-btn" type="button" onClick={onClickEmojiBtn}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
