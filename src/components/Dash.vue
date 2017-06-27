<template>
  <div :class="['wrapper', classes]">
    <header class="main-header">
    	<span class="logo-mini">
    		<a href="/"><img src="/static/img/logo.png" alt="Logo" class="img-responsive logo"></a>
    	</span>
      <nav class="navbar navbar-static-top" role="navigation">
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
      </nav>
    </header>
    <sidebar/>

    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="/">
              <i class="fa fa-home"></i>Главная</a>
          </li>
          <li class="active">{{$route.name.toUpperCase()}}</li>
        </ol>
      </section>

      <h1 class="text-center">{{$route.meta.description}}</h1>
      <router-view></router-view>

    </div>

    <footer class="main-footer">
      <strong>Copyright &copy; {{year}}
        <a href="http://greenbrown.ru">greenbrown</a></strong>
    </footer>
  </div>
</template>

<script>
import config from '../config'
import Sidebar from './Sidebar'
// import 'hideseek'

export default {
  name: 'Dash',
  components: {
    Sidebar
  },
  data: function () {
    return {
      // section: 'Dash',
      year: new Date().getFullYear(),
      classes: {
        fixed_layout: config.fixedLayout,
        hide_logo: config.hideLogoOnMobile
      },
      error: ''
    }
  },
  methods: {
    changeloading () {
      this.$store.commit('TOGGLE_SEARCHING')
    }
  }
}
</script>

<style lang="scss">
.wrapper.fixed_layout {
  .main-header {
    position: fixed;
    width: 100%;
  }

  .content-wrapper {
    padding-top: 50px;
  }

  .main-sidebar {
    position: fixed;
    height: 100vh;
  }
}

.wrapper.hide_logo {
  @media (max-width: 767px) {
    .main-header .logo {
      display: none;
    }
  }
}

.logo-mini,
.logo-lg {
  text-align: left;

  img {
    padding: .4em !important;
  }
}

.logo-lg {
  img {
    display: -webkit-inline-box;
    width: 25%;
  }
}

.user-panel {
  height: 4em;
}

hr.visible-xs-block {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.17);
  height: 1px;
  border-color: transparent;
}
</style>
