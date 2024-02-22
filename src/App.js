import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import {Provider} from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer></Maincontainer>,
    },
    {
      path:"watch",
      element:<WatchPage></WatchPage>
    }
  ]
}])
function App() {
  return (

    <Provider store={store}>
    <div >
   
     <Head></Head>
     <RouterProvider router={appRouter}></RouterProvider>
    
    </div>
    </Provider>
  );
}

export default App;
