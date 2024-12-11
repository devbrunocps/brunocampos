import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext.jsx";
import ThemeContextProvider from "./hooks/useTheme.jsx";

function App() {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </DataContextProvider>
  )
}

export default App
