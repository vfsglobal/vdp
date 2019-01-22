<template>
  <box-item
    class="service_item"
    :link="content.link"
  >
    <i :class="content.iconClass" />
    <h4 class="normal">{{content.title}}</h4>
    <div class="hover_content_wrapper bg_icon">
      <i :class="content.iconClass" />
      <div
        class="main_content"
        v-html="content.shortDesc"
      />
      <span class="read_more">Read More</span>
    </div>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'service-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.service_item {
  $hover_content_transition: all 0.7s;

  position: relative;
  background: #fff;
  padding: 30px 10px;
  text-align: center;
  overflow: hidden;
  transition: $hover_content_transition;

  > i {
    font-size: 60px;
    color: $orange;
  }

  > h4 {
    padding-top: 30px;
    padding-bottom: 5px;
  }

  > .hover_content_wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: 100%;
    width: 100%;
    height: 100%;
    background: $light_background_color;
    color: $dark_content_color;
    transition: $hover_content_transition;

    > .main_content {
      display: flex;
      flex: 1;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
    }

    > .read_more {
      display: block;
      padding: 5px;
      background: $orange;
      color: #fff;
      font-weight: bold;
    }
  }

  &:hover {
    box-shadow: 0px 0px 10px $light_shadow_color;

    > .hover_content_wrapper {
      top: 0%;
    }
  }
}
</style>
