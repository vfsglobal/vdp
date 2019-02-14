<template>
    <list :content="content" class="icon_list clearfix">
        <template slot-scope="slotProps">
            <hyperlink v-if="slotProps.item.link" :link="slotProps.item.link">
                <i :class="slotProps.item.class" />
            </hyperlink>
            <i v-else :class="slotProps.item.class || slotProps.item" />
        </template>
    </list>
</template>

<script>
import {contentProp} from '~/components/mixins/general';

import list from './list.vue';

export default {
    mixins: [contentProp],
    components: {
        list
    }
}
</script>

<style lang="scss">
@import './assets/scss/globals/main';

ul.icon_list > li {
    float: left;
    
    &:not(:last-child) {
        @extend %padr_extra_small;
    }
}
</style>
