import React from 'react';
import './cardHover.css';
import pic from '../../Images/sceneryImage.jpeg';
export default function CardHover() {
  return (
    <div className='card'>
      <img src={pic} alt="" />
        <div className='content'>
          <h2>Heading</h2>
          <p>
            lorem ipsum dolor sit amet contentcjbdwjkdkedkcbedbchebdcdcnewdncejnennecnekncenjcnenebvewbvec
            cbdchd dcbd jcbewdc cjbedckj dkcjebdbcew cewkc ewbcejw ce cjew  cecebcebcje jecbekjc
            kdjbcdkcjkc jkcnkdjcjew.
          </p>
        </div>
    </div>
  )
}
