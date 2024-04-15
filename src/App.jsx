import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//PAGES
import Hero from './components/hero/Hero';
//NOT FOUND
import NotFoundPage from './components/notFoundPage/NotFoundPage';
//STYLES
import './App.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Hero/>,
		errorElement: <NotFoundPage/>
	}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App
