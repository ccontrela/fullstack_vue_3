import { createWebHistory, createRouter } from "vue-router";
import CartList from '@/components/cart/CartList.vue';
import ProductList from "@/components/product/ProductList.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
      path: "/",            
      redirect: "/products"
  },
  {
      path: "/products",
      name: "ProductList",
      component: ProductList
  },
  {
      path: "/cart",
      name: "CartList",
      component: CartList
  },        
  {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;