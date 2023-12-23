import React from 'react'

const SingleFeature = ({features}) => {
//    console.log(features.caption)
  return (
    <div>
       <div className={`single-features ${features.key === 3 ? 'last' : ''}`}>
            <div className="signle-icon">
              <i className={features.icon} />
            </div>
            <h3>{features.label}</h3>
            <p>{features.caption}</p>
          </div>
    </div>
  )
}

export default SingleFeature
