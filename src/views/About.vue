<!--
 * @Author: Mia
 * @Date: 2021-10-14 14:47:13
 * @Description: 首页
-->
<template>
  <div class="about">
    <a-row :gutter="48">
      <a-col :span="6" ><div class="card-item"><a-statistic title="Active Users" :value="112893" style="margin-right: 50px" /></div></a-col>
      <a-col :span="6" ><div class="card-item"><a-statistic title="Active Users" :value="112893" style="margin-right: 50px" /></div></a-col>
      <a-col :span="6" ><div class="card-item"><a-statistic title="Active Users" :value="112893" style="margin-right: 50px" /></div></a-col>
      <a-col :span="6" ><div class="card-item"><a-statistic title="Active Users" :value="112893" style="margin-right: 50px" /></div></a-col>
    </a-row>
  </div>
</template>


<style lang="scss" scoped>
.card-item {
  height: 200px;
  background: #1da57a57;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>