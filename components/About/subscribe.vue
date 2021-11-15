<template>
  <div class="root">
    <div class="content">
      <h1>Get the latest from Furtureworks</h1>
      <p>
        Share your email so futureworks can send you guidess and news
      </p>
    </div>
    <div class="input">
      <input type="text" placeholder="use_name@example.com" />
      <div class="line"></div>
      <el-button type="primary" plain class="heading">Subscribe</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class subscribe extends Vue {
  /* Props */
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
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 14px;
    color: white;
  }
}
.root {
  max-width: 1250px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  margin-top: 50px;

  .content {
    padding: 20px;
    color: white;
  }
  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    background: white;
    position: relative;
    margin-right: 10px;

    .el-button {
      color: #404987;
      position: absolute;
      right: 0;
      margin-right: 5px;
    }
  }
  input {
    padding: 15px 30px;
    max-width: 500px;
    width: 450px;
    border: none;
    transition: all 0.3s linear;
    border-radius: 20px;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
      color: #c0c4cc;
    }
    &:focus {
      outline: none;
      width: 460px;
    }
  }
  @media screen and (max-width: 550px) {
    .heading {
      font-size: 24px;
    }
    input {
      width: 400px;
    }
  }
  @media screen and (max-width: 466px) {
    .heading {
      font-size: 14px;
    }
    input {
      width: 300px;
    }
  }
}
</style>
