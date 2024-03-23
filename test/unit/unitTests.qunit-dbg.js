/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pms_openui5_test/pms_openui5_test/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
