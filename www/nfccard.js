var exec = require('cordova/exec');

module.exports = {

    setNFC: function(ff,param) {
        
        console.log("Pepe [interface] setNFC" ); 
        //cordova.exec(function() {console.log("Plugin sucess arg0= " + arguments[0]); }, function() {console.log("Plugin error "+arguments[0]);}, "Echo", "setNFC", [param]);   
        cordova.exec(ff, function() {console.log("Plugin error "+arguments[0]);}, "NFCCard", "setNFC", [param]);             

        return true;
    },
    isNfcAvailable: function(ff,param){
    
        console.log("Pepe [interface] isNfcAvailable" ); 
        cordova.exec(ff, function() {console.log("Plugin error "+arguments[0]);}, "NFCCard", "isNfcAvailable", [param]);
        return true;       
    },
    isNfcEnabled: function(ff,param){
    
        console.log("Pepe [interface] isNfcEnabled" ); 
        cordova.exec(ff, function() {console.log("Plugin error "+arguments[0]);}, "NFCCard", "isNfcEnabled", [param]);
        return true;       
    }
};
      