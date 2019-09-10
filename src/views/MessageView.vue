<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MessageDetails />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MessageDetails from '@/components/MessageDetails.vue';

@Component({
  components: {
    MessageDetails,
  },
})
export default class MessageView extends Vue {}
</script>
