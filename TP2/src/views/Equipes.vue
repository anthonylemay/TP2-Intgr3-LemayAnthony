<template>
  <div>
    <h1>Équipes</h1>
    <button>
      <RouterLink :to="{ name: 'ajout'}">Ajouter une équipe</RouterLink>
    </button>
  </div>
  <hr />
  <div v-for="equipe in equipes" :key="equipe.idEquipe">
    <img :src="equipe.logo" :alt="'Logo de l\'équipe ' + equipe.nom" />
    <h2>
      <RouterLink :to="{ name: 'equipe', params: { id: equipe.idEquipe } }">{{
        equipe.nom
      }}</RouterLink>
    </h2>
  </div>
</template>

<script>
export default {
  inject:['equipes']
}
</script>
