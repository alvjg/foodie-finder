import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainPage from './components/MainPage'
import Settings from './components/Settings'
import RootLayout from './layouts/RootLayout'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    //parent route, RootLayout is a default template for pages
    <Route path="/" element={<RootLayout />}>
      {/* provides a page for root */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/MainPage" element={<MainPage />}></Route>
      <Route path="/Settings" element={<Settings />}></Route>
    </Route>
  )
);

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>


  )
}

export default App;
