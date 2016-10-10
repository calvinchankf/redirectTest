window.onload = function() {

  // get params, for now, it is only for redirect_url...
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
  var reactAppBaseURL = qnps[0].param;
  console.log(JSON.stringify(qnps));

  // first time payment
  function fisrtPaid() {
    // construct queries with url encoding
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
    // construct queries with url encoding
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
