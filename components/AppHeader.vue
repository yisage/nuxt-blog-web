<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li v-for="(item, index) in navList" :key="index" :class="{ active: index === activeIndex }">
            <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

const activeIndex = computed(()=>{
  const path = route.path
  return navList.value.findIndex(item=>item.path===path)
});

const navList = ref([
  {
    label: '主页',
    path: '/'
  }, {
    label: '文章',
    path: '/blog'
  },
  {
    label: '项目',
    path: '/project'
  },
  {
    label: '关于',
    path: '/about'
  }
])

</script>

<style lang="scss" scoped>
header {
  background-color: #fcee09;
  padding: 20px 0px 30px 0px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: stretch;
  min-height: 3.25rem;
}

header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  background: url(~/assets/image/header-bg.svg) repeat-x top;
  height: 40px;
}

.container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  margin: 0 auto;

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      margin: 1.25rem 0.25rem;
      color: #000;
      cursor: pointer;
    }

    li.active {
      color: #fcee09;
      background-color: #000 !important;
    }
  }
}
</style>