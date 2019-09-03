<template>
  <header class="card-header">
    <section class="card-header__content">
      <span class="card-header__title">
        <Label class="card-header__label" text="Fabio Crejoinas" variant="title" />
        <Badge class="card-header__badge" text="Novo essa semana" highlight />
      </span>

      <Label text="Desenvolvedor Full Stack" variant="body" />
    </section>

    <section class="card-header__actions">
      <Button class="card-header__actions-item" :icon="require('../../assets/star.svg')" />
      <DropdownButton class="card-header__actions-item" :items="items" />
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
      items: [{
        text: 'Remover',
        action: this.removeItem
      }]
    }
  },
  components: {
    Label,
    Button,
    Badge,
    DropdownButton
  },
  methods: {
    removeItem: function() {
      console.log('this item will be removed');
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

.card-header__actions-item + .card-header__actions-item {
  margin-left: 12px;
}

.card-header__label + .card-header__badge {
  margin-left: 16px;
}
</style>
