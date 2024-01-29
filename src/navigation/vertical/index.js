const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'ic:twotone-dashboard'
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
      icon: 'solar:chart-bold-duotone',
      children: [
        {
          title: 'Prescription',
          icon: 'ph:prescription-duotone',
          path: '/prescription'
        },
        {
          title: 'Drug Request',
          icon: 'icon-park-twotone:prescription',
          path: '/drug-request'
        }
      ]
    }
  ]
}

export default navigation
