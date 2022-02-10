import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';



async function openDatabase(){
  
  console.log((await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists)

  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {

    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }

  await FileSystem.downloadAsync(
  
    Asset.fromModule(require('../../../assets/base.db')).uri,
    FileSystem.documentDirectory + 'SQLite/base.db'
  
  );

  return SQLite.openDatabase('base.db');

}

export const database = openDatabase()