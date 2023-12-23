import React from 'react'
import Schedule2 from './Schedule1/Schedule2'

const Schedule = () => {

    const schedule ={

    }
  return (
    <div>
      <section className="schedule">
    <div className="container">
      <div className="schedule-inner">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 ">
            {/* single-schedule */}
            <Schedule2/>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* single-schedule */}
        <Schedule2/>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            {/* single-schedule */}
            <Schedule2/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Schedule
