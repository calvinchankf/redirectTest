window.onload = function() {

  // reactApp will pass a redirect_url for your gateway to go back reactApp
  // so you needa get the redirect_url from querystring
  // of cox you can you other methods to get it, the below method is just for your convenience
  function getRedirectURL() {
    var querystring = window.location.search.substring(1);
    var raw = querystring.split('&');
    var qnps = []; // queries and params
    for (var i = 0; i < raw.length; i++) {
      var temp = raw[i].split('=');
      qnps.push({
        query: temp[0],
        param: temp[1]
      });
    }
    return qnps[0].param;
  }
  var reactAppBaseURL = getRedirectURL();

  // first time payment
  function fisrtPaid() {
    // construct queries with URL encoding
    var transaction_type = encodeURIComponent("sale,create_payment_token");
    var response_code = encodeURIComponent(100);
    var response_message = encodeURIComponent("Request was processed successfully.");

    // back to react app
    setTimeout(function() {
      var reactAppURL = reactAppBaseURL
        +"?transaction_type="+transaction_type
        +"&response_code="+response_code
        +"&response_message="+response_message
      ;

      window.location = reactAppURL;
    }, 3000);
  }

  // add credit card
  function creditCardAdded() {
    // construct queries with URL encoding
    var transaction_type = encodeURIComponent("create_payment_token");
    var response_code = encodeURIComponent(100);
    var response_message = encodeURIComponent("Request was processed successfully.");
    var payment_method_id = encodeURIComponent("PYM_PEA86CCED-4DE3-FA50-7211-DE1CEC962704");
    var payment_method_name = encodeURIComponent("411111xxxxxx1111");

    // back to react app
    setTimeout(function() {
      var reactAppURL = reactAppBaseURL
        +"?transaction_type="+transaction_type
        +"&response_code="+response_code
        +"&response_message="+response_message
        +"&payment_method_id="+payment_method_id
        +"&payment_method_name="+payment_method_name
      ;

      window.location = reactAppURL;

    }, 3000);
  }

  // fisrtPaid();
  creditCardAdded();
}
