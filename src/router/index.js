import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue'; // hoặc nơi bạn lưu trang landing

const routes = [
  {
    path: '/LandingPage/index',
    name: 'Landing',
    component: LandingPage,
  },
  // thêm các route khác nếu có
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
