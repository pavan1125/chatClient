import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from "./components/Home";
import Chat from "./components/Chat";

const router=createBrowserRouter(createRoutesFromElements(
    <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
    </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
