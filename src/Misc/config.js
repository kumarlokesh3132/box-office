const API_URL = 'https://api.tvmaze.com';

export async function getAPI( query ){
  const response = await fetch(`${API_URL}${query}`).then(r=>r.json());
  return response;
}