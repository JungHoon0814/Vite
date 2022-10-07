import React from 'react';
import useRouter from '../hooks/useRouter';

const About = () => {
  const path = '';
  const { push } = useRouter();

  return (
    <div>
      <p>About</p>
      <button onClick={() => push(path)}>go main</button>
    </div>
  );

};

export default About;