import path from 'path';
import React from 'react';
import { useState } from 'react';
import useRouter from '../hooks/useRouter';


const Root = () => {
  const { push } = useRouter();
  const path = 'About';

  return (
    <div>
      <p>Root</p>
      <button onClick={() => push(path)}>About</button>
    </div>
  )
}

export default Root;