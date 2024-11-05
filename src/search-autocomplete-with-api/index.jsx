


import React, { useState } from 'react'

export default function SearchAutocomplete() {

        const [loading, setLoading] = useState(false)
        const [users, setusers] = useState([])


  return (
    <div className='search-autocomplete-container'>
        <input name='search-users' placeholder='Search users'/>
        
        
        </div>
  )
}
