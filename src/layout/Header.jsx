import React from 'react'
import './layout.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">MES</span>
        <span className="header-title">MES 系统</span>
      </div>

      <div className="header-right">
        <span className="header-help">帮助中心</span>
        <span className="header-user">admin</span>
      </div>
    </header>
  )
}
