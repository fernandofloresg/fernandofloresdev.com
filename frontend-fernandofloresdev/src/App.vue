<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
	<div class="nav">
		<Navigation/>
	</div>
	<div class="router">
		<RouterView />
	</div>
</template>

<style scoped>

.nav {
  width: 20vw;
}

.router {
  width: 80vw;
}

</style>
