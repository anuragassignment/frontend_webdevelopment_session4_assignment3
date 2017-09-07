System.register("function1", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var add;
    return {
        setters: [],
        execute: function () {
            exports_1("add", add = function (a, b) { return console.log("Addition of " + a + " & " + b + " is " + (a + b)); });
        }
    };
});
System.register("function2", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var subtract;
    return {
        setters: [],
        execute: function () {
            exports_2("subtract", subtract = function (a, b) { return console.log("Substraction of " + a + " & " + b + " is " + (a - b)); });
        }
    };
});
System.register("interface", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("modules", ["function1", "function2"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var function1_1, function2_1, John;
    return {
        setters: [
            function (function1_1_1) {
                function1_1 = function1_1_1;
            },
            function (function2_1_1) {
                function2_1 = function2_1_1;
            }
        ],
        execute: function () {
            John = {
                name: "John",
                lastname: "Doe",
                greet: function () {
                    console.log("Hello, " + this.name + " " + this.lastname);
                }
            };
            function1_1.add(3, 3);
            function2_1.subtract(5, 2);
            John.greet();
        }
    };
});
//# sourceMappingURL=bundle.js.map