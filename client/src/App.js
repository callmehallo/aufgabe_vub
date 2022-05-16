import './App.css'
import React, { useState } from 'react'
import Searchbar from './components/searchbar/SearchBar'
import Output from './components/output/Output'
import dataFactory from './components/dataFactory'

const App = () => {
  const [data, setData] = useState()

  //fetched die HTML-Datei der gesuchten Seite, nimmt sich den HTML-body und holt sich die Klassen ('.teaser.cf') in denen alle wichtigen Information fuer die Aufgabe stehen. Mithilfe der dataFactory wird dann eine Array aus Objekten erstellt, bei dem jedes Objekt die gesuchten Informationen enthaelt.
  const fetchData = async search => {
    const response = await fetch('search?url=' + search)

    const document = await response.text()

    const parser = new DOMParser()
    const parsedDoc = parser.parseFromString(document, 'text/html').body

    const matches = parsedDoc.querySelectorAll('.teaser.cf')

    setData(Array.from(matches).map(dataFactory))
  }

  const onSubmit = link => {
    if (link === '')
      link =
        'https://www.springerprofessional.de/wasserwirtschaft-4-2019/16592584'
    fetchData(link)
  }

  const colNames = [
    'Ausgabe',
    'Datum',
    'Jahr',
    'Kategorie',
    'Titel',
    'Autoren',
    'URL',
  ]

  return (
    <div className='App'>
      <Searchbar onSubmit={onSubmit} />
      <Output data={data} colNames={colNames} />
    </div>
  )
}

export default App
