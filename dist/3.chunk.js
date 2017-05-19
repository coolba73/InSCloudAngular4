webpackJsonp([3,14],{

/***/ 1377:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <strong>Source</strong>\n                </div>\n\n                <div class=\"card-block\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <!--<label for=\"source\">Source</label>-->\n                                <textarea id=\"txtSource\" name=\"txtSource\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n                                <span class=\"help-block\">Order : Campaign Source Medium Name Website URL </span>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.row-->\n\n                </div>\n\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\" id=\"btnMakeUrl\" (click)=\"btnMake_Click()\" ><i class=\"fa fa-dot-circle-o\"></i> Make</button>\n                </div>\n\n            </div>\n        </div>\n        <!--/.col-->\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n\n            <div class=\"card\">\n\n                <div class=\"card-header\">\n                    <strong>Result</strong>\n                </div>\n\n                <div class=\"card-block\">\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <!--<label for=\"source\">Source</label>-->\n                                <textarea id=\"txtResult\" name=\"txtResult\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n                    <!--/.row-->\n\n                </div>\n\n                <div class=\"card-footer\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"btnCopy\" (click)=\"btnCopy_Click()\"   ><i class=\"fa fa-dot-circle-o\"></i> Copy</button>\n                </div>\n\n            </div>\n        </div>\n        <!--/.col-->\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ 1378:
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <script src=\"https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js\"></script>\r\n<style>\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    -webkit-animation-name: fadeIn; /* Fade in the background */\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: fadeIn;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n    position: fixed;\r\n    bottom: 0;\r\n    background-color: #fefefe;\r\n    width: 100%;\r\n    -webkit-animation-name: slideIn;\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-name: slideIn;\r\n    animation-duration: 0.4s\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: white;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-header {\r\n    padding: 2px 16px;\r\n    background-color: #5cb85c;\r\n    color: white;\r\n}\r\n\r\n.modal-body {padding: 2px 16px;}\r\n\r\n.modal-footer {\r\n    padding: 2px 16px;\r\n    background-color: #5cb85c;\r\n    color: white;\r\n}\r\n\r\n/* Add Animation */\r\n@-webkit-keyframes slideIn {\r\n    from {bottom: -300px; opacity: 0} \r\n    to {bottom: 0; opacity: 1}\r\n}\r\n\r\n@keyframes slideIn {\r\n    from {bottom: -300px; opacity: 0}\r\n    to {bottom: 0; opacity: 1}\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {opacity: 0} \r\n    to {opacity: 1}\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {opacity: 0} \r\n    to {opacity: 1}\r\n}\r\n</style>\r\n</head>\r\n\r\n<div class=\"animated fadeIn\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n\r\n            <div class=\"card\">\r\n\r\n                <div class=\"card-header\">\r\n                    <strong>Campaign URL Builder</strong>\r\n                </div>\r\n\r\n                <div class=\"card-block\">\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"source\">Source</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"txtSource\" placeholder=\"Enter Campaign Source\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/.row-->\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"medium\">Medium</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"txtMedium\" placeholder=\"Enter your Medium\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/.row-->\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"campaignname\">Campaign Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"txtCampaignName\" placeholder=\"Enter your Campaign Name\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/.row-->\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"landingurl\">Landing URL</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"txtLandingUrl\" placeholder=\"Enter your Landing URL\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/.row-->\r\n\r\n                </div>\r\n\r\n                <div class=\"card-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary\" id=\"btnMakeUrl\" (click)=\"btnMake_Click()\" ><i class=\"fa fa-dot-circle-o\"></i> Make</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n\r\n            <div class=\"card\">\r\n\r\n                <div class=\"card-header\">\r\n                    <strong>Result</strong>\r\n                </div>\r\n\r\n                <div class=\"card-block\">\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"txtResult\" >\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/.row-->\r\n\r\n                </div>\r\n\r\n                <div class=\"card-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-sm btn-success\" id=\"btnCopy\" (click)=\"btnCopy_Click()\"   ><i class=\"fa fa-dot-circle-o\"></i> Copy</button>\r\n                </div>\r\n               \r\n\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n\r\n    </div>\r\n    <!--/.row-->\r\n\r\n</div>\r\n\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    \r\n    <div class=\"modal-header\">\r\n      <span class=\"close\">&times;</span>\r\n      <!--<h5>Colly Tools</h5>-->\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <br/>\r\n      <h6> Copy Success !!!</h6>  \r\n      <br/>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <br/>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 386:
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
var singleurl_component_1 = __webpack_require__(715);
var multiurl_component_1 = __webpack_require__(714);
var urlbuilder_routing_module_1 = __webpack_require__(995);
var URLBuilderModule = (function () {
    function URLBuilderModule() {
    }
    return URLBuilderModule;
}());
URLBuilderModule = __decorate([
    core_1.NgModule({
        imports: [urlbuilder_routing_module_1.URLBuilderRoutingModule],
        declarations: [
            singleurl_component_1.SingleurlComponent,
            multiurl_component_1.MultiUrlComponent
        ]
    })
], URLBuilderModule);
exports.URLBuilderModule = URLBuilderModule;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/urlbuilder.module.js.map

/***/ }),

