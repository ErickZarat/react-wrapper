import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber, getCountryCallingCode } from 'react-phone-number-input'

function isPhoneValid(phone, country) {
  let countryCode = getCountryCallingCode(country)
  console.log(countryCode + " " + country)
  if (!phone.includes(countryCode)) {
    phone = "+" + countryCode + phone
  }
  return isValidPhoneNumber(phone)
}

window.currentPhone = "5478 8800"
function App() {
  const [phone, setPhone] = useState(window.currentPhone);
  const [country, setCountry] = useState("GT");

  return (
    <div>
      <div class="cfw-sg-container cfw-input-wrap-row form-row">
        <div class="cfw-column-12 address-field validate-required validate-phone" id="shipping_phone_field" data-priority="70">
          <div class="cfw-input-wrap cfw-tel-input cfw-floating-label">
            <label for="shipping_phone" class="cfw-input-label">Número de teléfono</label>
            <PhoneInput
              placeholder="Número de teléfono"
              defaultCountry="GT"
              country={country}
              onCountryChange={setCountry}
              value={phone}
              onChange={setPhone}
              type="tel" 
              field_key="phone" 
              class="input-text garlic-auto-save parsley-success" 
              name="shipping_phone" 
              id="shipping_phone"
              data-parsley-trigger="change focusout" 
              data-parsley-group="shipping" 
              autocomplete="tel" 
              required="" 
              data-parsley-id="36"/>
            <p id="kemik-error-msg"/>
          </div>
        </div>
      </div>

      <input 
        value={isPhoneValid(phone, country)}
        type="hidden"
        id="isPhoneValid"/>
    </div>
  );
}

export default App;
