import React, { memo } from 'react';






const PersonalInfo = memo(({data}) => {


 
  return (
    <div>
      <div className='w-[300px]'>
        <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}` }/>
      </div>
      <div>
        <div>Personal Info</div>
        <div>
          <div>Known For</div>
          <div>{data.known_for_department}</div>
        </div>
        <div>
          <div>Gender</div>
          {data.gender===2 ? <div>Male</div> : <div>Female</div> }
        </div>
        <div>
          <div>Birthday</div>
          <div>{data.birthday}</div>
        </div>
        {data.deathday && 
        <div>
          <div>Deathday</div>
          <div>{data.deathday}</div>
        </div>
        }
        <div>
          <div>Place of Birth</div>
          <div>{data.place_of_birth}</div>
        </div>
        <div>
          <div>Also Known As</div>
          <div>{data.also_known_as}</div>
        </div>
      </div>
    </div>
  );
})

export default PersonalInfo;
