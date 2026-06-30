
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step.js";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1)
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }
  
  const handleNext = () => {
    setCurrentStep(prev=>prev+1)
  }
  
  const handlePrev = () => {
    setCurrentStep(prev=>prev-1)
  }
  
  const handleSubmit = () => {
    e.preventDefault()
    console.log(formData)
  }

  
  
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date:""
  })
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Step
          currentStep={currentStep}
          formData={formData}
          onChange={handleChange}
          onNext={handleNext}
          onPrevious={handlePrev}
        >
        </Step>
      </form>
    </div>
  )
}

export default App
