import http from "../../ReactHelpers/http/http-common";

const getAll = () => {
  return http.get("/contacts");
};

const get = iri => {
  return http.get(iri);
};

/*const create = data => {
  return http.post("/contacts", data);
};

const update = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

const remove = id => {
  return http.delete(`/contacts/${id}`);
};

const removeAll = () => {
  return http.delete(`/contacts`);
};

const findByTitle = title => {
  return http.get(`/contacts?title=${title}`);
};*/

const login = data => {
  return http.post("/login", data)
}

const UserService = {
  /*getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle*/
  get,
  login
};

export default UserService