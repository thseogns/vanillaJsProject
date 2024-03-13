const apiKey = "zoAHPMV6HZROjrE9QBrGvx5joPPrMaWREcRPPDSy3Qw0ex1o7VeYiIfK";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");
let serchValue;

async function curatedPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15&per_page=1",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
      },
    }
  );
  const data = await dataFetch.json();
  console.log(data);
}

curatedPhotos();
