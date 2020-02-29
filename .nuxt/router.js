import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _173a1ff3 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _7125b131 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _7e2b4673 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _4ab9e9f7 = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _53cfcc5a = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _47821d9f = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _69a6f89e = () => import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */).then(m => m.default || m)
const _c3e19d3c = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _173a1ff3,
			name: "index"
		},
		{
			path: "/about",
			component: _7125b131,
			name: "about"
		},
		{
			path: "/admin",
			component: _7e2b4673,
			name: "admin"
		},
		{
			path: "/posts",
			component: _4ab9e9f7,
			name: "posts"
		},
		{
			path: "/admin/auth",
			component: _53cfcc5a,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _47821d9f,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postId",
			component: _69a6f89e,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _c3e19d3c,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
