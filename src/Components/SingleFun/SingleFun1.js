import React from 'react'

const SingleFun1 = ({SingleFun}) => {
  return (
    <div>
      <div className="single-fun">
            <i className={SingleFun.icon}/>
            <div className={SingleFun.title}>
              <span className='counter'>3468</span>
              <p>{SingleFun.content}</p>
            </div>
          </div>
    </div>
  )
}

export default SingleFun1
