import Initial from "./pages/Initial";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <Initial /> }
])

export default router