import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <div>
      <header>
        <h1 className='text-center text-light bg-secondary'>Employee Management Software</h1><br />
        <button onClick={()=>setIsAdding(true)} className='btn btn-secondary'>Add Button</button><br />
      </header>
    </div>
  )
}

export default Header
