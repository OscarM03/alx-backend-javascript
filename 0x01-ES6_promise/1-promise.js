export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    const obj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(obj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return promise;
}
