import { useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [currentPage, setCurrentPage] = useState('login') // 'login' or 'register'

  const handleSwitchToRegister = () => setCurrentPage('register')
  const handleSwitchToLogin = () => setCurrentPage('login')

  return (
    <div>
      {currentPage === 'register' ? (
        <Register onSwitchToLogin={handleSwitchToLogin} />
      ) : (
        <Login onSwitchToRegister={handleSwitchToRegister} />
      )}
    </div>
  )
}

export default App
