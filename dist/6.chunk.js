webpackJsonp([6,14],{

/***/ 1369:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    IMG.displayed {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto ;\r\n       max-width: 90%;\r\n    max-height: 90%;\r\n    }\r\n</style>\r\n\r\n<IMG class=\"displayed\" src=\"assets/img/welcome.PNG\" >\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var main_component_1 = __webpack_require__(706);
var main_routing_module_1 = __webpack_require__(992);
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            main_routing_module_1.MainRoutingModule,
        ],
        declarations: [main_component_1.MainComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/main.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var core_2 = __webpack_require__(2);
var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1369),
        encapsulation: core_2.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/main.component.js.map

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(62);
var main_component_1 = __webpack_require__(706);
var routes = [
    {
        path: '',
        data: {
            title: 'Main Pages'
        },
        children: [
            {
                path: 'main',
                component: main_component_1.MainComponent,
                data: {
                    title: 'Main Page'
                }
            }
        ]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
MainRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], MainRoutingModule);
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/main-routing.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map