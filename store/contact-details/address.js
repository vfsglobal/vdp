import { replaceTags } from "~/utils";

export const state = () => ({
  html: `<strong>VDP Global Services</strong><br>
  21<sup>st</sup> Floor, Urmi Estate, Lower Parel,<br>
  Mumbai, Maharashtra - 400013, India`
});

export const getters = {
  text({ html }) {
    var hasBrOccured = false;

    return replaceTags(html, function(str) {
      var str = str.trim().toLowerCase();

      if (str == "<strong>" || str == "</strong>") return "";

      if (str != "<br>") return str;

      if (hasBrOccured) {
        return "";
      } else {
        hasBrOccured = true;
        return ',' + str;
      }
    });
  }
};
