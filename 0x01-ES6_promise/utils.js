export function uploadPhoto() {
  return Promise.resolve({
    status: 'photo uploaded'
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Cherif',
    lastName: 'Fadaly'
  });
}
