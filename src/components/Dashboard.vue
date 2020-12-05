<template>
    <div>
        <HelloWorld :msg="$t('home.title')"/>
    </div>
</template>

<script>

    import HelloWorld from "@/components/HelloWorld";

    export default {
        name: "Dashboard",
        components: {HelloWorld}
    }
</script>

<style scoped>

</style>