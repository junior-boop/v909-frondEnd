const db = 'https://api.npoint.io/e909dbcf64f0a7193c8b'

const achat = []

export async function Achat(){
    await fetch(db)
    .then(response => response.json())
    .then(dt => {
        for(let a of dt.achat){
            achat.push(a) 
            }
        })
    .catch((error) => {
    console.error('Error:', error);
    });
}

export default achat
