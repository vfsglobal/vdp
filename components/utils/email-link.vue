<template>
    <component :is="wrapperTag" v-html="$htmlEntityEncode(htmlEntityEncodeConfig)" />
</template>

<script>
export default {
    props: {
        email: {
            type: String,
            required: true
        },
        wrapperTag: {
            type: String,
            default: 'span'
        },
        text: {
            type: String,
            default() {
                return this.email;
            }
        },
        textEncode: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        htmlEntityEncodeConfig() {
            return {
                tag: 'a',
                encodeAttrs: {
                    href: `mailto:${this.email}`
                },
                text: this.text,
                textEncode: this.textEncode
            }
        }
    }
}
</script>

<style>
</style>
