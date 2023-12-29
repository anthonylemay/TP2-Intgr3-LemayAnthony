<template>
    <div>
    <h1>Équipes</h1> <!--Possiblement ajouter un comp. de Hero de début page-->
    <button><RouterLink :to="{name: 'ajout'}">Ajouter une équipe</RouterLink></button>
    </div>
    <div v-for="equipe in equipes" :key="equipe.idEquipe">
    <img :src="equipe.logo" :alt="'Logo de l\'équipe ' + equipe.nom">
    <h2><RouterLink :to="{name: 'equipe', params:{id:equipe.idEquipe}}">{{ equipe.nom }}</RouterLink></h2>
</div>

</template>

<script>
export default {
  inject: ['equipes', 'ajoutEquipe']
  // Use the injected properties as needed
}
</script>