<template>
    <div class="body">
        <div class="warning" v-if="localType != 'signin'">Вы не авторизованы</div>
        <div class="main-page" v-else>
            <div class="flex-container">
                <ul class="main-page__items">
                    <!-- Отображение контактов -->
                   <li is="contacts" v-for="(item, index) in conclusionItems" :key="item.id" :index="index"></li>
                </ul>
                <!-- Добавление контакта -->
                <form action="" class='main-page__form'>
                    <button class="main-page__button" @click="addItemInItems" type="button">Добавить контакт</button>
                </form>
            </div>
            <!-- Модальное окно добавление задачи -->
            <modal-add-item 
                v-show="conclusionWindow" 
            ></modal-add-item> 
        </div>
        <!-- Затемнение модального окна  -->
        <div 
            class="main-page__back-modal" 
            v-show="conclusionWindow" 
            @click="clickBackModal"
        ></div>
    </div>
</template>
<script >
    import modalWindowAddItem from './addItemModal/addItemModal'
    import contacts from './contacts/contacts'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: "contact",
        data(){
            return {
                name: '',
                phone: '',
                localType: localStorage.signin
            }
        },
        components: {
            'modal-add-item': modalWindowAddItem,
            contacts
        },
        computed: mapGetters(['conclusionWindow', 'conclusionItems']),
        methods: {
            ...mapMutations(['openWindow', 'closeWindow', 'PUSH_IN_ITEMS']),
            addItemInItems(){// Делает видимое модальное окно
                this.openWindow();
            },
            clickBackModal(){// Клик по замнению модального окна
                this.closeWindow();
            },

        }
    }
</script>
<style lang='scss'>
    .flex-container{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .main-page{ // внешний вид Контактов
        max-width: 600px;
        width: 100%;
        margin: 20px auto 0;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        &__items{
            list-style: none;
            margin:0;
            padding: 10px 10px 0;
            max-width: 400px;
            width: 100%;
            border: 1px solid rgb(143, 125, 245);
            margin-right: 15px;
            border-radius: 5px;
            min-height: 500px;
        }
        &__item{
            position: relative;
            border: 1px solid rgb(143, 125, 245);
            margin-bottom: 10px;
            padding: 5px 0 5px 15px;
            border-radius: 5px;
            color:rgb(73, 71, 71);
        }
        &__name-box{
            max-width: 240px;
            align-items: center;
        }
        &__name{
            word-wrap: break-word;
            width: 150px;
            height: 18px;
            display: inline-block;
            &_input{
                color:rgb(73, 71, 71);
                border: none;
                outline: none;
                font-size: 16px;
                padding: 0;
            }
        }
        &__phone{
            display: inline-block;
            margin: 0;
            margin-top: 10px;
            word-wrap: break-word;
            max-width: 130px;
            &_input{
                color:rgb(73, 71, 71);
                border: none;
                outline: none;
                font-size: 16px;
                padding: 0;
            }
        }
        &__error-phone{
            font-size: 12px;
            color: red;
            margin-left: 10px;
        }
        &__cross{
            position: absolute;
            background: url('./images/shapes-and-symbols.svg') no-repeat 50% 50%;
            background-size: 100%;
            width: 10px;
            height: 10px;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 20px;

        }
    }
    .main-page{ // Внешни  вид  Кнопки добавления
        &__button{
            width: 160px;
            border: 1px solid rgb(143, 125, 245);
            color: rgb(143, 125, 245);
            border-radius: 5px;
            background-color: #FFF;
            padding: 5px 0;
            outline: none;
        }
    }
    .main-page{ // Расположение модальных окон
        &__back-modal{
            z-index: 800;
            width: 100%;
            height: 100%;
            position:fixed;
            background-color: rgb(73, 71, 71);
            opacity: 0.5;
            top: 0;
            left: 0;
        }   

    }
</style>