import { createApp } from 'vue'
import App from './App.vue'
import "./assets/reset.css";

// 全局引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入Element Plus样式

// 全局引入ECharts
import * as echarts from 'echarts'
import VueECharts from 'vue-echarts'

createApp(App).mount('#app')

// 全局注册ECharts组件
App.component('v-chart', VueECharts)

// 将ECharts挂载到Vue原型上，以便在组件中通过this.$echarts访问
App.config.globalProperties.$echarts = echarts

// 使用Element Plus
App.use(ElementPlus)
App.mount('#app')