import axios from "axios";

const instance = axios.create({
  baseURL: "https://65048c47c8869921ae252b26.mockapi.io",
});

export async function fetchCars() {
  try {
    const response = await instance.get("/advert");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchChangeFavorite(id, data) {
  try {
    const response = await instance.patch(`/advert/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
