const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'ic:twotone-home'
    },
    {
      title: 'Pharmacy',
      icon: 'ic:twotone-local-pharmacy',
      path: '/pharmacy/all-pharmacy'
    },
    {
      title: 'Manufacturer',
      icon: 'ic:twotone-factory',
      path: '/manufacturer/all-manufacturer'
    },
    {
      title: 'Drug',
      icon: 'ph:pill-duotone',
      path: '/drug/all-drug'
    },
    {
      title: 'Coupon',
      icon: 'iconamoon:ticket-duotone',
      path: '/coupon/all-coupon'
    },

    {
      title: 'Users',
      icon: 'ph:users-duotone',
      path: '/users/all-user'
    },
    {
      title: 'Transaction Logs',
      icon: 'uim:history',
      path: '/logs'
    },
    {
      title: 'Reports',
      icon: 'solar:chart-bold-duotone'
    }
  ]
}

export default navigation
