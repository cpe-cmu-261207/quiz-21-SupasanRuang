const img = document.querySelector("#img-profile");
const gender = document.getElementById("span-gender-icon"); //👨👩
const pName = document.getElementById("p-name");
const pAdd = document.getElementById("p-address");
const pEmail = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");
const card = document.querySelector("#div-user-card");
const loading = document.getElementById("div-loading-card");
async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}
btnRandom.onclick = async () => {
  img.style.display = "none";
  gender.style.display = "none";
  pName.style.display = "none";
  pAdd.style.display = "none";
  pEmail.style.display = "none";
  btnRandom.style.display = "none";
  card.style.display = "none";
  loading.style.display = "";
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.results[0].gender);
  //img = resp.data.results[0].picture.large;
  if (resp.data.results[0].gender == "female") {
    gender.innerText = "👩";
  } else {
    gender.innerText = "👨";
  }
  card.style.display = "";
  loading.style.display = "none";
  gender.style.display = "";
};

img.onload = () => {
  img.style.display = "";
  gender.style.display = "";
  pName.style.display = "";
  pAdd.style.display = "";
  pEmail.style.display = "";
  btnRandom.style.display = "";
  card.style.display = "";
  loading.style.display = "none";
};
