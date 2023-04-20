import React from 'react';
import { PieChart, Pie,Legend,Cell} from 'recharts';

const Graph = () => {
    const data = [
        { name: 'Electronics', students: 6 },
        { name: 'Jewelery', students: 4 },
        { name: 'Mens clothing', students: 4 },
        { name: 'Womens clothing', students: 6 }
    ];    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <PieChart width={450} height={400}>
            <Pie
                data={data}
                dataKey="students"
                nameKey="name"
                outerRadius={100}
                label={(entry) => entry.name} 
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Legend />
        </PieChart>
    </div>
  )
}

export default Graph;