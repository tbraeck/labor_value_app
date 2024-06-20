// components/DataTable.js

import React from 'react';

export default function DataTable() {
  return (
    <div style={{margin:"30px"}}>
      <table style={{display: "flex", flexDirection: "column",border:"2px", borderColor: 'black'}}>
        <thead>
          <th style={{margin: "10px",borderColor: 'black'}}>First Name</th>
          <th style={{marginRight: "10px"}}>Last Name</th>
          <th style={{marginRight: "10px"}}>Email</th>
          <th style={{marginRight: "10px"}}>Avatar</th>
        </thead>
        <div>
        <tbody>
          <tr>
            <td>Cairpcoders</td>
            <td>Ednalan</td>
            <td>cairocoders@gmail.com</td>
            <td>photo</td>
          </tr>
        </tbody>
        </div>
        

      </table>
    </div>
  );
}
    