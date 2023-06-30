import List from './pages/List'
import Page2 from './pages/Page2'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {

  const routes = createBrowserRouter ([
    {
      path: '/',
      element: <List />
    },
    {
      path: '/Page2',
      element: <Page2 />
    }
  ])



  return (
      <RouterProvider router={routes}/>
  );
}

export default App;
