<template>
  <div class="main-wrapper">
    <section>
      <SearchBar />
      <router-view />
      <NavBar />
    </section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"
// import NavBar from "@/components/NavBar.vue"

export default {
  name: "HomeLayout",
  components: { SearchBar },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  // background-color: #f0e5de;
  background-image: url('../assets/classroom.png');
  background-size:100%;
  // opacity:0.5!important;
  section {
    // @apply w-full h-auto min-h-screen mx-auto shadow-2xl sm:w-full lg:w-2/5;
    @apply w-full h-full min-h-screen mx-auto;
  }
}
</style>