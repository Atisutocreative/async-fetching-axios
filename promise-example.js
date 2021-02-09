// synchrone functie
// function getUser() {
//   return { name: "Rein" };
// }

// const user = getUser();

// console.log(user.name);

async function getUser() {
  return { name: "Rein" };
}

async function logUser() {
  // promise "omruilen" -> await de waarde van de promise
  const user = await getUser();

  console.log(user.name);
}

logUser();
