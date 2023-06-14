import { useState } from 'react'
import FileUpLoad from './components/fileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileUpLoad/>
    </>
  )
}

export default App
