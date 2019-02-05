<script>
import { optionsProp, jQueryEl, generateTypeDetailsMixin, generateVModelMixin } from '~/components/mixins/general';
import allItemComponents from '~/components/mixins/all-item-components.vue';

if (process.browser)
  require('owl.carousel2');

var defaultOptions = {
  nav: true,
  margin: 20,
  navText: ['', '']
},

  allTypeDetails = {
    statsMainListBig: {
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 700,
      smartSpeed: 700,
      loop: true
    }
  };

export default {
  mixins: [optionsProp, jQueryEl, allItemComponents, generateTypeDetailsMixin({
    namePrefix: 'main',
    data: allTypeDetails
  }), generateVModelMixin({
    propName: 'activeIndex',
    event: 'change',
    type: Number,
    _default: 0
  })],

  data() {
    return {
      listUlTag: 'div',
      defaultClass: 'owl-carousel',
      listLiTag: 'div'
    }
  },

  computed: {
    mainOptions() {
      return this.hasOptions ? this.options : {
        ...defaultOptions,
        ...this.mainTypeDetails
      };
    },

    listLiClass() {
      return {
        common: 'item',
        each: this.itemClass
      }
    }
  },

  watch: {
    activeIndex(val) {
      this.setCarouselActiveIndex(val);
    }
  },

  methods: {
    setCarouselActiveIndex(index) {
      this.$jQueryEl.trigger('to.owl.carousel', [index == undefined ? this.activeIndex : index]);
    }
  },

  mounted() {
    this.$jQueryEl
      .on('changed.owl.carousel', e => {
        var pageIndex = e.page.index;

        if (pageIndex == -1)
          return;

        this.activeIndex = pageIndex;
      })
      .on('drag.owl.carousel', e => {
        this.$emit('drag-start', e);
      })
      .on('dragged.owl.carousel', e => {
        this.$emit('drag-end', e);
      })
      .owlCarousel(this.mainOptions);

    this.setCarouselActiveIndex();
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";
@import "./assets/scss/owl.carousel.min";

.owl-carousel {
  box-sizing: border-box;

  &%general {
    > .owl-dots {
      text-align: center;
      margin-top: 20px;

      > .owl-dot {
        $size: 12px;

        position: relative;
        @include inline_valign();
        width: $size;
        height: $size;
        border-radius: 50%;
        background: $dark_background_color;

        &:before {
          content: "";
          position: absolute;
          left: 0%;
          top: 0%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: $orange;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s;
        }

        &:hover,
        &.active {
          &:before {
            opacity: 1;
            transform: scale(1);
          }
        }

        &:not(:last-child) {
          margin-right: 20px;
        }

        &.active {
          background: $orange;
        }
      }
    }
  }

  &%same_item_height {
    > .owl-stage-outer .owl-stage {
      display: flex;

      > .owl-item > .item {
        height: 100%;

        > * {
          height: 100%;
          box-sizing: border-box;
        }
      }
    }
  }

  &.statsMainListBig {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    cursor: grab;
    @extend %padh_big;
    box-sizing: border-box;

    > .owl-nav {
      $size: 40px;
      $border_width: 2px;
      $color: #fff;

      > * {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;

        &:before {
          content: "";
          display: block;
        }
      }

      > .owl-prev {
        left: $size;

        &:before {
          @include create_unfilled_arrow(
            (
              direction: left,
              size: $size,
              border_width: $border_width,
              color: $color
            )
          );
        }
      }
      > .owl-next {
        right: $size;
        &:before {
          @include create_unfilled_arrow(
            (
              direction: right,
              size: $size,
              border_width: $border_width,
              color: $color
            )
          );
        }
      }
    }
    &:hover > .owl-nav {
      > * {
        visibility: visible;
        opacity: 1;
      }
      > .owl-prev {
        left: 0%;
      }
      > .owl-next {
        right: 0%;
      }
    }
  }
  &.contents {
    > .owl-nav,
    > .owl-dots {
      display: none;
    }
  }
}
</style>
