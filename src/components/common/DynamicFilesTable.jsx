import React from 'react'
import Table from 'react-bootstrap/Table'

const DynamicFilesTable = ({ headers, data, title, fixedValues = {} }) => {
  return (
    <div className='p-4 rounded-xl shadow-md max-w-lg mx-auto'>
      <h4 className='text-xl font-bold text-center'>{title}</h4>
      <Table striped bordered hover size='sm' className='small'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>
                  {row[header] !== undefined
									  ? row[header]
									  : fixedValues[header] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default DynamicFilesTable
