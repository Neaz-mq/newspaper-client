
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data = [
    {
      name: 'Article A',
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Article B',
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Article C',
      uv: 1500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Article D',
      uv: 1080,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Article E',
      uv: 890,
      pv: 4800,
      amt: 2181,
    },
   
   
  ];

  const datas = [
    { name: ' Publication A', value: 200 },
    { name: ' Publication B', value: 300 },
    { name: ' Publication C', value: 500 },
    
  ];
   
  
  
const AdminHome = () => {
    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-3 ml-2'>Hello ! This is Admin Dashboard</h1>
        
        <div className='flex'>
         <div className="w-1/2 mt-20">
         <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
         </div>
         <div className="ml-10"></div>
         <PieChart width={400} height={400}>
          <Pie
            data={datas}
            cx="50%"
            cy="60%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
        
        
        </div>

        
    );
};

export default AdminHome;