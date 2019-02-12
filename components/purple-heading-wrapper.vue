<template>
  <div class="purple_heading_wrapper">
    <component
      :is="headingTag"
      class="main_heading"
    >
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    headingTag: {
      type: String,
      default: 'h3'
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.purple_heading_wrapper {
  $spacing: (
    default: 40px,
    _onlySdesktop: 30px,
    _onlymobile: 25px
  );

  position: relative;
  @include multi_media(
    padding,
    $spacing,
    (
      suffix: " 0px"
    )
  );
  text-align: center;
  background: $transparent_purple;
  color: #fff;
  z-index: 1;
  .overlapContent & {
    $overlap_spacing: (
      default: 80px,
      _onlySdesktop: 70px,
      _onlymobile: 60px
    );
    @include add_css_from_map(
      (
        padding-bottom:
          modify_map_value(
            $spacing,
            (
              add: $overlap_spacing
            )
          ),
        margin-bottom:
          modify_map_value(
            $overlap_spacing,
            (
              prefix: "-"
            )
          )
      )
    );
    + * {
      position: relative;
      z-index: 1;
      margin: 0 $box_spacing;
    }
  }
  @include add_transition_blank_mode_default_css(
    purple-heading,
    (
      prefix: "&"
    )
  ) {
    transition: all $inner_page_transition_duration;
  }
  &.purple-heading-enter {
    transform: translateY(100%);
    opacity: 0;
  }
  &.purple-heading-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
.purple_heading_container {
  position: relative;
  overflow: hidden;
}
</style>
