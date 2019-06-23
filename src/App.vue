<template>
  <div>
    <comp-header></comp-header>
    <div>
      <comp-featured />
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header';
import compFooter from './components/Header-footer/Footer';
import compFeatured from './components/Featured/index';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured
  }
}
</script>

<style>
@import "./assets/style.css";
</style>
