<template >
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-row flex-nowrap">
      <div class="container">
        <router-link to="/" class ="navbar-brand float-left">MEVN STACK </router-link>
        <ul class="nav navbar-nav flex-row flex-nowrap float-right">
          <li class="nav-item pe-3">
            <router-link to="/" class="nav-link">Create</router-link>
          </li>
          <li class="nav-item pe-3">
            <router-link to="/view" class="nav-link">Vievv</router-link>
          </li>
        </ul> 
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style >
  
</style>