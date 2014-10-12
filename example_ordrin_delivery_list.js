var myconfig = require("./private_ordrin_key.json");
//This file should exist in this folder and contain 1 line:
//{"private_ordrin_key": "aslkdjfasdlkfjasdfljkasdf"}
//you get your private key from https://hackfood.ordr.in/account

var ordrin = require("ordrin-api");
// Initialize with your application secret key
var ordrin_api = new  ordrin.APIs(myconfig.private_ordrin_key, ordrin.TEST);

var args = {
  datetime: 'ASAP',
  zip: '07701',
  addr: '60 Wallace Street',
  city: 'Red Bank'
};
var args = {
  datetime: 'ASAP',
  zip: '77840',
  addr: '1 Main Street',
  city: 'College Station'
};

ordrin_api.delivery_list(args, print_response);

function print_response(error,data) {
  console.log(JSON.stringify(error));
  console.log(JSON.stringify(data));
}
