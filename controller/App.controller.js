sap.ui.define([
	"homedepot/YDSD_OHMBAY/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("homedepot.YDSD_OHMBAY.controller.App", {

		onInit: function() {
			var oViewModel;
			oViewModel = new JSONModel({
				// busy: true,
				delay: 0
			});
			this.setModel(oViewModel, "appView");

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});