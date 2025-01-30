import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FileListComponent from '../../components/Files/FileListComponent'
import FileDataComponent from '../../components/Files/FileDataComponent'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './files.scss'
import Card from 'react-bootstrap/Card'

const Files = () => {
  return (
    <div className='p-4 rounded-xl shadow-md max-w-xl mx-auto text-center mb-8 position-relative'>
      <Button
        as={Link}
        to='/'
        variant='outline-danger'
        className='position-absolute start-0 m-3'
      >
        Regresar
      </Button>

      <div
        style={{ minHeight: '200px', minWidth: '800px' }}
        className='d-flex flex-column'
      >
        <Tabs
          defaultActiveKey='dataList'
          id='fill-tab-example'
          className='mb-3'
          fill
        >
          <Tab eventKey='list' title='Lista'>
            <div className='d-flex flex-column h-100'>
              <Card>
                <FileListComponent />
              </Card>
            </div>
          </Tab>
          <Tab eventKey='dataList' title='Archivos Formateados'>
            <div className='d-flex flex-column h-100'>
              <Card>
                <FileDataComponent />
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Files
