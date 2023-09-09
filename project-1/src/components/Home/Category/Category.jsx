import React from 'react'
import "./Category.scss";
import download1 from "../../../assets/category/download-1.jpeg"
import download2 from "../../../assets/category/download-2.jpeg"
import download3 from "../../../assets/category/download-3.jpg"
import download4 from "../../../assets/category/download-4.jpeg"
function Category() {
  return (
    <div className='shop-by-category'>
      <div className='categories'>
        <div className='category'>
             <img src={download1} alt="" />
        </div>
        <div className='category'>
             <img src={download2} alt="" />
        </div>
        <div className='category'>
             <img src={download3} alt="" />
        </div>
        <div className='category'>
             <img src={download4} alt="" />
        </div>
      </div>
    </div>
     
  )
}

export default Category
