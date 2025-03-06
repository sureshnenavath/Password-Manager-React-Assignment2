import React, {useState} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

const PasswordManager = () => {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwords, setPasswords] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  // Handle adding a new password
  const handleAddPassword = e => {
    e.preventDefault() // Prevent form submission from refreshing the page
    if (website.trim() && username.trim() && password.trim()) {
      const newPassword = {
        id: Date.now(),
        website: website.trim(),
        username: username.trim(),
        password: password.trim(),
      }
      setPasswords([...passwords, newPassword])
      setWebsite('')
      setUsername('')
      setPassword('')
    }
  }

  // Handle deleting a password
  const handleDeletePassword = id => {
    const updatedPasswords = passwords.filter(pw => pw.id !== id)
    setPasswords(updatedPasswords)
  }

  // Filter passwords based on search query (case-insensitive)
  const filteredPasswords = passwords.filter(pw =>
    pw.website.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="password-manager">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <h1>Password Manager</h1>
      </div>

      <div className="add-password-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="illustration"
        />
        <div className="input-container">
          <h2>Add New Password</h2>
          <form onSubmit={handleAddPassword}>
            <div className="input-group">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input-field"
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="passwords-section">
        <div className="passwords-header">
          <div>
            <h2>Your Passwords</h2>
            <p className="password-count">{passwords.length}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <label className="show-passwords">
            <input
              type="checkbox"
              checked={showPasswords}
              onChange={e => setShowPasswords(e.target.checked)}
            />
            Show Passwords
          </label>
        </div>

        {filteredPasswords.length === 0 ? (
          <div className="no-passwords">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-passwords-img"
            />
            <p>No Passwords</p>
          </div>
        ) : (
          <ul className="passwords-list">
            {filteredPasswords.map(pw => (
              <PasswordItem
                key={pw.id}
                password={pw}
                onDelete={handleDeletePassword}
                showPasswords={showPasswords}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PasswordManager
