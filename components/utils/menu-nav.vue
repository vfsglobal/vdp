<template>
    <list :content="content" class="menu_nav" v-bind="listProps">
        <template slot-scope="slotProps">
            <hyperlink :link="slotProps.item.link">
                {{slotProps.item.text}}
            </hyperlink>
            <menu-nav v-if="slotProps.item[submenuKey]" :content="slotProps.item[submenuKey]" v-bind="$props" />
        </template>
    </list>
</template>

<script>
import { contentProp, submenuKeyProp } from '~/components/mixins/general';

import list from './list.vue';

export default {
    name: 'menu-nav',

    mixins: [contentProp, submenuKeyProp],

    components: {
        list
    },

    props: {
        listProps: {
            type: Object,
            default: null
        }
    }
}
</script>