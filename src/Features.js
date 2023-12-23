import React from 'react'
import SingleFeature from './Components/Features/SingleFeature'

const Features = () => {
  
    const features ={
        f1:{
            key:1,
            icon:"icofont icofont-ambulance-cross",
            label:"Emergency help",
            caption:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
        },
        f2:{
            key:2,
            icon:"icofont icofont-medical-sign-alt",
            label:"Enriched Pharmecy",
            caption:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
        },
        f3:{
            key:3,
            icon:"icofont icofont-stethoscope",
            label:"Medical Treatment",
            caption:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
        },
    }
    return (
    <div>
       <div className="row">
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <SingleFeature features ={features.f1}/>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <SingleFeature features ={features.f2}/>
          {/* End Single features */}
        </div>
        <div className="col-lg-4 col-12">
          {/* Start Single features */}
          <SingleFeature features ={features.f3}/>
          {/* End Single features */}
        </div>
      </div>
    </div>
  )
}

export default Features
