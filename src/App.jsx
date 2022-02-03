import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/Grid/Grid'
import { fetch } from './redux/slice/dataSlice'

const d = [
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
  {
    category: ['Health', 'E-commerce', 'Education'],
    created: '2022-02-01T21:31:05.113387',
    description: 'Excepteur minim commodo incididunt aliquip',
    link: 'https://formpl.us/templates',
    name: 'ullamco elit, labore',
  },
]

function App() {
  const [data, setData] = useState([])
  const [promise, setPromise] = useState()

  const init = async () => {
    try {
      const _promise = dispatch(fetch())
      setPromise(_promise)
      _data = await _promise.unwrap()
      setMessages(_data || [])
    } catch (e) {
      //dispatch(setAlert(e.message))
      console.log(e.message)
    }
  }

  useEffect(() => {
    //init()
  }, [])

  return (
    <div className="App">
      <Grid data={d}></Grid>
    </div>
  )
}

export default App
