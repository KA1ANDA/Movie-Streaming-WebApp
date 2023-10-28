import React, { memo } from 'react';
import People from '../People/People';






const PeoplePage = memo(() => {
 

  return (
      <div className="  bg-slate-500 px-[75px] mt-[150px]  flex">
        <People/>
      </div>   
  );
})

export default PeoplePage;
