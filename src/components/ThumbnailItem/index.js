// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, isActive, changeDisplayImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnail
  const isActivated = isActive ? 'active' : 'not_active'
  const onClickingThumbnail = () => {
    changeDisplayImage(id)
  }

  return (
    <li>
      <button type="button">
        <img
          className={`${isActivated} thumbnail_image`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickingThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
