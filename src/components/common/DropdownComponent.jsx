import React, { useState, useEffect } from 'react'
import { useFetchFilesList } from '../../hooks/useFetchFilesList'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DropdownComponent = ({ onSelectionChange }) => {
  const { data, isLoading, error } = useFetchFilesList()
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event) => {
    const selectedOption = event.target.value
    setSelectedValue(selectedOption)
    onSelectionChange(selectedOption)
  }

  useEffect(() => {}, [data])

  const handleClean = () => {
    setSelectedValue('')
    onSelectionChange('')
  }

  return (
    <div>
      {isLoading
        ? (
          <p>Cargando opciones...</p>
          )
        : error
          ? (
            <p style={{ color: 'red' }}>{error}</p>
            )
          : (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Form.Select
                style={{ width: '570px' }}
                size='sm'
                value={selectedValue}
                onChange={handleChange}
              >
                <option value=''>Seleccione una opción</option>
                {(data || { files: [] })?.files.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
              <Button
                onClick={handleClean}
                variant='outline-primary'
                className='start-0 mx-0'
              >
                Limpiar
              </Button>
            </div>
            )}
    </div>
  )
}

export default DropdownComponent
