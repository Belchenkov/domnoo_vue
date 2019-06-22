<template>
  <div>
    <comp-header></comp-header>
    <div>
      content
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import compHeader from './components/Header-footer/Header';
import compFooter from './components/Header-footer/Footer';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style>
@import "./assets/style.css";
</style>
