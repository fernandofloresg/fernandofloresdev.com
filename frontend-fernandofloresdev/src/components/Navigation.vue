<script>
import { RouterLink, RouterView } from 'vue-router'
import Menu from 'primevue/menu'


export default {
	data() {
		return {
			items: [
				{ label: 'About me',
					icon: 'pi pi-fw pi-user',
					url: '/aboutme',
				},
				{	label: 'Blogs',
					icon: 'pi pi-file',
					url: '/blogs',
				}
			],
		}
	},
	components: {
		Menu,
	},
}


</script>

<template>
	<div class="menu-bar">
		<Menu :model="items" />
	</div>
</template>

<style>

.menu-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    overflow-x: hidden;
    padding-top: 20px;
}

.menu-bar ul {
    list-style-type: none;
    padding: 0;
}

.menu-bar ul li {
    padding: 8px;
    text-align: center;
}

.menu-bar ul li a {
    display: block;
    padding: 10px;
}

/* Content styling */
.content {
    margin-left: 210px; /* Space for the fixed menu */
    padding: 20px;
}
</style>
