import low from 'lowdb'
import localStore from 'lowdb/adapters/LocalStorage'

const adapter = new localStore('db')
const data = low(adapter)

const db = 'https://api.npoint.io/e909dbcf64f0a7193c8b'

const Achat =[]

export default async function response(){
    await fetch(db)
    .then(response => response.json())
    .then(dt => {
        console.log(dt)
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

console.log(Achat)
