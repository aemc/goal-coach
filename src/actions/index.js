import { SIGNED_IN } from '../constants';

export function logUser(email) {
  return {
    type: SIGNED_IN,
    email
  };
}
