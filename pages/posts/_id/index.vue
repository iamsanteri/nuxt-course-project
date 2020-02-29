<template>
    <div class="single-post-page">
        <section class="post">
            <h1>{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last update on {{ loadedPost.updatedDate }}</div>
                <div class="post-detail">Written by {{ loadedPost.author }}</div>
            </div>
            <p class="post-content">{{ loadedPost.content }}</p>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@myawesomedomain.com">feedback@myawesomedomain.com</a></p>
        </section>
    </div>
</template>

<script>
import axios from "axios"

export default {
  // Just like fetch, only available on page components in Nuxt. Loaded once on the server side and after that in the client.
  // Should be either a Promise or a Callback. 
  // It's powerful for getting page specific data. 
  // Fetch unlike asyncData does not set the data, for example instead loading it into the store. 
  // Use NuxtServerInit action in the Vuex store if you want to initialize the store with some bigger chunk of data instead of constant re-fetching
  asyncData(context) {
    return axios.get("https://nuxt-course-project-14241.firebaseio.com/posts/" + context.params.id + ".json")
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>
    
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>