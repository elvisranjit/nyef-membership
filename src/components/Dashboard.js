import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Fee Paid Till</th>
            <th>Fee Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Neetu Shrestha</td>
            <td>neetu@example.com</td>
            <td>2025-07-10</td>
            <td>रु 35000</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}