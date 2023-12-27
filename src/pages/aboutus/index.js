import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div style={{height:"100vh"}}>
      <h1>About Us Page</h1>
      <ul> 
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li> 
      </ul>
     
    </div>
  )
}

export default About;