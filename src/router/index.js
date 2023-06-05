import { createWebHistory, createRouter } from "vue-router";
import CartList from '@/components/cart/CartList.vue';
import ProductList from "@/components/product/ProductList.vue";
import ProductItem from "@/components/product/ProductItem.vue";
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
      path: '/products/:id',
      component: ProductItem,
      props: true
  },
  {
      path: "/cart",
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