/***/ 714:
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
var MultiUrlComponent = (function () {
    function MultiUrlComponent() {
    }
    MultiUrlComponent.prototype.ngOnInit = function () {
        this.txtSource = document.getElementById("txtSource");
        this.txtResult = document.getElementById("txtResult");
    };
    MultiUrlComponent.prototype.btnMake_Click = function () {
        var lines = this.txtSource.value.split('\n');
        var re = '';
        var total = '';
        var source;
        var medium;
        var compaign;
        var landingUrl;
        for (var i = 0; i < lines.length; i++) {
            //re += i + " : " + lines[i] + '\n';
            var tabs = lines[i].split('\t');
            if (tabs.length == 4) {
                for (var j = 0; j < tabs.length; j++) {
                    source = tabs[0];
                    medium = tabs[1];
                    compaign = tabs[2];
                    landingUrl = tabs[3];
                    re = landingUrl
                        + '?utm_source='
                        + source
                        + '&utm_medium='
                        + medium
                        + '&utm_campaign='
                        + encodeURIComponent(compaign);
                }
                total += re + '\n';
            }
        }
        this.txtResult.value = total;
    };
    MultiUrlComponent.prototype.btnCopy_Click = function () {
        this.txtResult.select();
        document.execCommand('copy');
    };
    return MultiUrlComponent;
}()); //class
MultiUrlComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1377)
    }),
    __metadata("design:paramtypes", [])
], MultiUrlComponent);
exports.MultiUrlComponent = MultiUrlComponent;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/multiurl.component.js.map

/***/ }),

/***/ 715:
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
var SingleurlComponent = (function () {
    function SingleurlComponent() {
    }
    SingleurlComponent.prototype.ngOnInit = function () {
        this.txtSource = document.getElementById("txtSource");
        this.txtMedium = document.getElementById("txtMedium");
        this.txtCampaignName = document.getElementById("txtCampaignName");
        this.txtLandingUrl = document.getElementById("txtLandingUrl");
        this.txtResult = document.getElementById("txtResult");
        // this.txtSource.value       = "facebook";
        // this.txtMedium.value       = "cpc";
        // this.txtCampaignName.value = "20170221_포인트로보게시물";
        // this.txtLandingUrl.value   = "http: //insightcampus.co.kr/shop/r_datamining2/";
    };
    SingleurlComponent.prototype.btnMake_Click = function () {
        var re = this.txtLandingUrl.value
            + '?utm_source='
            + this.txtSource.value
            + '&utm_medium='
            + this.txtMedium.value
            + '&utm_campaign='
            + encodeURIComponent(this.txtCampaignName.value);
        this.txtResult.value = re;
    };
    SingleurlComponent.prototype.btnCopy_Click = function () {
        this.txtResult.select();
        document.execCommand('copy');
        //   // Get the modal
        //   var modal = document.getElementById('myModal');
        //   // Get the <span> element that closes the modal
        //   var span = <HTMLInputElement>document.getElementsByClassName("close")[0];
        //   // When the user clicks on <span> (x), close the modal
        //   span.onclick = function() {
        //       modal.style.display = "none";
        //   }
        //   // When the user clicks anywhere outside of the modal, close it
        //   window.onclick = function(event) {
        //       if (event.target == modal) {
        //           modal.style.display = "none";
        //       }
        //   }
        //   setTimeout(function(){modal.style.display = "none"},1500);
        //   modal.style.display = "block";
    };
    return SingleurlComponent;
}()); //class
SingleurlComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(1378),
        encapsulation: core_2.ViewEncapsulation.Emulated
    }),
    __metadata("design:paramtypes", [])
], SingleurlComponent);
exports.SingleurlComponent = SingleurlComponent;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/singleurl.component.js.map

/***/ }),

/***/ 995:
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
var singleurl_component_1 = __webpack_require__(715);
var multiurl_component_1 = __webpack_require__(714);
var routes = [
    {
        path: '',
        data: {
            title: 'UrlBuilder'
        },
        children: [
            {
                path: 'singleurl',
                component: singleurl_component_1.SingleurlComponent,
                data: {
                    title: 'Single URL'
                }
            },
            {
                path: 'multiurl',
                component: multiurl_component_1.MultiUrlComponent,
                data: {
                    title: 'Multi URL'
                }
            }
        ]
    }
];
var URLBuilderRoutingModule = (function () {
    function URLBuilderRoutingModule() {
    }
    return URLBuilderRoutingModule;
}());
URLBuilderRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], URLBuilderRoutingModule);
exports.URLBuilderRoutingModule = URLBuilderRoutingModule;
//# sourceMappingURL=D:/FinInsightServices/InSCloudAngular4/src/urlbuilder-routing.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map