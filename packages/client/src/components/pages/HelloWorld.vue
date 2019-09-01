<template>
  <ul>
    <li :key="candidate.id" v-for="candidate in candidates">
      {{ candidate.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      candidates: []
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
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
          this.candidates = json
        })
    }
  },
  mounted: function() {
    this.get()
  }
}
</script>

<style scoped></style>
