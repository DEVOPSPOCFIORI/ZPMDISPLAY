sap.ui.define([], function() {
	"use strict";

	return {
		numberUnit: function(sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		statusIcon: function(sValue) {
			if (sValue) {
				return "sap-icon://accept";
			} else {
				return "sap-icon://decline";
			}
		},

		remveZerosFormatter: function(value) {
			if (value) {
				return value.replace(/^0+/,"");
			}
		},
		
		sFormat:function(deviceVal,bayVal,valid) {
			if(deviceVal){
				if(bayVal==="" ||bayVal===undefined){
					return false;
				}else{
					return true;
				}
			}else if(bayVal!=="" && valid){
				return true;
			}else{
				return false;
			}
		},

		enableArticleField: function(sValue) {
			if (sValue === "" || sValue === undefined) {
				return false;
			} else {
				return true;
			}
		},
		repalceDashSymbol: function(value) {
			if(value){
			return value.replace(/(.{3}$)/, '-$1');
				
			}
		}
	};

});