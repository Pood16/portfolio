
import {Routes, Route} from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'

import Projects from './pages/Projects'
import Contact from './pages/Contact'


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}


