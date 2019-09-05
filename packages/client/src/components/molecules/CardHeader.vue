<template>
  <header class="card-header">
    <section class="card-header__content">
      <span class="card-header__title">
        <Label class="card-header__label" :text="candidate.name" variant="title" />
        <Badge
          v-if="candidate.newThisWeek"
          class="card-header__badge"
          text="Novo essa semana"
          highlight
        />
      </span>

      <Label :text="candidate.career" variant="body" />
    </section>

    <section class="card-header__actions">
      <Button
        v-if="!candidate.favorite"
        class="card-header__button"
        :icon="require('../../assets/star.svg')"
        v-on:click="favoriteCandidate"
      />
      <DropdownButton class="card-header__dropdownbutton" :items="items" />
    </section>
  </header>
</template>

<script>
import Label from '../atoms/Label'
import Button from '../atoms/Button'
import Badge from '../molecules/Badge'
import DropdownButton from '../molecules/DropdownButton'

export default {
  name: 'CardHeader',
  data: function() {
    return {
      items: [
        {
          id: this.candidate.id,
          text: 'Remover',
          action: this.deleteCandidate
        }
      ]
    }
  },
  props: {
    candidate: Object
  },
  components: {
    Label,
    Button,
    Badge,
    DropdownButton
  },
  methods: {
    deleteCandidate: function(id) {
      this.$emit('delete-candidate', id)
    },

    favoriteCandidate: function() {
      this.$emit('favorite-candidate', this.candidate)
    }
  }
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}

.card-header__title,
.card-header__actions {
  display: flex;
  margin-bottom: 8px;
}

.card-header__button {
  width: 42px;
  height: 42px;
}

.card-header__button + .card-header__dropdownbutton {
  margin-left: 12px;
}

.card-header__label + .card-header__badge {
  margin-left: 16px;
}
</style>
