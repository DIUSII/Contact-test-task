<template>
    <div class="sign-in">
        <h1 class="sign-in__title">Вход</h1>
        <form action="" class="sign-in__form">
            <input type="text" class="sign-in__login sign-in__input" v-model="login">
            <input type="password" class="sign-in__password sign-in__input" v-model="password">
            <span v-show="conclusionErrorNull" class="sign-in__error">Поля не могут быть пустыми</span>
            <span v-show="conclusionErrorWarning" class="sign-in__error">Не правильный пароль или логин</span>
            <button class="sign-in__button" @click="clickButton" type="button">Вход</button>
        </form>
    </div>
</template>
<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
            login: '',
            password: '',
        }
    },
    computed: mapGetters(['conclusionErrorNull', 'conclusionErrorWarning']),
    methods:{
        ...mapMutations(['GET_LOGIN_AND_PASSWORD']),
        ...mapActions(['GET_USER']),
        async clickButton(){
            let inputValue = {
                login: this.login,
                password: this.password
            }
            await this.GET_USER();
            this.GET_LOGIN_AND_PASSWORD(inputValue);
        }
    },
}
</script>
<style lang="scss">
    .sign-in{
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        max-width: 200px;
        margin: 0 auto;
        color: rgb(73, 71, 71);
        &__title{
            font-size: 30px;
        }
        &__form{ 
            text-align: center;
        }
        &__input{
            margin: 0 0 20px;
            display: block;
            max-width: 188px;
            width: 100%;
            border: 1px solid rgb(143, 125, 245);
            padding: 5px 0 5px 10px;
            border-radius: 5px;
            outline: none;
            color: rgb(73, 71, 71);

        }
        &__button {
            border: 1px solid rgb(143, 125, 245);
            background-color: #FFF;
            padding: 5px 20px;
            outline: none;
            color: rgb(73, 71, 71);
            border-radius: 5px;
        }
        &__error{
            display: block;
            margin-bottom: 20px;
            font-size: 12px;
            color: red;
        }
    }

</style>