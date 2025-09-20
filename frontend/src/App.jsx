import {createBrowserRouter, RouterProvider} from "react-router"
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import IndividualVideo from "./pages/IndividualVideo.jsx"
import Navbar from "./components/Navbar.jsx"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/signin",
      element: <SignIn/>
    },
    {
      path: "/video/:id",
      element: <IndividualVideo/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
      {/* */}
    </>
  )
}

export default App
