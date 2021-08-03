import React, { useState } from 'react'
import axios from 'axios'

const Form = props => {

  const [username, setUsername] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const url = `https://api.github.com/users/${username}`
    const response = await axios.get(url)
    props.onSubmit(response.data)

    setUsername('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mt-10 flex">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150"
          required
        />
        <button
          type="submit"
          className="ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
