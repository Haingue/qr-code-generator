import { BrowserRouter, Route, Routes } from "react-router"
import Generator from "./route/generator/Generator"
import NotFound from "./route/NotFound"
import NavigationBar from "./components/NavigationBar"

export const Root = () => {
  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <main>
              <Routes>
                  <Route path="/"><Redirect to="/qr-code-generator" /></Route>
                  <Route path="/qr-code-generator" element={<Generator />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
    </>
  )
}
export default Root
