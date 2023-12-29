<template>
  <div>
    <h1>Équipes</h1>
    <!--Possiblement ajouter un comp. de Hero de début page-->
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
  inject: {
    equipes: {
      type: Array,
      required: true,
      default: () => [
        { idEquipe: Number, required: true, default: 0 },
        { nom: String, required: true, default: '' },
        { logo: String, required: true, default: '' },
        {
          joueurs: Array,
          required: true,
          default: () => [{ nomJoueur: String, required: true, default: '' }]
        }
      ]
    }
  }
}
</script>
