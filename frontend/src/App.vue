<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <main class="container mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
</style>
