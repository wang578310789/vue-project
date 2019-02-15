<template>
    <transition>
        <slot name="fade"></slot>
    </transition>
</template>
<script>
export default {
    name:"VFade"

}
</script>
<style lang="scss" scoped>
.v-enter,.v-leave-to{
    opacity: 0;
}
.v-enter-active,.v-leave-active{
    transition: opacity 1s;
}
</style>
