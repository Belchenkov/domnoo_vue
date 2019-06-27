<template>
    <div class="container newsl_container">
        <h2>Join to our newsletter</h2>
        <div class="form">
            <input type="text" v-model="email" />
            <button @click="submitHandler">Subscribe</button>
        </div>
        <div class="error_label">
            <div>{{ error }}</div>
        </div>
        <div class="success_label">
            <div>{{ success }}</div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore eveniet libero maiores minima, odio quae quo recusandae repudiandae tenetur unde.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                email: '',
                error: '',
                success: ''
            }
        },
        methods: {
            validate(email) {
                let valid = [true, ''];

                if (!/\S+@\S+\.\S+/.test(email)) {
                    valid = [false, 'Enter a valid email!'];
                }

                if (email === '') {
                    valid = [false, 'Its empty!']
                }

                return valid;
            },
            submitHandler() {
                let valid = this.validate(this.email);

                if (valid[0]) {
                    this.error = '';
                    this.addEmail(this.email);
                } else {
                    this.error = valid[1];
                }
            },
            addEmail(email) {

            }
        }
    }
</script>

<style scoped>

</style>