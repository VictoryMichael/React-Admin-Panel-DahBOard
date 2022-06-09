import React from 'react'
import Charts from '../../components/charts/Charts'
import FeauturedInfo from '../../components/Feauturedinfo/FeauturedInfo'
import "./Home.css"

import { userdata } from '../../dummyData'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import WidgetSm from '../../components/WidgetSm/WidgetSm'






const Home = () => {
  return (
    <div className='home'>
        <FeauturedInfo />
        <Charts data={userdata}  title='User Analytics'  grid dataKey="Active User"   />

  <div className='home-widget'>
       <WidgetSm />
       <WidgetLg />
       

  </div>

        </div>
  )
}

export default Home