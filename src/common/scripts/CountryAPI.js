export function getCurrent() {
  return fetch(`https://covidtracking.com/api/v1/us/current.json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    });
}