<template>
  <section class="container-2">
    <Hero />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Hero from "~/components/Hero/index.vue";
@Component({
  head: {
    title: "Portfolio | Home"
  },
  components: {
    Hero
  }
})
export default class index extends Vue {
  /* Props */
  /* State */
  async created() {
    const currentToken = await this.$fire.messaging.getToken();
    const data = JSON.stringify({
      to: currentToken
    });
    const config = {
      method: "post",
      url: "https://fcm.googleapis.com/fcm/send",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAA7MmYUsc:APA91bFoA0q5oxaWxmXbcw6Nz8dbPi24UD2ZzLNNqoQy4I6lEMLKB54Ttk5WQFn_YJk7gSw-X2yn6lJYz8g-SDsg3Gp14f2Rj-b0u_qUglFM3oih-6zBrBfIspsNqsSTjrrGed4vGCOh"
      },
      data
    };
    // @ts-expect-error
    const response = await this.$axios(config);
    this.$fire.messaging.onMessage(payload => {
      console.info("Message received: ", payload);
    });
    this.$fire.messaging.onTokenRefresh(async () => {
      const refreshToken = await this.$fire.messaging.getToken();
      console.log("Token Refreshed", refreshToken);
    });
  }
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>
