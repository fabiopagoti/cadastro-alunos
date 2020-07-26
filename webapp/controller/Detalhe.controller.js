sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.fiori_00.cadastro_de_alunos.controller.Detalhe", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ovly.fiori_00.cadastro_de_alunos.view.Detalhe
		 */
		onInit: function () {

			var oRouter = this.getOwnerComponent().getRouter();
			var oRotaExibir = oRouter.getRoute("exibir");
			oRotaExibir.attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (oEvent) { // DECLARAR PARAMETRO
			// debugger;
			var oArguments = oEvent.getParameters().arguments;
			var oDataModel = this.getView().getModel(); // ODataModel
			var sPath = oDataModel.createKey("Students", {
				Id: oArguments.codigo
			});
			this.getView().bindElement("/" + sPath);
		},

		/**
		 *@memberOf ovly.fiori_00.cadastro_de_alunos.controller.Detalhe
		 */
		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("listagem");
		}, // VIRGULA

		toUpper: function (s) {
			if (s) {
				return s.toUpperCase();
			}
		}

	});
});