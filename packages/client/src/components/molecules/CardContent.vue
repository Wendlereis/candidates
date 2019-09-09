<template>
  <ul class="card-list">
    <li class="card-list__item">
      <img
        class="card-list__image"
        src="../../assets/work-icn.svg"
        :alt="`icon of work information`"
      />
      <Label class="card-list__description" :text="works" body />
    </li>

    <li class="card-list__item">
      <img
        class="card-list__image"
        src="../../assets/study-icn.svg"
        :alt="`icon of work information`"
      />
      <Label class="card-list__description" :text="candidate.university" body />
    </li>

    <li class="card-list__item">
      <img
        class="card-list__image"
        src="../../assets/location-icn.svg"
        :alt="`icon of work information`"
      />
      <Label class="card-list__description" :text="cities" body />
    </li>

    <li class="card-list__item">
      <img
        class="card-list__image"
        src="../../assets/skills-icn.svg"
        :alt="`icon of work information`"
      />

      <span class="card-list_skills">
        <Label class="card-list__description" text="Principais Habilidades:" body />
        <Badge class="card-list__skill" :key='index' v-for="(skill, index) in candidate.mainSkills" :text="skill" />
      </span>
    </li>
  </ul>
</template>

<script>
import Label from '../atoms/Label'
import Badge from '../molecules/Badge'

export default {
  name: 'CardContent',
  data: function() {
    return {
      works: '',
      cities: ''
    }
  },
  props: {
    candidate: Object
  },
  components: {
    Label,
    Badge
  },
  methods: {
    handleWorks: function(works) {
      const [firstCompany, secondCompany, ...rest] = works

      if (rest.length) {
        this.works = `${firstCompany}, ${secondCompany} e ${rest.length} outras empresas`
      } else if (secondCompany) {
        this.works = `${firstCompany} e ${secondCompany}`
      } else {
        this.works = `${firstCompany}`
      }
    },
    handleCities: function(cities) {
      const [firstCity, secondCity, ...rest] = cities

      this.cities = 'Disposto a trabalhar em: '

      if (rest.length) {
        this.cities += `${firstCity}, ${secondCity} e ${rest.length} outras empresas`
      } else if (secondCity) {
        this.cities += `${firstCity} e ${secondCity}`
      } else {
        this.cities += `${firstCity}`
      }
    }
  },
  mounted: function() {
    this.handleWorks(this.candidate.lastCompanies)
    this.handleCities(this.candidate.cities)
  }
}
</script>

<style scoped>
.card-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.card-list__item {
  display: flex;
  align-items: center;
}

.card-list__item + .card-list__item {
  margin-top: 4px;
}

.card-list__image {
  width: 16px;
  height: 16px;
}

.card-list__image + .card-list__description,
.card-list__image + .card-list_skills {
  margin-left: 8px;
}

.card-list_skills {
  display: flex;
}

.card-list__skill {
  margin-left: 8px;
}
</style>
