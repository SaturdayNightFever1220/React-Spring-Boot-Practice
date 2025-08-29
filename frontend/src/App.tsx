import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Items from './items/Items'
import Counter from './counter/Counter'
import ITunes from './iTunes/ITunes'
import Todo from './Todo/Todo'
import Pokemon from './pokemon/Pokemon'

function Home() {
  return <p>ホーム画面です。<br />
            ※追加箇所<br />
            iTunesAPIを使用した楽曲検索機能<br />
            ToDoリスト
  </p>
}

function App() {
  return (
    <div style={{ padding: '15px' }}>
      <h1>Sample App Remake</h1>
      <nav style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <Link to="/">Home</Link>
        <Link to="/demo/counter">Counter</Link>
        <Link to="/demo/items">Items</Link>
        <Link to="/demo/iTunes">iTunes</Link>
        <Link to="/demo/Todo">Todo</Link>
        <Link to="/demo/pokemon">Pokemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/counter" element={<Counter />} />
        <Route path="/demo/items" element={<Items />} />
        <Route path="/demo/iTunes" element={<ITunes />} />
        <Route path="/demo/Todo" element={<Todo />} />
        <Route path="/demo/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App