/**
 * Sidebar 菜单配置（最终规范）
 *
 * 规则说明：
 * 1. 有 children 的菜单 = 分组菜单（一级不高亮）
 * 2. 没有 children 的菜单 = 单页入口（一级可高亮）
 * 3. icon 只填写标识名，不直接写样式
 * 4. key 全局唯一，不可重复
 */

export const menuConfig = [
  {
    key: 'production',
    title: '生产管理',
    icon: 'factory',
    children: [
      {
        key: 'deviceAlert',
        title: '设备异常预警',
        route: '/device-alert'
      },
      {
        key: 'deviceBook',
        title: '设备台账',
        route: '/device-book'
      }
    ]
  },

  {
    key: 'quality',
    title: '质量管理',
    icon: 'quality',
    children: [
      {
        key: 'ppm',
        title: 'PPM 分析',
        route: '/ppm'
      }
    ]
  },

  {
    key: 'energy',
    title: '能耗分析',
    icon: 'energy',
    route: '/energy'
  },

  {
    key: 'system',
    title: '系统设置',
    icon: 'setting',
    route: '/system'
  }
]
