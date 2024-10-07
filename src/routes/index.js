import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import FeedBack from "@/views/FeedBack.vue";
import HomePage from "@/views/HomePage.vue";
import NotFound from "@/components/bai4/NotFound.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";
import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

// B1 : Định nghĩa danh sách các route
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/list-products",
            name: "listProducts",
            component:()=> import(/* webpackChunkName: "listproduct"*/ "@/components/bai8/ListProducts.vue"),
            
        },
        {
            path: "/products-detail/:id",
            name: "productsDetail",
            component: import(/* webpackChunkName: "productdetail"*/ "@/components/bai8/ProductDetail.vue"),
            
        },
        {
            path: "/",
            name: "home",
            component: import(/* webpackChunkName: "home"*/ "@/views/HomePage.vue"),
            alias: ["/home", "/home-page", "/trang-chu"],
        },
        {
            path: "/contact",
            name: "contact",
            component: import(/* webpackChunkName: "contact"*/ "@/views/ContactPage.vue"),

        },
        {
            path: "/about",
            name: "about",
            component: import(/* webpackChunkName: "about"*/ "@/views/AboutPage.vue"),

        },
        {
            path: "/user/:id",
            name: "userPage",
            component: UserPage,
            redirect: (to) => `/profile/${to.params.id}`
        },
        {
            path: "/profile/:id",
            name: "profilePage",
            component: import(/* webpackChunkName: "profile"*/ "@/views/ProfilePage.vue"),
        },
        {
            path: "/list-product",
            name: "listProduct",
            component: import(/*webpackChunkName*: "listproduct"*/ "@/views/ListProduct.vue"),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: import(/* webpackChunkName: "notFound"*/ "@/components/bai4/NotFound.vue")
        },
        {
            path: "/admin",
            name: "adminIndex",
            component: import(/* webpackChunkName: "admin"*/ "@/views/AdminIndex.vue"),
            beforeEnter: (to, from, next) => {
                const isAuthentication = true;
                if (isAuthentication) {
                    // cho pheps chuyen vao trang admin
                    next();
                } else {
                    next('/')
                }
            },
            children: [
                {
                    path: "manager-user",
                    name: "managerUser",
                    component: import(/* webpackChunkName*/"@/views/ManagerUser.vue")
                },
                {
                    path: "manager-product",
                    name: "managerProduct",
                    component: import(/* webpackChunkName*/"@/views/ManagerProduct.vue")
                }
            ]
        },
        {
            path: "/home",
            name: "home",
            component: import(/* webpackChunkName: "home"*/"@/components/bai1+2/Home.vue")
        },
        {
            path: "/about",
            name: "about",
            component: import(/*webpackChunkName: "about"*/ "@/components/bai1+2/About.vue")
        },
        {
            path: "/contact",
            name: "contact",
            component: import(/* webpackChunkName: "contact"*/ "@/components/bai1+2/Contact.vue")
        },
        {
            path: "/search",
            name: "search",
            component: import(/* webpackChunkName: "input"*/ "@/components/bai3/Search.vue")
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: import(/*webpackChunkName: "dashboard"*/ "@/components/bai5/Dashboard.vue"),
            beforeEnter: (to, from, next) => {
                const isAuthentication = false;
                if (isAuthentication) {
                    // cho pheps chuyen vao trang admin
                    next();
                } else {
                    next('/login')
                }
            },
        },
        {
            path: "/login",
            name: "Login",
            component: import(/*webpackChunkName: "login"*/ "@/components/bai5/Logon.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: import(/* webpackChunkName: "dashboard"*/ "@/components/bai6/DashBoard.vue"),
        },
        {
            path: "/admins",
            name: "Admins",
            component: import(/* webpackChunkName: "admin"*/ "@/components/bai6/Admin.vue"),
            children: [
                {
                    path: "manager-user",
                    name: "managerUser",
                    component: import(/* webpackChunkName: "managerUser"*/ "@/components/bai6/ManagerUser.vue")
                },
                {
                    path: "manager-product",
                    name: "managerProduct",
                    component: import(/* webpackChunkName: "managerProduct"*/ "@/components/bai6/ManagerProduct.vue")
                },
                {
                    path: "setting",
                    name: "Setting",
                    component: import(/* webpackChunkName: "setting"*/ "@/components/bai6/Setting.vue")
                },
            ]
        },
        {
            path: "/posts",
            name: "Posts",
            component: import(/* webpackChunkName: "posts"*/ "@/components/bai7/ListPost.vue"),
        },
        {
            path: "/posts/:id",
            name: "PostDetail",
            component: import(/* webpackChunkName: "postDetail"*/ "@/components/bai7/PostDetail.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: "Not-Found",
            component: import(/* webpackChunkName: "notFound"*/ "@/components/bai7/PostNotFound.vue")
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        // Nếu vị trí cuộn đã được lưu, trả về vị trí đó
        if (savedPosition) {
            return savedPosition;
        }

        // Nếu điều hướng tới trang không tồn tại
        if (to.name === 'PostNotFound') {
            return {
                top: 0,
                behavior: "smooth"
            };
        }
        // Nếu điều hướng tới PostDetail.vue, cuộn đến giữa trang
        if (to.name === 'PostDetail') {
            return {
                top: window.innerHeight / 2, // Cuộn đến vị trí giữa trang
                behavior: "smooth"
            };
        }

        // Mặc định cuộn lên đầu trang
        return {
            top: 0,
            behavior: "smooth"
        };
    }

})
export default router;

