<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div>
		<nav class="sidebar">
			<RouterLink to="/aboutme">About Me</RouterLink>
			<RouterLink to="/blogs">Blogs</RouterLink>
		</nav>
	</div>

  <RouterView />
</template>

<style scoped>
.sidebar {
  background-color: #e7d2cc;
  height: 100%;
  width: 150px;
  max-width: 1024px;
  opacity: 0.5;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
	color: #868b8e;
  overflow-x: hidden;
  box-sizing: border-box;
}

</style>
