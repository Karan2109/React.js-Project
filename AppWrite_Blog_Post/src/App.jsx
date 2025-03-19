
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1 className='bg-cyan-600 text-3xl py-3 px-2 rounded-2xl'>A Blog app with appwrite</h1>
    </>
  )
}

export default App
