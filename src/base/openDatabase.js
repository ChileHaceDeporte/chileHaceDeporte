import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';



async function openDatabase(){
  
  

  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {

    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }

  await FileSystem.downloadAsync(
  
    Asset.fromModule(require('../../assets/base02.db')).uri,
    FileSystem.documentDirectory + 'SQLite/base02.db'
  
  );

  return SQLite.openDatabase('base02.db');

}

export const database = openDatabase()