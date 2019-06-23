<template>
    <div class="container menu_container">
        <div class="top">
            <h2>Menu</h2>
        </div>
        <div class="buttons">
            <md-button
                v-for="(button, index) in buttons"
                :key="index"
                :class="button.active && 'md-raised'"
                @click="changeMenu(button.name)"
            >
                {{ button.name }}
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                buttons: [
                    { name: 'pizza', active: true},
                    { name: 'burgers', active: false},
                    { name: 'salad', active: false},
                    { name: 'dessert', active: false},
                ]
            }
        },
        methods: {
            changeMenu(value) {
                this.buttons.forEach(item => item.name == value ? item.active = true : item.active = false);
            }
        }
    }
</script>

<style scoped>

</style>