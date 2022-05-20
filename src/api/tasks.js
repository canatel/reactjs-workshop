import http from "./http";

import { getSession } from "../auth";

export async function signIn({ email, password }) {
  return http
    .post(`/users/signin`, { email, password })
    .then(({ data: json }) => {
      setSession(json.meta.token);

      return json;
    });
}

export async function signUp({ email, password, name, last_name }) {
  return http
    .post(`/users/signup`, { name, last_name, password, email })
    .then(({ data: json }) => {
      return json;
    });
}
