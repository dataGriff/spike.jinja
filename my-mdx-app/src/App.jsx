// src/App.jsx
import Example from './Example.mdx'
import Counter from './Counter.jsx'
import { MDXProvider } from '@mdx-js/react'

const components = {
  Counter, // ← this makes <Counter /> work inside MDX
}

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>MDX + React + JSX</h1>
      <MDXProvider components={components}>
        <Example />
      </MDXProvider>
    </div>
  )
}
