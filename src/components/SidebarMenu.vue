<template>
  <ul class="sidebar-menu">
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </router-link>
    </li>
    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/settings">
        <i class="fa fa-cog"></i>
        <span class="page">Настройки</span>
      </router-link>
    </li>

    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/services"><i class="fa fa-table"></i>
        <span class="page">Услуги</span>
      </router-link>
    </li>

    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/appointments"><i class="fa fa-table"></i>
        <span class="page">Заявки</span>
      </router-link>
    </li>

    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/logout">
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Logout</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')

      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
