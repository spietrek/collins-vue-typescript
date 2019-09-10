<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeDetails msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HomeDetails } from '@/components'; // @ is an alias to /src

@Component({
  components: {
    HomeDetails,
  },
})
export default class Home extends Vue {}
</script>
