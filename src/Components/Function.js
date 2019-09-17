 const formatMoney= (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  } 
  
  export const strip_tags = (str, allowed_tags) => {
    var key = '', allowed = false;
    var matches = [];
    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = '';
  
    var replacer = function(search, replace, str) {
      return str.split(search).join(replace);
    };
    // Build allowes tags associative array
    if (allowed_tags) {
      allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }
  
    str += '';
  
    // Match tags
    matches = str.match(/(<\/?[\S][^>]*>)/gi);
  
    // Go through all HTML tags
    for (key in matches) {
      if (isNaN(key)) {
        // IE7 Hack
        continue;
      }
  
      // Save HTML tag
      html = matches[key].toString();
  
      // Is tag not in allowed list ? Remove from str !
      allowed = false;
  
      // Go through all allowed tags
      for (k in allowed_array) {
        // Init
        allowed_tag = allowed_array[k];
        i = -1;
  
        if (i !== 0) {
          i = html.toLowerCase().indexOf('<' + allowed_tag + '>');
        }
        if (i !== 0) {
          i = html.toLowerCase().indexOf('<' + allowed_tag + ' ');
        }
        if (i !== 0) {
          i = html.toLowerCase().indexOf('</' + allowed_tag);
        }
  
        // Determine
        if (i === 0) {
          allowed = true;
          break;
        }
      }
  
      if (!allowed) {
        str = replacer(html, "", str);
        // Custom replace. No regexing
      }
    }
  
    return str;
  }
  export default formatMoney;