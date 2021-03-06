<template>
  <div
    class="banner"
    :style="imageStyle"
  >
    <div
      class="wrapper"
      v-if="$slots.default"
    >
      <div class="main_content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { createImageStyle } from '~/utils';

export default {
  props: {
    image: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    imageStyle() {
      return createImageStyle(this.image, 'banners/');
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.banner {
  $bottom_overlap_space: (
    default: 50px,
    _onlySdesktop: 40px,
    _onlymobile: 30px
  );

  display: flex;
  position: relative;
  @include add_css_from_map(
    (
      height: (
        default: 450px,
        _onlySdesktop: 380px,
        _onlymobile: 300px
      ),
      margin-bottom:
        modify_map_value(
          $bottom_overlap_space,
          (
            prefix: "-"
          )
        )
    )
  );
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  z-index: 1;
  > .wrapper > .main_content {
    $shadow_modify_option: (
      suffix: " " + $shadow_color
    );
    @include multi_media(padding-bottom, $bottom_overlap_space);
    text-align: center;
    color: #fff;
    .big_heading {
      @include multi_media(
        text-shadow,
        (
          default: 3px 3px 3px,
          _onlySdesktop: 2px 2px 2px,
          _onlymobile: 1px 1px 1px
        ),
        $shadow_modify_option
      );
      @extend %H_font_size;
      font-weight: bold;
    }
    > p {
      @extend %L2_font_size;
      line-height: 1.6em;
      @extend %padt_normal;
    }
    > a.main_button {
      @include inline_valign();
      @extend %mart_normal;
      @extend %padv_extra_small;
      @extend %padh_normal;
      background: $orange;
      color: #fff;
      @extend %L_font_size;
      @include add_css_from_map(
        (
          border-radius: (
            default: 10px,
            _onlySdesktop: 7px,
            _onlymobile: 5px
          ),
          box-shadow:
            modify_map_value(
              (
                default: 5px 5px 5px,
                _onlySdesktop: 4px 4px 4px,
                _onlymobile: 3px 3px 3px
              ),
              $shadow_modify_option
            )
        )
      );
      transition: all 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
