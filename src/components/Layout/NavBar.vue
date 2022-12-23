<template>
  <nav
      class="navbar is-success"
      role="navigation"
      aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">

      <div class="navbar-brand">
        <a class="navbar-item"
           href="#"
        >
          NOTE
        </a>

        <a 
            @click="showMobileNav = !showMobileNav"
            role="button"
            class="navbar-burger"
            :class="{'is-active' : showMobileNav}"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
          id="navbarBasicExample"
          class="navbar-menu"
          :class="{'is-active' : showMobileNav}"
      >
        <div class="navbar-end">
          <RouterLink
              @click="showMobileNav = false"
              class="navbar-item"
              active-class="is-active"
              to="/"
          >
            Notes
          </RouterLink>
          <RouterLink
              @click="showMobileNav = false"
              class="navbar-item"
              active-class="is-active"
              to="/stats"
          >
            Stat
          </RouterLink>
        </div>
      </div>

    </div>

  </nav>

</template>

<script setup>
  import {ref} from "vue";
  const showMobileNav = ref(false);
</script>


<style scoped>
@import 'bulma/css/bulma.min.css';
  @media (max-width: 1023px) {
    .navbar-menu {
      position: absolute;
      left: 0;
      width: 100%;
    }
  }


</style>