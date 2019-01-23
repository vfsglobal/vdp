import { replaceTags } from "~/utils";

export const state = () => ({
  addressHTML: `<strong>VDP Global Services</strong><br>
      21<sup>st</sup> Floor, Urmi Estate, Lower Parel,<br>
      Mumbai, Maharashtra - 400013, India`,
  contactNo: "+91 8291774434",
  emailId: "sales@vdpglobalservices.com",
  website: "www.vdpglobalservices.com"
});

export const getters = {
  addressText({ addressHTML }) {
    var hasBrOccured = false;

    return replaceTags(addressHTML, function(str) {
      var str = str.trim().toLowerCase();

      if (str == "<strong>" || str == "</strong>") return "";

      if (str != "<br>") return str;

      if (hasBrOccured) {
        return "";
      } else {
        hasBrOccured = true;
        return "," + str;
      }
    });
  },
  contactNoHTML({ contactNo }) {
    return `<a href="tel:${contactNo}">${contactNo}</a>`;
  }
};
