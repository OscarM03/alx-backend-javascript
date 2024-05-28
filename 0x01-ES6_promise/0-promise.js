export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('The data has been received from the API');
    }, 1000);
  });

  return promise;
}
