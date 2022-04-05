import React from 'react'
import Cardentry from '../components/cardentry';

function balance() {
    return (
        <Cardentry
          txtcolor="dark"
          header="Balance"
          body="Your balance is "
          />
      );
}

export default balance