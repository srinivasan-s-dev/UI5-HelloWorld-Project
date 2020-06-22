/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"HelloWorld/HelloWorld/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});