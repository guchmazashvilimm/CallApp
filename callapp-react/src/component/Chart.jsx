import React from 'react';
import { Pie } from '@ant-design/charts';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom/dist';
import "./chart.css";
const { Header, Content, Footer } = Layout;

const PieChartPage = () => {
    const data = [
        { city: 'New York', percentage: 16 },
        { city: 'Los Angeles', percentage: 10 },
        { city: 'Chicago', percentage: 15 },
        { city: 'San Diego', percentage: 19 },
       
      ];
      
      const config = {
        data,
        angleField: 'percentage',
        colorField: 'city',
        radius: 0.8,
        label: {
          type: 'spider',
          content: '{name}\n{percentage}',
        },
      };
      
  return (
    <Layout>
      <Content>
        <div className='pie-content'>
        <Button className="back-btn"><Link to="/">Back to Table component</Link></Button>
        <Pie {...config} />
        </div>
      </Content>
     
    </Layout>
  );
};

export default PieChartPage;


// const PieChartPage = ({ pieData }) => {
//   const [pieChartData, setPieChartData] = useState([]);

//   useEffect(() => {
//     const newPieData = pieData.map((item) => {
//       return {
//         id: item.id,
//         city: item.address ? item.address.city : '',
//       };
//     });

//     setPieChartData(newPieData);
//   }, [pieData]);

//   const data = [
//     { city: 'New York', percentage: pieChartData.filter((item) => item.city === 'New York').length },
//     { city: 'Los Angeles', percentage: pieChartData.filter((item) => item.city === 'Los Angeles').length },
//     { city: 'Chicago', percentage: pieChartData.filter((item) => item.city === 'Chicago').length },
//     { city: 'San Diego', percentage: pieChartData.filter((item) => item.city === 'San Diego').length },
//   ];

//   const config = {
//     data,
//     angleField: 'percentage',
//     colorField: 'city',
//     radius: 0.8,
//     label: {
//       type: 'spider',
//       content: '{name}\n{percentage}',
//     },
//   };

//   return (
//     <Layout className="layout">
//       <Header>
//         <div className="logo">Pie Chart Page</div>
//       </Header>
//       <Content style={{ padding: '0 50px' }}>
//         <div className="site-layout-content">
//           <div className="pie-content">
//             <Pie {...config} />
//             <Button className="back-btn">
//               <Link to="/">Back to Table component</Link>
//             </Button>
//           </div>
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Pie Chart Page ©2021 Created by Me</Footer>
//     </Layout>
//   );
// };

// export default PieChartPage;
