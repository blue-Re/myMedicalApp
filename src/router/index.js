import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由懒加载方式导入组件
const Home = () => import('../pages/Home/Home.vue')
const MedicineIdentify = () => import('../pages/Home/childComponents/MedicineIdentify.vue')
const Volunteer = () => import('../pages/Home/childComponents/Volunteer.vue')
const PublishActivity = () => import('../pages/Home/childComponents/PublishActivity.vue')
const ActivityDeatil = () => import('../pages/Home/childComponents/ActivityDeatil.vue')
const Vaccine = () => import('../pages/Home/childComponents/Vaccine.vue')
const Illness = () => import('../pages/Home/childComponents/Illness.vue')
const Essay = () => import('../pages/Home/childComponents/Essay.vue')

const Vedio = () => import('../pages/Vedio/Vedio.vue')
const Cherry = () => import('../pages/Vedio/childComponents/Cherry.vue')
const Milk = () => import('../pages/Vedio/childComponents/Milk.vue')
const Emergency = () => import('../pages/Vedio/childComponents/Emergency.vue')
const OftenIllness = () => import('../pages/Vedio/childComponents/OftenIllness.vue')

const Weapon = () => import('../pages/Weapon/Weapon.vue')

const Mine = () => import('../pages/Mine/Mine.vue')
const Feedback = () => import('../pages/Mine/childComponents/Feedback.vue')
const ManHealth = () => import('../pages/Mine/childComponents/ManHealth.vue')
const WomenHealth = () => import('../pages/Mine/childComponents/WomenHealth.vue')
const MySetting = () => import('../pages/Mine/childComponents/MySetting.vue')
const HealthAlert = () => import('../pages/Mine/childComponents/HealthAlert.vue')
const QuestionNaire = () => import('../pages/Mine/childComponents/QuestionNaire.vue')
const MyActivity = () => import('../pages/Mine/childComponents/MyActivity.vue')
const BuyMedicine = () => import('../pages/Mine/childComponents/BuyMedicine.vue')
const About = ()=>import('../pages/Mine/childComponents/About.vue')
const Contact = ()=>import('../pages/Mine/childComponents/Contact.vue')

const Login = () => import('../pages/Login/Login.vue')
const Register = () => import('../pages/Register/Register.vue')


// 1.注册路由
Vue.use(VueRouter)

// 2.配置路由
const router = new VueRouter({
  routes: [
    // 配置映射关系
    // 默认路径为主页
    {
      path: '/',
      redirect: '/home',
      component: Home,
      meta: { isShowTabBar: true }
    },
    {
      path: '/home',
      component: Home,
      meta: { isShowTabBar: true, requiresAuth: true },
      children: [
        {
          path: 'identify',
          name: 'identify',
          component: MedicineIdentify,
          meta: { requiresAuth: true }
        },
        {
          path: 'volunteer',
          component: Volunteer,
          meta: { requiresAuth: true }
        },
        {
          path: 'publish',
          component: PublishActivity,
          meta: { requiresAuth: true }
        },
        {
          path: 'activityDeatil/:i_id',
          component: ActivityDeatil,
          meta: { requiresAuth: true }
        },
        {
          path: 'vaccine',
          component: Vaccine,
          meta: { requiresAuth: true }
        },
        {
          path: 'illness',
          component: Illness,
          meta: { requiresAuth: true }
        },
        {
          path:'essay/:id',
          component:Essay,
          meta: { requiresAuth: true }
        }
      ]

    },
    {
      path: '/vedio',
      component: Vedio,
      meta: { isShowTabBar: true, requiresAuth: true },
      children: [
        {
          path: 'cherry',
          component: Cherry,
          meta: { requiresAuth: true }
        },
        {
          path: 'milk',
          component: Milk,
          meta: { requiresAuth: true }
        },
        {
          path: 'emergency/:id',
          component: Emergency,
          meta: { requiresAuth: true }
        },
        {
          path: 'oftenillness/:id',
          component: OftenIllness,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/weapon',
      component: Weapon,
      meta: { isShowTabBar: true, requiresAuth: true }
    },
    {
      path: '/mine',
      component: Mine,
      meta: { isShowTabBar: true, requiresAuth: true },
      children: [
        {
          path: 'feedback',
          name: 'feedback',
          component: Feedback,
          meta: { requiresAuth: true }
        },
        {
          path: 'manhealth',
          name: 'manhealth',
          component: ManHealth,
          meta: { requiresAuth: true }
        },
        {
          path: 'womenhealth',
          name: 'womenhealth',
          component: WomenHealth,
          meta: { requiresAuth: true }
        },
        {
          path: 'mysetting',
          component: MySetting,
          meta: { requiresAuth: true }
        },
        {
          path: 'healthAlert',
          component: HealthAlert,
          meta: { requiresAuth: true }
        },
        {
          path: 'questionnaire',
          component: QuestionNaire,
          meta: { requiresAuth: true }
        },
        {
          path:'myactivity',
          component:MyActivity,
          meta: { requiresAuth: true }
        },
        {
          path:'buymedicine',
          component:BuyMedicine,
          meta:{requiresAuth: true}
        },
        {
          path:'about',
          component:About,
          meta:{requiresAuth: true}
        },
        {
          path:'contact',
          component:Contact,
          meta:{requiresAuth: true}
        }
      ]
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

// 3.导出路由
export default router