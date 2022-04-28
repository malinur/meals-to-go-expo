import React from 'react'

import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component'

export default function MapCallout({ restaurant }) {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />
}
