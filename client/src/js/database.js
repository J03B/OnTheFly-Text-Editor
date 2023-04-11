import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Revision History (J03B): Added logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log('PUT from the Database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ id: 1, value : content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Revision History (J03B): Added logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the Database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll(); // Could change to get(1) if needing only one.
  const result = await request;
  console.log('result.value', result);
  return result.value;
};

initdb();
