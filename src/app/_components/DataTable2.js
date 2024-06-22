'use client';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DataTable2 = () => {
  const [laborList, setLaborList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        console.log('Fetch successful, data:', response.data);
        
        if (response.data && Array.isArray(response.data)) {
          setLaborList(response.data);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ margin: '30px' }}>
      <table border="1">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Zip Code</th>
            <th>Gender</th>
            <th>Annual Income</th>
          </tr>
        </thead>
        <tbody>
          {laborList.map((x, i) => (
            <tr key={i}>
              <td>{x.job_title}</td>
              <td>{x.zip_code}</td>
              <td>{x.gender}</td>
              <td>{x.income_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable2;
