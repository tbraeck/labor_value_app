// components/DataTable.js

import React from 'react';

export default function DataTable({ countries }) {
  return (
    <div>
      <div>
        <button className="headingName">
          <div>Name</div>
        </button>

        <button className="heading_population">
          <div>Population</div>
        </button>
      </div>

      {countries.map((country) => (
        <div key={country.name}>
          <div>{country.name}</div>
          <div>{country.population}</div>
        </div>
      ))}
    </div>
  );
}
    