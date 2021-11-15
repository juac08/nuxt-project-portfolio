<template>
  <div class="root">
    <h1>Our Team</h1>
    <div class="line"></div>
    <div class="team-container">
      <TeamCard v-for="team in teams" :key="team.id" :team="team" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TeamCard from "./components/teamCard.vue";
import { TeamData } from "~/data/TeamData";
import { Team } from "~/types/data.types";

@Component({
  components: {
    TeamCard
  }
})
export default class team extends Vue {
  /* Props */
  /* State */
  /* Data */
  teams: Team[] = TeamData;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style lang="scss" scoped>
.root {
  background-image: linear-gradient(135deg, #4554a1 0%, #3e4787 100%);
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 8px;
  max-width: 1252px;
  min-height: 724px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 30px;
  position: relative;
  &::before {
    content: "";
    background-image: url("https://as2.ftcdn.net/v2/jpg/04/29/95/13/1000_F_429951345_FtYDpxd4DvehEGKZusK1kuZm264qS5UX.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
  }
  h1 {
    color: white;
    padding: 20px;
  }
  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 30px;
  }
  .line {
    background: #fafcff;
    border-radius: 1px;
    width: 133px;
    height: 8px;
    margin-top: -15px;
  }
}
</style>
