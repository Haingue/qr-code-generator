import { BrowserRouter, Route, Routes } from "react-router"
import Generator from "./route/generator/Generator"
import NotFound from "./route/NotFound"

export const Root = () => {
  return (
    <>
    <nav></nav>
    <main>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Generator />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </main>
    <footer></footer>
    </>
  )
}
export default Root