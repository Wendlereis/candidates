import api from './instance'

export default class CandidatesService {
  get() {
    return api.get(`/candidates`)
  }

  update(user) {
    return api.put(`/candidates/${user.id}`)
  }

  delete(id) {
    return api.delete(`/candidates/${id}`)
  }
}
