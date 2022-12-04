// function BuscarCep() {
//   const url = `https://viacep.com.br/ws/13060031/json/`;
//   axios(url).then(response => console.log(response.data));
// }

async function BuscarCep() {
  const url = `https://viacep.com.br/ws/13060031/json/`;
  const response = await axios(url);
  console.log(response.data);
}
