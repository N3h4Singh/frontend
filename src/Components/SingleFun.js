import React from 'react'

const SingleFun = () => {
  return (
    <div>
  {/* Start Fun-facts */}
  <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-home" />
            <div className="content">
              <span className="counter">3468</span>
              <p>Hospital Rooms</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-user-alt-3" />
            <div className="content">
              <span className="counter">557</span>
              <p>Specialist Doctors</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont-simple-smile" />
            <div className="content">
              <span className="counter">4379</span>
              <p>Happy Patients</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <div className="single-fun">
            <i className="icofont icofont-table" />
            <div className="content">
              <span className="counter">32</span>
              <p>Years of Experience</p>
            </div>
          </div>
          {/* End Single Fun */}
        </div>
      </div>
    </div>
  </div>
  {/*/ End Fun-facts */}
</div>

  )
}

export default SingleFun
