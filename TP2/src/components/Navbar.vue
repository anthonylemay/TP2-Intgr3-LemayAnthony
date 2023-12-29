<template>

    <nav>
        
      <router-link :to="{name: 'accueil'}" class="logo">eSports</router-link>
      <ul class="navLink">
        <li><router-link :to="{name: 'accueil'}">Accueil</router-link></li>
        <li><router-link :to="{name: 'equipes'}">Équipes</router-link></li>
      </ul>
    </nav>

</template>

<style scoped>
nav {
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;
  background-color: rgb(181, 181, 181);
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


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

.navLink{
    display:inline-flex;
}

.navLink a{
    padding: 1rem;
    margin:1rem;
}

.logo{
    font-size:3rem;
}

</style>