import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const CustomDropdown = ({hobbies}) => {
  return (
    <Dropdown className='dropdownOption'>
    {hobbies &&<Form.Select className='dropdownOption' aria-label="Default select example">
    {hobbies?.map((item,index)=>(<option key={index}>{item?.value}</option> ))}
    </Form.Select>}
  </Dropdown>
  )
}

export default CustomDropdown