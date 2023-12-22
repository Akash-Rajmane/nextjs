import React from 'react';
import { useRouter } from 'next/router';

const Developer = () => {
  const router  = useRouter();

  const devId = router.query.devId;
  console.log(devId);

  const details =  [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
  ]

  const developer = details.find(el=>el.id==devId);

  

  return (
    <div style={{height:"100vh"}}>
      {developer ?
       <>
        {developer.name} {developer.role}
      </> :
       <p>Developer does not exist</p> }
    </div>
  )
}

export default Developer;