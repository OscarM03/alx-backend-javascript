import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((output) => {
      output.map((res) => ({
        status: res.status,
        value: output.status === 'fulfilled' ? res.value : String(res.reason),
      }));
    });
}
