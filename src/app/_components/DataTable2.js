'use client';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DataTable2 = () => {
  const [laborList, setLaborList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await axios.get('./data.json');
        console.log('Fetch successful, response:', response);
        console.log('Response data:', response.data);

        if (response.data && Array.isArray(response.data)) {
          setLaborList(response.data);
          console.log('Data set in state:', response.data);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Sort laborList by job_title
  const sortedList = [...laborList].sort((a, b) => {
    if (a.job_title < b.job_title) return -1;
    if (a.job_title > b.job_title) return 1;
    return 0;
  });

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);

  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

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
          {currentItems.length > 0 ? (
            currentItems.map((x, i) => (
              <tr key={i} style={{ margin: "10px" }}>
                <td>{x.job_title || "data not available"}</td>
                <td>{x.zip_code || "data not available"}</td>
                <td>{x.gender}</td>
                <td>{x.income_year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{ margin: '10px 0' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default DataTable2;
