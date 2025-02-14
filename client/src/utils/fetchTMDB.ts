import { Method } from "./types";
export type APIParams = {
  endpoint: string;
  method: Method;
};

async function fetchFromTMDB({ endpoint, method }: APIParams) {
  const url = `https://api.themoviedb.org/3/${endpoint}`;
  const options = {
    method: method,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTBmNTUyNjQ5ZTZmNmVmZjY0ZDUwMmExNjQzNjZlMCIsIm5iZiI6MTYyMjAyNTAxOS4wNzIsInN1YiI6IjYwYWUyMzNiYmE0ODAyMDAyOTI3YjhkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vBfEn-pb7Nx4ZQ1MI3aDJenXIQG8Sfny2lb4_PyHhM",
    },
  };

  const request = await fetch(url, options);
  const response = await request.json();
  return response;
}

export default fetchFromTMDB;
