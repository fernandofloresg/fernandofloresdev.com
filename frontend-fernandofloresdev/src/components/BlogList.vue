<script>
import axios from 'axios'

export default {
	data() {
		return {
			blog_list: [],
		}
	},
	mounted() {
		var res;
		axios
			.get('http://127.0.0.1:8000/blogs/')
			.then((response) => {
				console.log(response)
				this.blog_list = response.data
			})
	},
}
</script>

<template>
  <div class="greetings" v-for="blog in blog_list">
    <h1 class="green">{{ blog.title }}</h1>
    <h3>
			{{ blog.content }}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
