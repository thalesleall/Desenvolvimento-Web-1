import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, LazyExoticComponent } from 'react'

interface RouteConfig {
  path: string
  Component: LazyExoticComponent<React.FC>
}

// Importa todos os arquivos .tsx da pasta pages/
const pages = import.meta.glob('./pages/*.tsx')

const routes: RouteConfig[] = Object.keys(pages).map((path) => {
  const nameMatch = path.match(/\.\/pages\/(.*)\.tsx$/)
  const name = nameMatch ? nameMatch[1] : ''
  const Component = lazy(pages[path] as () => Promise<{ default: React.FC }>)

  return {
    path: name.toLowerCase() === 'inicio' ? '/' : `/${name.toLowerCase()}`,
    Component
  }
})

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
