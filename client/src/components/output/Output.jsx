import React from 'react'
import './output.css'

const Output = ({ data, colNames, width = 'auto', height = 'auto' }) => {
  return (
    <div>
      {data?.length > 0 && (
        <table
          className='slide-in-bottom '
          cellSpacing='0'
          style={{ width, height, padding: '5px 10px' }}
        >
          <thead>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj, index) => (
              <tr key={index}>
                {' '}
                {Object.values(obj).map((value, index2) => (
                  <td key={index2}>{value} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Output
