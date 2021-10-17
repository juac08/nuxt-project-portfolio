<template>
  <section class="container-2">
    <Hero />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Hero from "~/components/Hero/index.vue";
import axios from "axios";
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
    console.log(currentToken);
    const data = JSON.stringify({
      notification: {
        title: "Futureworks",
        body: "Welcome to Futureworks",
        click_action: "FutureWorks",
        icon:
          "https://resources-live.sketch.cloud/files/aea485a0-06c5-4fc8-947d-a4efd1b5bcf6.png?Expires=1634680800&Signature=VvPYVA8ToNHDpZEef559MRtFmcagoXdumt5Q5BaL8VJWaFIE11aRQrdslSsX~FsxqjYoR3ou4d1D7TSWj-~hwrvyEVkfe5XLzH3PLRwfiaIFBLny8QzPexdsPZpSqGXb5i9FquKzcygQYSVMbX2uBxBfCD0IoR3o-PLUMwsR92k_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
      },
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
