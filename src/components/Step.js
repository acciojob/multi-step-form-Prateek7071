import React from 'react';

export default function Step(
  {currentStep, formData, onChange, onNext, onPrevious}
) {
  const renderFields = () => {
    switch (currentStep) {
      case 1:
        return (
        <>
        <div>
            <h1>Custormer Details</h1>
            <label htmlFor='first_name'>First Name</label>
            <input
              type='text'
              id="first_name"
              value={formData.first_name}
              onChange={onChange}
              required
            ></input>
            <label htmlFor='last_name'>Last Name</label>
            <input
              type='text'
              id="last_name"
              value={formData.last_name}
              onChange={onChange}
              required
            ></input>
            </div>
          </>
        )

      case 2:
        return (
        <>
        <div>
            <h1>Car Details</h1>
            <label htmlFor='model'>Model</label>
            <input
              type='text'
              id="model"
              value={formData.model}
              onChange={onChange}
              required
            ></input>
            <label htmlFor='car_price'>Car Price</label>
            <input
              type='text'
              id="car_price"
              value={formData.car_price}
              onChange={onChange}
              required
            ></input>
            </div>
          </>
        )
        case 3:
          return (
          <>
          <div>
              <h1>Payment Details</h1>
              <label htmlFor='card_info'>Credit Card Number</label>
              <input
                type='text'
                id="card_info"
                value={formData.card_info}
                onChange={onChange}
                required
              ></input>
              <label htmlFor='expiry_date'>Expiration Date</label>
              <input
                type='text'
                id="expiry_date"
                value={formData.expiry_date}
                onChange={onChange}
                required
              ></input>
              </div>
            </>
          )
      default:
        return null  
    }
  }
  return (
    <>
      {renderFields()}
      <div style={{display:"flex", justifyContent:"space-between"}}>
        {
          currentStep > 1 && (
            <button
              type='button'
              onClick={onPrevious}
            >Previous</button>
          )
        }
        {
          currentStep < 3 && (
            <button
              type='button'
              onClick={onNext}
              style={{ marginLeft: 'auto' }}
            >Next</button>
          )
        }
        {
          currentStep === 3 && (
            <button
              type='submit'
              style={{ marginLeft: 'auto' }}
            >
              Submit
            </button>
          )
        }
      </div>
    </>
  )
}
