import React from 'react'
import { InputGroup } from "react-bootstrap";

const CategoryFilter = ({category}) => {
    console.log(category);
  return (
    <>
        <div className="category-wrapper">
            <p className='category-wrapper__filter'>Filter</p>
            <p className='category-wrapper__subcategory'>Sub Category</p>
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
            <div className='d-flex category-wrapper__buttons'>
                <button className='category-wrapper__buttons--clear'>Clear</button>
                <button className='category-wrapper__buttons--apply'>Apply</button>
            </div>
        </div>

    </>
  )
}

export default CategoryFilter