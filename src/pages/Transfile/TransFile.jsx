

import"./TransFile.css"
  import React, { } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 'Jenuary',
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: '99.73',
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 'March',
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: '90',
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: '15.71',
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: '89.1',
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: '8.89',
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};





const TransFile = () => {
  return (
    <div className='tran'>



 {
    
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
  
  }




    </div>
  )
}

export default TransFile






