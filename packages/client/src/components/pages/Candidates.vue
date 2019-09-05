<template>
  <section class="candidates">
    <section class="candidates__favorites">
      <h2>Favorites</h2>
      <Card :key="favorite.id" v-for="favorite in favoriteCandidates" :candidate="favorite" />
    </section>

    <section class="candidates__available">
      <h2>Candidates</h2>
      <Card
        :key="candidate.id"
        v-for="candidate in candidates"
        :candidate="candidate"
        v-on:favorite-candidate="favoriteCandidate"
      />
    </section>
  </section>
</template>

<script>
import Card from '../organisms/Card'
import CandidateService from '../../services/candidates'

export default {
  data: function() {
    return {
      candidates: [],
      favoriteCandidates: []
    }
  },
  name: 'Candidates',
  components: {
    Card
  },
  methods: {
    getCandidates: async function() {
      const candidateService = new CandidateService()

      const { data: candidates } = await candidateService.get()

      candidates.sort((current, next) => {
        var currentName = current.name
        var nextName = next.name

        if (currentName < nextName) return -1

        if (currentName > nextName) return 1

        return 0
      })

      this.favoriteCandidates = candidates.filter(
        candidate => candidate.favorite
      )
      this.candidates = candidates.filter(candidate => !candidate.favorite)
    },

    favoriteCandidate: async function(candidate) {
      const candidateService = new CandidateService()

      const favoriteCandidate = { ...candidate, favorite: true }

      await candidateService.update(favoriteCandidate)

      this.getCandidates()
    }
  },
  mounted: function() {
    this.getCandidates()
  }
}
</script>

<style scoped>
.candidates {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
