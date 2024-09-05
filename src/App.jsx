import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { theme } from "./style/theme"
import { ThemeProvider } from "@mui/material"
import {CssBaseline} from "@mui/material"
import Global from "./layout/global"

function App() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Global />} >
              <Route index element={<>home</>}/>
              <Route path='products'>
                  <Route index element={<>Products</>}/>
                  <Route path=':id' element={<>id</>}/>
              </Route>
              <Route path='support' element={<>suport</>}/>
              <Route path='*' element={<Navigate to='/' replace={true} />}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
