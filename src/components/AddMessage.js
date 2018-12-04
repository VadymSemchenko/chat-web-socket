import React from 'react'

const AddMessage = ({
  value,
  handleInputSubmit,
  handleInputChange
}) => (
    <section id="new-message">
      <input
        onKeyPress={handleInputSubmit}
        onChange={handleInputChange}
        value={value}
        type="text"
        placeholder={'type your message here'}
      />
    </section>
  )

export default AddMessage