import React from 'react'
import HeadingSection from './../../components/HeadingSection';
import map from '../../assets/about/map/Huge Global.png';
const Map = () => {
  return (
    <div className='section-container'>
      <HeadingSection heading={'Huge Global Network of Fast VPN'} description={'See LaslesVPN everywhere to make it easier for you when you move locations.'} />
      <img src={map} alt="map" className='w-full h-60 md:h-[530px] object-fill' />
    </div>
  )
}

export default Map