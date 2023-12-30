<template>
  <section class="space">
  <div class="inlineFlex">
    <h1>Équipes</h1>
    <button>
      <RouterLink :to="{ name: 'ajout'}">Ajouter une équipe</RouterLink>
    </button>
  </div>
  <hr />
  <div class="cards">
  <div class="card" v-for="equipe in equipes" :key="equipe.idEquipe">
    <img :src="equipe.logo" :alt="'Logo de l\'équipe ' + equipe.nom" />
    <h2>
      <RouterLink :to="{ name: 'equipe', params: { id: equipe.idEquipe } }">{{
        equipe.nom
      }}</RouterLink>
    </h2>
  </div>
</div>

</section>
</template>


<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  padding:5rem;
  background-color: rgb(255, 255, 255);
}
.space{
  padding:10rem;
}

.card {

display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
max-width: 30%;

padding: 3rem;
margin: 1rem;
background-color: rgb(177, 149, 203);
border-radius: 20px;
}

.card img {
width:100%;
height:100%;
max-width: 300px;
max-height: 400px;
object-fit: cover;
border-radius:20px;
}

.card a{
  text-decoration: none;
  color:white;
}

.card a:hover{
  color:purple;
}

.card h2{
  padding-top:1rem;
}

.inlineFlex{
  display:inline-flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:1rem;
}

hr{
  margin-bottom: 3rem;
}


.inlineFlex button{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:bold;
  border-radius: 100px;
  margin-left:3rem;
  padding:1rem;
  background-color:black;
  border:none;
}
.inlineFlex button a{
  color:white;
  padding:1rem;
  text-decoration:none;
}

.inlineFlex button:hover, .inlineFlex button a:hover{
  background-color:rgb(255, 255, 255);
  color:black;
  border: 1px;
}


</style>



<script>
export default {
  inject:['equipes']
}
</script>
