import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

function App() {
  const [value, setValue] = useState(window.currentPhone);

  return (
    <div>
      <div class="cfw-sg-container cfw-input-wrap-row form-row">
        <div class="cfw-column-12 address-field validate-required validate-phone" id="shipping_phone_field" data-priority="70">
          <div class="cfw-input-wrap cfw-tel-input cfw-floating-label">
            <label for="shipping_phone" class="cfw-input-label">Número de teléfono</label>
            <PhoneInput
              placeholder="Número de teléfono"
              defaultCountry="GT"
              value={value}
              onChange={setValue}
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
            <p id="kemik-error-msg"></p>
          </div>
        </div>
      </div>

      <input 
        value={isValidPhoneNumber(value)} 
        type="hidden"
        id="isPhoneValid"/>
    </div>
  );
}

export default App;
