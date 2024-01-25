import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Homes from "./Pages/Homes"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Layout/>}>
          <Route index element={<Homes/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}
