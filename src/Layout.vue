<template>
    <div>
        <div class="menu">
            <router-link class="menu-item" to="dashboard">{{$t('menu.home')}}</router-link>
            <router-link class="menu-item" to="exemplo1">{{$t('menu.example1')}}</router-link>
            <router-link class="menu-item" to="exemplo2">{{$t('menu.example2')}}</router-link>
        </div>

        <img class="logo" alt="Vue logo" src="./assets/logo.png">

        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

    .menu-item {
        margin-right: 10px;
    }

</style>