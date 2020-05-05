sap.ui.define([
  "sap/ui/test/Opa5",
  "com/insura/front-end/test/integration/arrangements/Startup",
  "com/insura/front-end/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
