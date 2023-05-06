import React, { useEffect,useState } from 'react';
import TableComponent from './TableComponent';
import PieChartPage from './Chart';

function Fetch() {

    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
  }, []);

  // const idSet = new Set(data.map(item => item.id));
  // const idCount = idSet.size;



  return (
    <div>
      <TableComponent userdata={data}/>

      {/* {idCount} */}
        
    </div>
  );
}

export default Fetch;
