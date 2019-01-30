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
@import "./assets/scss/globals";

.purple_heading_wrapper {
  $spacing: 40px;

  position: relative;
  padding: $spacing 0px;
  text-align: center;
  background: $transparent_purple;
  color: #fff;
  z-index: 1;

  &.overlap_content {
    $overlap_spacing: 80px;

    padding-bottom: $spacing + $overlap_spacing;
    margin-bottom: -$overlap_spacing;

    + * {
      position: relative;
      z-index: 1;
      margin: 0 $box_spacing;
    }
  }

  @include add_transition_default_css(purple-heading, (
    prefix: "&"
  )) {
    transition: all $inner_page_transition_duration;
  };
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
