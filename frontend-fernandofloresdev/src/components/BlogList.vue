<script>
import axios from 'axios'
import FieldSet from 'primevue/fieldset';

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
  components: {
    FieldSet
  }, 
}
</script>

<template>
  <div v-for="blog in blog_list">
    <div class="card">
      <FieldSet :legend="blog.title">
        <p> {{ blog.content }} </p>
      </FieldSet>
    </div>
  </div>
</template>

<style scoped>


</style>
