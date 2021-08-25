import { lsGet, lsSet } from './utils';

const EMPTY_USER = { name: '', about: '' };

function lsGetUser() {
  return lsGet('currentUser', EMPTY_USER);
}

function lsSetUser(user) {
  lsSet('currentUser', user);
  return user;
}

function isSameUser(userA, userB) {
  return (
    userA._id === userB._id
    && userA.name === userB.name
    && userA.email === userB.email
  );
}

export {
  lsSetUser, lsGetUser,
  isSameUser,
  EMPTY_USER,
};
