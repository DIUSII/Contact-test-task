<template>
    <div class="deleteModal">
        <p class="deleteModal__text" >Вы хотите удалить {{nameContact}} из контактов</p>
        <form  class="deleteModal__group">
            <button class="deleteModal__button deleteModal__button_yes" @click="$emit('clickButtonYes')" type="button">Да</button>
            <button class="deleteModal__button deleteModal__button_no" @click="$emit('clickButtonNo')" type="button">Нет</button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        'nameContact': String,
        'editLenghtModalDeleteItem': Boolean
    }
}
</script>
<style lang="scss">
    .deleteModal{
        background-color: rgb(143, 125, 245);
        width: 300px;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: auto;
        z-index: 1000;
        &__text{
            color: #fff;
            margin-top: 0px;
        }
        &__button{
            width: 80px;
            border: none;
            border-radius: 5px;
            padding: 5px 0;
            background-color: #FFF;
            outline: none;
            &_yes{
                color: red;
            }
            &_no{
                color:rgb(143, 125, 245);
                margin-left: 10px;
            }
        }
    }
</style>