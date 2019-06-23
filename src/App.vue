<template>
  <div>
    <comp-header></comp-header>
    <div>
      <comp-featured />
      <comp-menu />
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header';
import compFooter from './components/Header-footer/Footer';
import compFeatured from './components/Featured/index';
import compMenu from './components/Menu/index';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu
  }
}
</script>

<style>
@import "./assets/style.css";
</style>
