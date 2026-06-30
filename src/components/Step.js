import React from 'react';

export default function Step(
  {currentStep, formData, onChange, onNext, onPrevious}
) {
  const renderFields = () => {
    switch (currentStep) {
      case 1:
      return (
        <div>
          <form>
            <h1>Custormer2 Details</h1>
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
            <div style={{ display: "flex", direction: "row" }}>
              <button
                id="nextBtn"
                onClick={onNext}
              >Next</button>
            </div>
          </form>
        </div>
      )
    }
  }
}
