import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
function App() {
  return (
    <>
      <h2>tesing caching</h2>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
