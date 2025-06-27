import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import SamplePage from './presentation/pages/samplePage'
import { ROUTES } from './constants'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<SamplePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
