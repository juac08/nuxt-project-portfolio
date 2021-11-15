<template>
  <div class="card">
    <div class="imgbox">
      <img :src="team.avatar" />
    </div>
    <div class="content">
      <h3>{{ team.first_name + " " + team.last_name }}</h3>
      <p style="display:block;margin-top:-5px">
        {{ team.position }}
      </p>
      <p style="display:block; margin-top:-2px;font-size:8px" class="email">
        {{ team.first_name + "_" + team.last_name + team.email }}
      </p>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          placeat distinctio tenetur.
        </p>
        <el-button type="primary" icon="">
          <i class="fab fa-linkedin fa-2x" style="color:#E6A23C"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Team } from "~/types/data.types";

@Component
export default class teamCard extends Vue {
  /* Props */
  @Prop() team!: Team;
  /* State */
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style lang="scss" scoped>
body {
  p {
    color: whitesmoke;
    font-size: 10px;
    letter-spacing: 0.5px;
  }
}
.el-button {
  border: none;
  background: #4a5391;
  text-align: center;
}
.card {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.content {
  position: absolute;
  bottom: 0px;
  width: 80%;
  height: 30px;
  left: 10%;
  text-align: center;
  transition: 0.5s;
  overflow: hidden;
  background: #606ba7;
  padding-bottom: 10px;
}
span {
  color: white;
}
h3 {
  font-size: 16px;
  margin: 5px;
  border-radius: 10px;
  color: white;
  text-transform: capitalize;
  padding: 5px;
  background: #606ba7;
}

p {
  width: 80%;
  margin: 10px auto;
  font-size: 14px;
  transition: 0.5s;
  opacity: 0;
  text-align: center;
  color: white;
}

.card:hover .content {
  height: 100%;
  width: 100%;
  left: 0%;
  border: 2px solid #606ba7;
  opacity: 0.8;
  border-radius: 5px;
  /* border: 2px solid #e6a23c; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .email {
    color: #e6a23c;
    font-weight: 500;
  }
}

.card:hover p {
  opacity: 1;
  transition-delay: 0.5s;
}

.imgbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  border: 7px solid white;
  border-radius: 50%;
}

.card:hover img {
  opacity: 0.3;
}
</style>
