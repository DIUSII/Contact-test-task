<template>
    <li class="main-page__item" >
        <!-- Имя контакта -->
        <div class="main-page__name-box flex-container">    
            <span 
            class="main-page__name" 
            @click="editInputName"
            v-if='conclusionItems[index].editBoolionName == true'
            >{{conclusionItems[index].name}}</span>
            <!-- Инпут для изменения имени -->
            <input 
                v-focus 
                class="main-page__name main-page__name_input" 
                type="text" 
                maxlength="20" 
                @keyup.enter="closeEditName()" 
                v-model="conclusionItems[index].name" 
                @value="conclusionItems[index].name"
                @blur="closeEditName()"
                v-else
            >
            <span 
                v-if="conclusionItems[index].name.length === 0" 
                class="main-page__error-phone"
            >Поле пустое</span>
        </div>
        <!-- Номер телефона -->
        <div class="main-page__box-phone">
            <p 
                class="main-page__phone"
                @click='editPhone'
                v-if="conclusionItems[index].editBoolionPhone == true"
            >{{conclusionItems[index].phone}}</p>
            <!-- Инпут для изменения телефона -->
            <input 
                v-focus 
                type="text" 
                class="main-page__phone main-page__phone_input"
                @keyup.enter="closeEditPhone(index)" 
                @blur="closeEditPhone(index)"
                v-mask="'7 (###) ###-##-##'" 
                v-model="conclusionItems[index].phone" 
                @value="conclusionItems[index].phone"
                v-else
            >
            <span 
                v-if="conclusionItems[index].phone.length !== 17" 
                class="main-page__error-phone"
            >Это не полный номер</span>
        </div>
        <span class="main-page__cross" @click="openWindowDelete(index)"></span>
        <!-- Модальное окно удаление задачи -->

        <modal-delete-item v-show="conclusionItems[index].deleteModal"
            @clickButtonNo="clickButtonNo(index)"
            @clickButtonYes="clickButtonYes(index)"
            :nameContact="conclusionItems[index].name"
        ></modal-delete-item>
    </li>
</template>
<script>
    import modalDeleteItem from '../deleteModal/deleteModal'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        props: {

            index: Number,
        },
        directives:{
            focus:{
                inserted: function(el){
                    el.focus()
                }
            }
        },
        computed: mapGetters(['conclusionItem', 'conclusionItems']),
        components: {
            'modal-delete-item': modalDeleteItem,
        },
        methods: {
            ...mapMutations([
                'DELETE_IN_ITEMS', 
                'SHOW_MODAL_WINDOW_DELETE', 
                'CLOSE_MODAL_WINDOW_DELETE', 
                'EDIT_INPUT_NAME', 
                'CANSEL_INPUT_EDIT_NAME',
                'EDIT_INPUT_PHONE',
                'CANSEL_INPUT_EDIT_PHONE'
            ]),
            openWindowDelete(index){
               this.SHOW_MODAL_WINDOW_DELETE(index);
            },
            clickButtonNo(index){// Отключает модальное окно удаление при нажатие на кнопу "Нет"
                this.CLOSE_MODAL_WINDOW_DELETE(index);
            },
            clickButtonYes(index){// Удаление Контакта
                this.DELETE_IN_ITEMS(index);
            },
            editInputName(){
                this.EDIT_INPUT_NAME(this.index);
            },
            closeEditName(){
                let obj = {
                    index: this.index,
                    inputName: this.conclusionItems[this.index].name
                }
                this.CANSEL_INPUT_EDIT_NAME(obj);
            },
            editPhone(){
                this.EDIT_INPUT_PHONE(this.index);
            },
            closeEditPhone(){
                let obj = {
                    index: this.index,
                    inputPhone: this.conclusionItems[this.index].phone
                }
                this.CANSEL_INPUT_EDIT_PHONE(obj);
            }
        }
    }
</script>
<style lang="scss">
</style>