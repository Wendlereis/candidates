<template>
  <section class="card">
    <aside class="card__image">
      <img class="card__image-item" :src="candidate.imageUrl" alt="candidate's profile photo">
    </aside>
    <main class="card__details">
      <CardHeader class="card__details-header" :candidate="candidate" />
      <CardContent class="card__details-content" :candidate="candidate" />
    </main>
  </section>
</template>

<script>
import CardHeader from '../molecules/CardHeader'
import CardContent from '../molecules/CardContent'

export default {
  name: 'Card',
  props: {
    candidate: Object
  },
  components: {
    CardHeader,
    CardContent
  }
}
</script>

<style>
.card {
  display: flex;
  padding: 24px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;
  max-width: 620px;
  margin-bottom: 12px;
}

.card__image {
  width: 100px;
  height: 100px;
}

.card__image-item {
  width: inherit;
  height: inherit;
  object-fit: cover;
}

.card__details {
  width: 100%;
  margin-left: 24px;
}

.card__details-header + .card__details-content {
  margin-top: 16px;
}
</style>
