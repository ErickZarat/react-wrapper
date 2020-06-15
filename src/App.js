import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'



function App() {
  const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Numero de telefono"
      defaultCountry="GT"
      value={value}
      onChange={setValue}/>
  );
}

export default App;
