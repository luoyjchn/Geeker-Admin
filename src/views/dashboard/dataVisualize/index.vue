<template>
  <div class="dataVisualize-box">
    <div class="card top-box">
      <div class="top-title">数据可视化</div>
      <el-tabs v-model="tabActive" class="demo-tabs">
        <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
      </el-tabs>
      <div class="top-content">
        <el-row :gutter="40">
          <el-col :lg="6" :md="12" :sm="12" :xl="6" :xs="24" class="mb40">
            <div class="item-left sle">
              <span class="left-title">访问总数</span>
              <div class="img-box">
                <img alt="" src="./images/book-sum.png" />
              </div>
              <span class="left-number">848.132w</span>
            </div>
          </el-col>
          <el-col :lg="8" :md="12" :sm="12" :xl="8" :xs="24" class="mb40">
            <div class="item-center">
              <div class="gitee-traffic traffic-box">
                <div class="traffic-img">
                  <img alt="" src="./images/add_person.png" />
                </div>
                <span class="item-value">2222</span>
                <span class="traffic-name sle">Gitee 访问量</span>
              </div>
              <div class="gitHub-traffic traffic-box">
                <div class="traffic-img">
                  <img alt="" src="./images/add_team.png" />
                </div>
                <span class="item-value">2222</span>
                <span class="traffic-name sle">GitHub 访问量</span>
              </div>
              <div class="today-traffic traffic-box">
                <div class="traffic-img">
                  <img alt="" src="./images/today.png" />
                </div>
                <span class="item-value">4567</span>
                <span class="traffic-name sle">今日访问量</span>
              </div>
              <div class="yesterday-traffic traffic-box">
                <div class="traffic-img">
                  <img alt="" src="./images/book_sum.png" />
                </div>
                <span class="item-value">1234</span>
                <span class="traffic-name sle">昨日访问量</span>
              </div>
            </div>
          </el-col>
          <el-col :lg="10" :md="24" :sm="24" :xl="10" :xs="24" class="mb40">
            <div class="item-right">
              <div class="echarts-title">Gitee / GitHub 访问量占比</div>
              <div class="book-echarts">
                <Pie ref="pieRef" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="card bottom-box">
      <div class="bottom-title">数据来源</div>
      <div class="bottom-tabs">
        <el-tabs v-model="tabActive" class="demo-tabs">
          <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="curve-echarts">
        <Curve ref="curveRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="dataVisualize" setup>
import { ref } from "vue";
import Pie from "./components/pie.vue";
import Curve from "./components/curve.vue";

const tabActive = ref(1);

const tab = [
  { label: "未来7日", name: 1 },
  { label: "近七日", name: 2 },
  { label: "近一月", name: 3 },
  { label: "近三月", name: 4 },
  { label: "近半年", name: 5 },
  { label: "近一年", name: 6 }
];
</script>

<style lang="scss" scoped>
@use "./index";
</style>
