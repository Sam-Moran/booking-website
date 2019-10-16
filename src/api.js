import axios from "axios";

const instance = axios.create({
  baseURL: "https://glamping-data.herokuapp.com"
});

export const getCampsite = id => {
  return instance.get(`sites/${id}`).then(({ data }) => {
    return data;
  });
};

export const getCampsites = searchTerm => {
  return instance
    .get("sites", { params: { q: searchTerm } })
    .then(({ data }) => {
      return data;
    });
};

export const getPitches = () => {
  return instance.get("pitches").then(({ data }) => {
    return data;
  });
};

export const getActivites = () => {
  return instance.get("activities").then(({ data }) => {
    return data;
  });
};
