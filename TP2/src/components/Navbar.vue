<template>

    <nav class="module">
      <router-link :to="{name: 'accueil'}">eSports</router-link>
      <ul>
        <li><router-link :to="{name: 'accueil'}">Accueil</router-link></li>
        <li><router-link :to="{name: 'equipes'}">Équipes</router-link></li>
      </ul>
    </nav>

</template>

<style scoped>
.module{
  border: 5px solid black;
}

nav a{
    text-decoration:none;
    color: black;
    font-size: 2rem;
}

nav a:hover{
    text-decoration:underline;
    opacity: 0.5;
}

</style>