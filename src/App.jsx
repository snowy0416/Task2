import { BrowserRouter,Route,Routes} from"react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"





export default function App() {
  return (
     <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path ="about" element={<About/>}/>
          <Route path ="skills" element={<Skills/>}/>
          <Route path ="projects" element={<Projects/>}/>   
          <Route path ="contact" element={<Contact/>}/>
        </Route>
       </Routes>
       </BrowserRouter>
     </div>
  )
}