<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
});
</script>

<template>
  <div id="app">
    <p>
      <router-link to="/sample">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
