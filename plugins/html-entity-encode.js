import Vue from "vue";

function encodeStr(str) {
  var encodedText = "";

  for (var i = 0; i < str.length; i++)
    encodedText += "&#" + str.charCodeAt(i) + ";";

  return encodedText;
}

function addAttrs(str, attrs, doEncode) {
    for(var attr in attrs) {
        let value = attrs[attr];
        str += ` ${attr}="${doEncode ? encodeStr(value) : value}"`;
    }

    return str;
}

Vue.prototype.$htmlEntityEncode = function(data) {
  if (typeof data == "string") {
    return encodeStr(data);
  } else {
    var {tag, text} = data,
        str = `<${tag}`;
    
    str = addAttrs(str, data.attrs);
    str = addAttrs(str, data.encodeAttrs, true);
    
    str += `>${data.textEncode ? encodeStr(text) : text}</${tag}>`;

    return str;
  }
};