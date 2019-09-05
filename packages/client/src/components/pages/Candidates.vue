<template>
  <section class="candidates">
    <section class="candidates__favorites">
      <h2>Favorites</h2>
      <Card
        :key="candidate.id"
        v-for="candidate in candidates"
        :candidate="candidate"
      />
    </section>

    <section class="candidates__available">
      <h2>Candidates</h2>
      <Card
        :key="candidate.id"
        v-for="candidate in candidates"
        :candidate="candidate"
      />
    </section>
  </section>
</template>

<script>
import Card from '../organisms/Card'

export default {
  data: function() {
    return {
      candidates: []
    }
  },
  name: 'Candidates',
  props: {
    msg: String
  },
  components: {
    Card
  },
  methods: {
    get: function() {
      fetch('http://localhost:3000/candidates', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(response => response.json())
        .then(json => {
          json.sort((current, next) => {
            var currentName = current.name
            var nextName = next.name

            if (currentName < nextName) return -1

            if (currentName > nextName) return 1

            return 0
          })

          this.candidates = json
        })
    }
  },
  mounted: function() {
    this.get()
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
