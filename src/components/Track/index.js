import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Track = props => {
  const {list, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = list
  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="track">
      <div className="image-name-genre-section">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-section">
        <p className="duration">{duration}</p>
        <button type="button" className="button" onClick={onDeleteTrack}>
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default Track
