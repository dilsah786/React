import React from 'react'
import Fetch from './Fetch';
import { useState } from 'react';

const Show = (elem) => {

  return (
    <div>
        <h1>{elem.name}</h1>
        <h1>1.50 AM  and I am going to sleep</h1>

        <Fetch/>
    </div>
  )
}

export default Show;