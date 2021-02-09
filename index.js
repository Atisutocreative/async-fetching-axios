// console.log(axios);

async function displayPrizes() {
  //   console.log("hi?");
  const response = await axios.get(
    "https://ignoble-api.herokuapp.com/prizes?year=2020"
  );

  console.log("RES:", response);
}

displayPrizes();
