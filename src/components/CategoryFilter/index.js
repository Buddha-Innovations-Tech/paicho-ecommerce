import React from 'react'
import { InputGroup } from "react-bootstrap";

const CategoryFilter = ({category,filter}) => {
  return (
    <>
        <div className="category-wrapper">
            <p className='category-wrapper__filter'>{filter}</p>
            <div className='d-flex justify-content-between align-items-center' style={{borderBottom: "1px solid rgba(212, 215, 217, 0.5)",padding: "17px 0px 2px 0"}}>
            <p className='category-wrapper__subcategory'>Sub Category</p>
            <p  className='category-wrapper__clearfilter'>Clear-Filter</p>
            </div>
            <ul>
                
                {category.map((items,index)=>{
                    return(

                <li className='d-flex align-items-center' key={index}>
                <InputGroup.Checkbox /> 
                <span className="ms-1">{items.name}</span>
                </li>
                    )
                })}
            </ul>
            <p className='category-wrapper__price'>Price</p>
            <div className='d-flex category-wrapper__minmax'>
                <div>
                    <p>Min</p>
                    <input type="number" placeholder='0' />
                </div>
                <div className='ms-1'>
                    <p>Max</p>
                    <input type="number" placeholder='0' />
                </div>
            </div>
            <div className='category-wrapper__buttons'>
                <button className='category-wrapper__buttons--apply'>Apply</button>
            </div>
        </div>

    </>
  )
}

export default CategoryFilter