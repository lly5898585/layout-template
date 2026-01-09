import React, { useState } from 'react'
import './layout.css'
import { menuConfig } from './menuConfig'

export default function Sidebar() {
  const [openKey, setOpenKey] = useState(null)
  const [activeKey, setActiveKey] = useState(null)

  const handleMainClick = (item) => {
    if (item.children && item.children.length > 0) {
      setOpenKey(openKey === item.key ? null : item.key)
    } else {
      setActiveKey(item.key)
      setOpenKey(null)
    }
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuConfig.map((item) => {
          const isOpen = openKey === item.key
          const isActiveMain =
            !item.children && activeKey === item.key

          return (
            <div key={item.key}>
              {/* 一级菜单 */}
              <div
                className={`menu-main ${
                  isActiveMain ? 'menu-main-active' : ''
                }`}
                onClick={() => handleMainClick(item)}
              >
                <span className="menu-main-left">
                  <span className="menu-main-icon">
                    {item.icon}
                  </span>
                  <span className="menu-main-title">
                    {item.title}
                  </span>
                </span>

                {item.children && (
                  <span
                    className={`menu-arrow ${
                      isOpen ? 'open' : ''
                    }`}
                  >
                    ▾
                  </span>
                )}
              </div>

              {/* 二级菜单 */}
              {item.children && isOpen && (
                <div className="menu-sub">
                  {item.children.map((sub) => {
                    const isActiveSub =
                      activeKey === sub.key

                    return (
                      <div
                        key={sub.key}
                        className={`menu-sub-item ${
                          isActiveSub
                            ? 'menu-sub-active'
                            : ''
                        }`}
                        onClick={() =>
                          setActiveKey(sub.key)
                        }
                      >
                        <span className="menu-sub-icon">
                          {sub.icon}
                        </span>
                        <span className="menu-sub-title">
                          {sub.title}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
