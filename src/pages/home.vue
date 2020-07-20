<template>
    <div class="home">
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import NavHeader from '../components/NavHeader'

export default{
    name:"home",
    components:{
        NavFooter,
        NavHeader,
    }
}
</script>

<style scoped>

</style>