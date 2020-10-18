const db = 'https://api.npoint.io/e909dbcf64f0a7193c8b'

const locations = []

async function Location(){
    await fetch(db)
    .then(response => response.json())
    .then(dt => {
        for(let l of dt.locations){
            locations.push(l)
        }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

console.log(locations)
export default locations