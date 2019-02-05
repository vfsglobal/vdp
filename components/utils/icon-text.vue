<template>
    <div class="icon_text">
        <i :class="iconClass" />
        <span><slot /></span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        }
    },

    computed: {
        iconClass() {
            return 'icon-' + this.icon;
        }
    }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.icon_text {
    > * {
        @include inline_valign();
    }
    
    > i {
        @extend %padr_extra_mini;
    }
}
</style>
