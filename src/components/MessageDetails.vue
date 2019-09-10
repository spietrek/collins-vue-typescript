<template>
  <div class="about">
    <h1>{{ computedMessage }} Page</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MessageView extends Vue {
  get computedMessage(): string {
    return this.$store.getters.message;
  }

  public changeMessage(): void {
    this.$store.commit('updateMessage', 'Hello from Lauras');
  }
}
</script>
