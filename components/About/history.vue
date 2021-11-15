<template>
  <div class="root">
    <div class="history">
      <h1>Brief History</h1>
      <p>
        Futureworks, is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries,.
      </p>
      <div class="line"></div>
    </div>
    <div
      style="width:2px;height:300px;background:lightgray;margin-left:50px"
      class="vertical-line"
    ></div>
    <div class="image">
      <img src="images/about-2.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9rem;
  margin-top: 50px;

  .image {
    max-width: 403px;
    min-height: 403px;
  }
  .history {
    max-width: 403px;
    text-align: left;
    h1 {
      color: #404987;
      /* font-size: 36px; */
      /* font-weight: medium; */
    }
    p {
      max-width: 352px;
      height: 248px;
      font-size: 14px;
      color: #373b3f;
      line-height: 24px;
    }
    .line {
      background: #5a65a2;
      border-radius: 1px;
      width: 133px;
      height: 8px;
      margin-top: -2px;
    }
    .vertical-line {
      width: 2px;
      height: 300px;
      background: lightgray;
      margin-left: 50px;
    }
  }
  @media screen and(max-width:1009px) {
    .vertical-line {
      display: none;
    }
  }
}
</style>
