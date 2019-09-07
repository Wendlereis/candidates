import api from './instance'

export default class CandidatesService {
  get() {
    return api.get(`/candidates`)
  }

  update(candidate) {
    return api.put(`/candidates/${candidate.id}`, candidate)
  }

  delete(id) {
    return api.delete(`/candidates/${id}`)
  }
}
