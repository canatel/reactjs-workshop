import http from "./http";

import { setSession } from "../auth";

export async function signIn({ username, password }) {
  return http
    .post(`/users/signin`, { email: username, password:password })
    .then(({ data: json }) => {
      setSession(json.meta.token);

      return json;
    });
}

export async function signUp({ username, password, firstName, lastName }) {
  return http
    .post(`/users/signup`, { name: firstName, last_name: lastName, password: password, email: username })
    .then(({ data: json }) => {
      return json;
    });
}
