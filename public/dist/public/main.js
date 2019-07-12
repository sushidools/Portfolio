(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sasha_sasha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sasha/sasha.component */ "./src/app/sasha/sasha.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aleksandra', component: _sasha_sasha_component__WEBPACK_IMPORTED_MODULE_4__["SashaComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Font! */\n@font-face {\n  font-family: Stalemate;\n  src: url('Stalemate-Regular.ttf') format(\"truetype\");\n}\n/* Navigation Bar */\n.navigation__checkbox {\n  display: none; }\n.navigation__button {\n  position: fixed;\n  top: .8rem;\n  right: 2rem;\n  z-index: 2000;\n  text-align: center;\n  cursor: pointer; }\n.navigation__background {\n  position: fixed;\n  z-index: 1000;\n  transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }\n.navigation__nav {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.navigation__list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  list-style: none;\n  text-align: center;\n  width: 100%; }\n.navigation__item {\n  margin: 1rem; }\n.navigation__link:link, .navigation__link:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all .4s; }\n.navigation__link:link span, .navigation__link:visited span {\n    margin-right: 1.5rem;\n    display: inline-block; }\n.navigation__link:hover, .navigation__link:active {\n  background-position: 100%;\n  color: #55c57a;\n  -webkit-transform: translateX(1rem);\n          transform: translateX(1rem); }\n.navigation__checkbox:checked ~ .navigation__background {\n  -webkit-transform: scale(80);\n          transform: scale(80); }\n.navigation__checkbox:checked ~ .navigation__nav {\n  opacity: 1;\n  width: 100%; }\n.navigation__icon {\n  position: relative;\n  margin-top: 1.5rem; }\n.navigation__icon, .navigation__icon::before, .navigation__icon::after {\n    width: 1.5rem;\n    height: 1px;\n    background-color: #333;\n    display: inline-block; }\n.navigation__icon::before, .navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all .2s; }\n.navigation__icon::before {\n    top: -.8rem; }\n.navigation__icon::after {\n    top: .8rem; }\n.navigation__button:hover .navigation__icon::before {\n  top: -1rem; }\n.navigation__button:hover .navigation__icon::after {\n  top: 1rem; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon {\n  background-color: transparent; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg); }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::after {\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg); }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0VBQ0Usc0JBQXNCO0VBQ3RCLG9EQUE0RTtBQUM5RTtBQUVBLG1CQUFtQjtBQUVuQjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZSxFQUFFO0FBRW5CO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixpRUFBeUQ7RUFBekQseURBQXlEO0VBQXpELGdIQUF5RCxFQUFFO0FBRTdEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1YsUUFBUTtFQUNSLDJEQUEyRCxFQUFFO0FBRS9EO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRTtBQUVmO0VBQ0UsWUFBWSxFQUFFO0FBRWhCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG9GQUFvRjtFQUNwRixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUU7QUFDckI7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCLEVBQUU7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBRTtBQUUvQjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUU7QUFFZjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRTtBQUNwQjtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHFCQUFxQixFQUFFO0FBQ3pCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsbUJBQW1CLEVBQUU7QUFDdkI7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLFVBQVUsRUFBRTtBQUVoQjtFQUNFLFVBQVUsRUFBRTtBQUVkO0VBQ0UsU0FBUyxFQUFFO0FBRWI7RUFDRSw2QkFBNkIsRUFBRTtBQUVqQztFQUNFLE1BQU07RUFDTixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSxNQUFNO0VBQ04sa0NBQTBCO1VBQTFCLDBCQUEwQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250ISAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTdGFsZW1hdGU7XG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9TdGFsZW1hdGUvU3RhbGVtYXRlLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLyogTmF2aWdhdGlvbiBCYXIgKi9cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubmF2aWdhdGlvbl9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC44cmVtO1xuICByaWdodDogMnJlbTtcbiAgei1pbmRleDogMjAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm5hdmlnYXRpb25fX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTsgfVxuXG4ubmF2aWdhdGlvbl9fbmF2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE1MDA7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuXG4ubmF2aWdhdGlvbl9fbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm5hdmlnYXRpb25fX2l0ZW0ge1xuICBtYXJnaW46IDFyZW07IH1cblxuLm5hdmlnYXRpb25fX2xpbms6bGluaywgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA1MCUsICNmZmYgNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzOyB9XG4gIC5uYXZpZ2F0aW9uX19saW5rOmxpbmsgc3BhbiwgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm5hdmlnYXRpb25fX2xpbms6aG92ZXIsIC5uYXZpZ2F0aW9uX19saW5rOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGNvbG9yOiAjNTVjNTdhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgfiAubmF2aWdhdGlvbl9fYmFja2dyb3VuZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoODApOyB9XG5cbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkIH4gLm5hdmlnYXRpb25fX25hdiB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5uYXZpZ2F0aW9uX19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07IH1cbiAgLm5hdmlnYXRpb25fX2ljb24sIC5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUsIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlLCAubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yczsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlIHtcbiAgICB0b3A6IC0uOHJlbTsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xuICAgIHRvcDogLjhyZW07IH1cblxuLm5hdmlnYXRpb25fX2J1dHRvbjpob3ZlciAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlIHtcbiAgdG9wOiAtMXJlbTsgfVxuXG4ubmF2aWdhdGlvbl9fYnV0dG9uOmhvdmVyIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gIHRvcDogMXJlbTsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTsgfVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <input type=\"checkbox\" class=\"navigation__checkbox\" id=\"navi-toggle\">\n\n  <label for=\"navi-toggle\" class=\"navigation__button\">\n      <span class=\"navigation__icon\">&nbsp;</span>\n  </label>\n\n  <div class=\"navigation__background\">&nbsp;</div>\n\n  <nav class=\"navigation__nav\">\n      <ul class=\"navigation__list\">\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>01</span>About Natous</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>02</span>Your benfits</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>03</span>Popular tours</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>04</span>Stories</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>05</span>Book now</a></li>\n      </ul>\n  </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sasha_sasha_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sasha/sasha.component */ "./src/app/sasha/sasha.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _sasha_sasha_component__WEBPACK_IMPORTED_MODULE_6__["SashaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(title) {
        title.setTitle('Family');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sasha/sasha.component.css":
/*!*******************************************!*\
  !*** ./src/app/sasha/sasha.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header */\n\n.header {\n  width: 100%;\n  vertical-align: top;\n  position: absolute;\n  background-color: white;\n  opacity: .5;\n  z-index: 100;\n}\n\n.header h4 {\n    display: inline-block;\n  }\n\n/* Horizontal Scroll area */\n\n.scrolling-wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  .page {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n}\n\n/* first page */\n\n.intro {\n  min-width: 100%;\n  height: 100vh;\n  background-image: url('altitude-clouds-cold-879443.jpg');\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.body {\n    text-align: center;\n    min-width: 100%;\n    margin-top: 25vh;\n    display: inline-block;\n  }\n\n.body h1 {\n    padding: 5px;\n    margin: 0;\n  }\n\n.body span {\n    font-family: 'Stalemate';\n    font-weight: bolder;\n    color: rgb(0, 0, 0);\n    font-size: 72px;\n    height: 90px;\n    padding: 5px;\n    margin: 0px;\n  }\n\n.body span:hover {\n    background: -webkit-linear-gradient(rgb(78, 165, 187), rgb(79, 52, 143));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n/* Skills */\n\n.skills {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 133), rgb(65, 226, 247), rgb(119, 210, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n\n/* Education */\n\n.education {\n  background-image: linear-gradient(to bottom right, rgb(80, 57, 180), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n\n/* Projects */\n\n.projects {\n  background-image: linear-gradient(to bottom right, rgb(180, 57, 114), rgb(176, 238, 119));\n  min-width: 100%;\n  height: 100vh;\n}\n\n/* Last Page */\n\n.end {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 164), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n\n/* Footer */\n\n.footer {\n  vertical-align: bottom;\n  background-color: red;\n  color: purple;\n}\n\n.footer-section {\n  background-color: white;\n  opacity: .5;\n  z-index: 100;\n  position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n\n.footer-section h2, h4, i, p {\n    display: inline-block;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FzaGEvc2FzaGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUVYO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUYsMkJBQTJCOztBQUUzQjtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQzs7RUFFakM7SUFDRSxzQkFBYztZQUFkLGNBQWM7RUFDaEI7QUFDRjs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix3REFBeUU7RUFDekUsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7QUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0VBQ1g7O0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSx3RUFBd0U7SUFDeEUsNkJBQTZCO0lBQzdCLG9DQUFvQztFQUN0Qzs7QUFFRixXQUFXOztBQUVYO0VBQ0UsNEdBQTRHO0VBQzVHLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLHdGQUF3RjtFQUN4RixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBLGFBQWE7O0FBRWI7RUFDRSx5RkFBeUY7RUFDekYsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UseUZBQXlGO0VBQ3pGLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBQ0U7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zYXNoYS9zYXNoYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVhZGVyICovXG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogLjU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiAgLmhlYWRlciBoNCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbi8qIEhvcml6b250YWwgU2Nyb2xsIGFyZWEgKi9cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAucGFnZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cbn1cblxuLyogZmlyc3QgcGFnZSAqL1xuLmludHJvIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYWx0aXR1ZGUtY2xvdWRzLWNvbGQtODc5NDQzLmpwZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuICAuYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuYm9keSBoMSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5ib2R5IHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhbGVtYXRlJztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmJvZHkgc3Bhbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDc4LCAxNjUsIDE4NyksIHJnYig3OSwgNTIsIDE0MykpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4vKiBTa2lsbHMgKi9cblxuLnNraWxscyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYig1NywgMTgwLCAxMzMpLCByZ2IoNjUsIDIyNiwgMjQ3KSwgcmdiKDExOSwgMjEwLCAyMzgpKTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBFZHVjYXRpb24gKi9cblxuLmVkdWNhdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYig4MCwgNTcsIDE4MCksIHJnYigyMTQsIDExOSwgMjM4KSk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogUHJvamVjdHMgKi9cblxuLnByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDE4MCwgNTcsIDExNCksIHJnYigxNzYsIDIzOCwgMTE5KSk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogTGFzdCBQYWdlICovXG5cbi5lbmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoNTcsIDE4MCwgMTY0KSwgcmdiKDIxNCwgMTE5LCAyMzgpKTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBGb290ZXIgKi9cblxuLmZvb3RlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IC41O1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4gIC5mb290ZXItc2VjdGlvbiBoMiwgaDQsIGksIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/sasha/sasha.component.html":
/*!********************************************!*\
  !*** ./src/app/sasha/sasha.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scrolling-wrapper\">\n  <div class=\"header\">\n    <h4>Logo or picture of me here that becomes a button that opens an about me angular component</h4>\n  </div>\n  <div class=\"page intro\">\n    <div class=\"body\">\n      <h1>Hi! My name is </h1>\n      <h1><span>Aleksandra Dooley</span></h1>\n      <h2>Full-Stack Web Developer</h2>\n      <p>Intro blah blah blah</p>\n    </div>\n  </div>\n  <div class=\"page skills\">\n    <h1>My Skills</h1>\n    <h3>Logo Logo Logo Logo</h3>\n  </div>\n  <div class=\"page education\">\n    <h2>Blah Blah Blah UCCS Blah Blah Blah Coding Dojo</h2>\n  </div>\n  <div class=\"page projects\">\n    <h2>My Projects!</h2>\n    <h3>Box Box Box Box</h3>\n  </div>\n  <div class=\"page end\">\n    <div class=\"contact-section\">\n      <h2>Contact ME!</h2>\n    </div>\n    <div class=\"note-section\">\n      <h2>Leave me a note!</h2>\n    </div>\n  </div>\n  <div class=\"footer-section\">\n    <h2>Footer</h2>\n    <h4>I am part of the footer can you see me yet?</h4>\n    <i class=\"fab fa-facebook\"></i>\n    <i class=\"fab fa-facebook\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sasha/sasha.component.ts":
/*!******************************************!*\
  !*** ./src/app/sasha/sasha.component.ts ***!
  \******************************************/
/*! exports provided: SashaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SashaComponent", function() { return SashaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SashaComponent = /** @class */ (function () {
    function SashaComponent(title) {
        title.setTitle('Aleksandra Dooley');
    }
    SashaComponent.prototype.ngOnInit = function () {
    };
    SashaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sasha',
            template: __webpack_require__(/*! ./sasha.component.html */ "./src/app/sasha/sasha.component.html"),
            styles: [__webpack_require__(/*! ./sasha.component.css */ "./src/app/sasha/sasha.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SashaComponent);
    return SashaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandradooley/Desktop/Portfolio ideas/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map