<template>
  <transition name="move-top-button">
    <div
      v-if="show"
      class="move_top_button"
      @click="goTop"
    ></div>
  </transition>
</template>

<script>
import { verticalScroll } from '~/utils';

export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    goTop() {
      verticalScroll.animate(0, 700);
    },
    setShow() {
      this.show = $(window).scrollTop() > 0;
    }
  },

  mounted() {
    this.setShow();
    $(window).on('scroll', () => {
      this.setShow();
    });
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.move_top_button {
  $button_size: (
    default: 50px,
    _onlySdesktop: 40px,
    _onlymobile: 35px
  );

  display: flex;
  position: fixed;
  right: 3%;
  bottom: 50px;
  @include add_css_from_map((
    (width height): $button_size,
    border-radius: (
        default: 5px,
        _onlySdesktop: 4px,
        _onlymobile: 3px
    ),
    box-shadow: modify_map_value((
        default: 10px,
        _onlySdesktop: 7px,
        _onlymobile: 5px
    ), (
        prefix: "0px 0px ",
        suffix: " #FFF"
    ))
  ));
  @include multi_media((width height), $button_size);
  background: $transparent_purple;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  &:before {
    $size: modify_map_value($button_size, (
        multiply: 0.3,
        round: true
    ));

    content: "";
    display: block;
    @include multi_media(margin-top, $size, (
        multiply: 0.5,
        round: true
    ));
    @include create_unfilled_arrow(
      (
        direction: top,
        size: $size,
        border_width: 2px,
        color: #fff
      )
    );
  }

  &.move-top-button-enter-active, &.move-top-button-leave-active {
      transition: all 0.5s;
  }

  &.move-top-button-enter, &.move-top-button-leave-to {
      @include multi_media(right, $button_size, (
        prefix: "-"
      ));
  }
}
</style>