import http from "./http";

class JobService {
  getAll() {
    return http.get("/jobs");
  }

  get(id) {
    return http.get(`/jobs/${id}`);
  }

  create(data) {
    return http.post("/pets", data);
  }

  update(id, data) {
    return http.put(`/pets/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pets/${id}`);
  }
}

export default new JobService();
