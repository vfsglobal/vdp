<template>
  <div class="svg_map_container">
    <div class="main_map_wrapper" ref="main_svg_map" />
  </div>
</template>

<script>
import { countrySelectionProps } from '~/components/mixins/general';

if (process.browser) {
  var am4core = require('@amcharts/amcharts4/core'),
    am4maps = require('@amcharts/amcharts4/maps'),
    am4geodata_world = require('@amcharts/amcharts4-geodata/worldIndiaLow').default;
}

export default {
  mixins: [countrySelectionProps],

  data() {
    return {
      polygons: [],
      activePolygon: null
    };
  },

  watch: {
    activeIndex: 'setActivePolygon'
  },

  methods: {
    setActivePolygon(index) {
      index = index == undefined ? this.activeIndex : index;

      var curPolygon = this.polygons[index];

      if (this.activePolygon)
        this.activePolygon.setActive(false);

      if (curPolygon)
        curPolygon.setActive(true);

      this.activePolygon = curPolygon;
    }
  },

  mounted() {
    var data = JSON.parse(JSON.stringify(this.countries));

    data.forEach(obj => {
      Object.assign(obj, {
        id: obj.key.toUpperCase(),
        fill: '#172272',
        togglable: true,
        latitude: 0,
        longitude: 0
      });
    });

    var chart = am4core.createFromConfig({
      geodata: am4geodata_world,
      projection: 'Miller',
      maxZoomLevel: 1,
      chartContainer: {
        wheelable: false
      },
      seriesContainer: {
        draggable: false,
        resizable: false
      },
      series: [{
        type: "MapPolygonSeries",
        useGeodata: true,
        exclude: ["AQ"],
        data,
        mapPolygons: {
          fill: '#DDD',
          stroke: '#DDD',
          propertyFields: {
            fill: 'fill',
            togglable: 'togglable'
          },
          states: {
            active: {
              properties: {
                fill: '#f28a03'
              }
            }
          }
        },
        events: {
          inited: (() => {
            var mapElementHitListener = e => {
              var index = e.target.dataItem.index;
              this.activeIndex = this.activeIndex == index ? -1 : index;
            },

              setPolygonsAndData = e => {
                this.polygons = [];

                data.forEach((obj, index) => {
                  var { id, title, labelDelta } = obj,
                    curPolygon = e.target.getPolygonById(id);

                  this.polygons.push(curPolygon);

                  //set polygon
                  curPolygon.dom.setAttribute('cursor', 'pointer');

                  curPolygon.events.on("hit", mapElementHitListener);

                  //set data object data
                  obj.latitude = curPolygon.latitude + labelDelta.latitude;
                  obj.longitude = curPolygon.longitude + labelDelta.longitude;
                });
              },

              addMapImageSeries = (e) => {
                var mapImageSeries = e.target.chart.series.push(new am4maps.MapImageSeries());
                mapImageSeries.data = data;
                mapImageSeries.setClassName(true);

                //set mapImageTemplate
                var mapImageTemplate = mapImageSeries.mapImages.template;
                mapImageTemplate.nonScaling = true;
                mapImageTemplate.propertyFields = {
                  latitude: 'latitude',
                  longitude: 'longitude'
                };
                mapImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
                mapImageTemplate.events.on('hit', mapElementHitListener);

                //set label
                var label = mapImageTemplate.createChild(am4core.Label);
                label.text = "{title}";
                label.horizontalCenter = "middle";
                label.verticalCenter = "middle";
                label.fill = "#fff";
              };

            return (e) => {
              setPolygonsAndData(e);
              addMapImageSeries(e);
              this.setActivePolygon();
            };
          })()
        }
      }]
    }, this.$refs.main_svg_map, am4maps.MapChart);
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.svg_map_container {
  $main_map_width_by_height: 1080 / 527.27;

  position: relative;
  width: 100%;
  padding-top: ceil((1 / $main_map_width_by_height) * 100) * 1%;

  > .main_map_wrapper {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;

    .amcharts-MapImageSeries text {
      @extend %L_font_size;
      font-weight: bold;
      @include repeat_css(text-shadow, 1px 1px 3px #000, 2);
    }
  }
}
</style>