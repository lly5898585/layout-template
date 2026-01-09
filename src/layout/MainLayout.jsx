import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './layout.css'

export default function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  )
}
