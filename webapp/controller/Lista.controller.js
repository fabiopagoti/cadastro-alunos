sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.fiori_00.cadastro_de_alunos.controller.Lista", {

		// onInit: function(){
		// 	var sUrl = "https://run.mocky.io/v3/81b11093-c86a-4054-bacb-a547bbb7489d";
		// 	var oModelo = new sap.ui.model.json.JSONModel(sUrl); // GET
		// 	this.byId("list").setModel(oModelo);
		// },

		onSearch: function (oControlEvent) {
			var oSearchField = oControlEvent.getSource();
			var sValue = oSearchField.getValue();
			sap.m.MessageToast.show(sValue);
			console.log(sValue);
		},

		onAdd: function () {
			sap.m.MessageToast.show("apertou");
		}, // <--------- VIRGULA

		onItemPress: function (oEvent) {
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			this.getOwnerComponent().getRouter().navTo("exibir", {
				codigo: sId
			});
		}

	});
});