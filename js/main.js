async function getUserData() {
  const res = await fetch("https://enka.network/api/uid/618285856/?info");
  const userData = await res.json();
  console.log
}

getUserData();