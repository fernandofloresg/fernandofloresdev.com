<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
	<div class="col-2 sidenav">
		<Navigation/>
	</div>
	<div class="col-8">
		<RouterView />
	</div>
</template>

<style scoped>

</style>
