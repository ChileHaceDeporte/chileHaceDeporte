import { database } from './openDatabase';


export function getEstablecimientos(comuna, deporte) {

  return new Promise((resolve, reject) => {
    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT id, latitud, longitud from establecimiento WHERE comuna= ? and deporte= ?', [comuna, deporte], 
            (tx, result) => resolve(result.rows._array),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}

export function getDeportes(comuna) {

  return new Promise((resolve, reject) => {
    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT distinct deporte from establecimiento WHERE comuna=? ORDER BY deporte', [comuna],
            (tx, result) => resolve(result.rows._array.map(item => item.Deporte)),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}
export function getEstablecimiento(id) {

  return new Promise((resolve, reject) => {

    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT * from establecimiento WHERE id= ?', [id], 
            (tx, result) => resolve(result.rows._array[0]),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}
////////////////////////////////////////////////////////////////////////////
export function getDeportes2() {

  return new Promise((resolve, reject) => {
    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT distinct deporte from establecimiento ORDER BY deporte',[], 
            (tx, result) => resolve(result.rows._array.map(item => item.Deporte)),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}
export function getEstablecimientos2(deporte) {

  return new Promise((resolve, reject) => {
    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT id, latitud, longitud from establecimiento WHERE deporte= ?', [deporte], 
            (tx, result) => resolve(result.rows._array),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}
export function getEstablecimientos3(comuna) {

  return new Promise((resolve, reject) => {
    database
      .then(db => {
        db.transaction(tx => {
          tx.executeSql('SELECT id, latitud, longitud from establecimiento WHERE comuna= ?', [comuna], 
            (tx, result) => resolve(result.rows._array),
            (tx, err) => reject(err.message) )
        })
      })
      .catch(err => reject(err.message))
  })
}