const urlApi = 'http://localhost:3000/summary';

export async function getSummaryList() {
    const conection = await fetch(urlApi);
    const convertedData = await conection.json();
    return convertedData
}