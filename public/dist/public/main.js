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



var routes = [];
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

module.exports = "/* Font! */\n@font-face {\n  font-family: Stalemate;\n  src: url('Stalemate-Regular.ttf') format(\"truetype\");\n}\n/* Navigation Bar */\n.navigation__checkbox {\n  display: none; }\n.navigation__button {\n  position: fixed;\n  top: .8rem;\n  right: 2rem;\n  z-index: 2000;\n  text-align: center;\n  cursor: pointer; }\n.navigation__background {\n  position: fixed;\n  z-index: 1000;\n  transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }\n.navigation__nav {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.navigation__list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  list-style: none;\n  text-align: center;\n  width: 100%; }\n.navigation__item {\n  margin: 1rem; }\n.navigation__link:link, .navigation__link:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all .4s; }\n.navigation__link:link span, .navigation__link:visited span {\n    margin-right: 1.5rem;\n    display: inline-block; }\n.navigation__link:hover, .navigation__link:active {\n  background-position: 100%;\n  color: #55c57a;\n  -webkit-transform: translateX(1rem);\n          transform: translateX(1rem); }\n.navigation__checkbox:checked ~ .navigation__background {\n  -webkit-transform: scale(80);\n          transform: scale(80); }\n.navigation__checkbox:checked ~ .navigation__nav {\n  opacity: 1;\n  width: 100%; }\n.navigation__icon {\n  position: relative;\n  margin-top: 1.5rem; }\n.navigation__icon, .navigation__icon::before, .navigation__icon::after {\n    width: 1.5rem;\n    height: 1px;\n    background-color: #333;\n    display: inline-block; }\n.navigation__icon::before, .navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all .2s; }\n.navigation__icon::before {\n    top: -.8rem; }\n.navigation__icon::after {\n    top: .8rem; }\n.navigation__button:hover .navigation__icon::before {\n  top: -1rem; }\n.navigation__button:hover .navigation__icon::after {\n  top: 1rem; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon {\n  background-color: transparent; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg); }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::after {\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg); }\n/* Header */\n.header {\n  width: 100%;\n  vertical-align: top;\n  position: absolute;\n  background-color: white;\n  opacity: .5;\n  z-index: 100;\n}\n.header h4 {\n    display: inline-block;\n  }\n/* Horizontal Scroll area */\n.scrolling-wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  .page {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n}\n/* first page */\n.intro {\n  min-width: 100%;\n  height: 100vh;\n  background-image: url('altitude-clouds-cold-879443.jpg');\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.body {\n    text-align: center;\n    min-width: 100%;\n    margin-top: 25vh;\n    display: inline-block;\n  }\n.body h1 {\n    padding: 5px;\n    margin: 0;\n  }\n.body span {\n    font-family: 'Stalemate';\n    font-weight: bolder;\n    color: rgb(0, 0, 0);\n    font-size: 72px;\n    height: 90px;\n    padding: 5px;\n    margin: 0px;\n  }\n.body span:hover {\n    background: -webkit-linear-gradient(rgb(78, 165, 187), rgb(79, 52, 143));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n/* Skills */\n.skills {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 133), rgb(65, 226, 247), rgb(119, 210, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n/* Education */\n.education {\n  background-image: linear-gradient(to bottom right, rgb(80, 57, 180), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n/* Projects */\n.projects {\n  background-image: linear-gradient(to bottom right, rgb(180, 57, 114), rgb(176, 238, 119));\n  min-width: 100%;\n  height: 100vh;\n}\n/* Last Page */\n.end {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 164), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 100vh;\n}\n/* Footer */\n.footer {\n  vertical-align: bottom;\n  background-color: red;\n  color: purple;\n}\n.footer-section {\n  background-color: white;\n  opacity: .5;\n  z-index: 100;\n  position: absolute;\n    bottom: 0;\n    width: 100%;\n}\n.footer-section h2, h4, i, p {\n    display: inline-block;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0VBQ0Usc0JBQXNCO0VBQ3RCLG9EQUE0RTtBQUM5RTtBQUVBLG1CQUFtQjtBQUVuQjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZSxFQUFFO0FBRW5CO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixpRUFBeUQ7RUFBekQseURBQXlEO0VBQXpELGdIQUF5RCxFQUFFO0FBRTdEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixVQUFVO0VBQ1YsUUFBUTtFQUNSLDJEQUEyRCxFQUFFO0FBRS9EO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRTtBQUVmO0VBQ0UsWUFBWSxFQUFFO0FBRWhCO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG9GQUFvRjtFQUNwRixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUU7QUFDckI7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCLEVBQUU7QUFFM0I7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBRTtBQUUvQjtFQUNFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUU7QUFFZjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBRTtBQUNwQjtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHFCQUFxQixFQUFFO0FBQ3pCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsbUJBQW1CLEVBQUU7QUFDdkI7SUFDRSxXQUFXLEVBQUU7QUFDZjtJQUNFLFVBQVUsRUFBRTtBQUVoQjtFQUNFLFVBQVUsRUFBRTtBQUVkO0VBQ0UsU0FBUyxFQUFFO0FBRWI7RUFDRSw2QkFBNkIsRUFBRTtBQUVqQztFQUNFLE1BQU07RUFDTixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUU7QUFFN0I7RUFDRSxNQUFNO0VBQ04sa0NBQTBCO1VBQTFCLDBCQUEwQixFQUFFO0FBRzlCLFdBQVc7QUFFWDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFFRiwyQkFBMkI7QUFFM0I7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQ0FBaUM7O0VBRWpDO0lBQ0Usc0JBQWM7WUFBZCxjQUFjO0VBQ2hCO0FBQ0Y7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdEQUFzRTtFQUN0RSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFlBQVk7SUFDWixTQUFTO0VBQ1g7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNBO0lBQ0Usd0VBQXdFO0lBQ3hFLDZCQUE2QjtJQUM3QixvQ0FBb0M7RUFDdEM7QUFFRixXQUFXO0FBRVg7RUFDRSw0R0FBNEc7RUFDNUcsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLGNBQWM7QUFFZDtFQUNFLHdGQUF3RjtFQUN4RixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUEsYUFBYTtBQUViO0VBQ0UseUZBQXlGO0VBQ3pGLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQSxjQUFjO0FBRWQ7RUFDRSx5RkFBeUY7RUFDekYsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBLFdBQVc7QUFFWDtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7SUFDaEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250ISAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTdGFsZW1hdGU7XG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9TdGFsZW1hdGUvU3RhbGVtYXRlLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuLyogTmF2aWdhdGlvbiBCYXIgKi9cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubmF2aWdhdGlvbl9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC44cmVtO1xuICByaWdodDogMnJlbTtcbiAgei1pbmRleDogMjAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm5hdmlnYXRpb25fX2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTsgfVxuXG4ubmF2aWdhdGlvbl9fbmF2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE1MDA7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuXG4ubmF2aWdhdGlvbl9fbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm5hdmlnYXRpb25fX2l0ZW0ge1xuICBtYXJnaW46IDFyZW07IH1cblxuLm5hdmlnYXRpb25fX2xpbms6bGluaywgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA1MCUsICNmZmYgNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzOyB9XG4gIC5uYXZpZ2F0aW9uX19saW5rOmxpbmsgc3BhbiwgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm5hdmlnYXRpb25fX2xpbms6aG92ZXIsIC5uYXZpZ2F0aW9uX19saW5rOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGNvbG9yOiAjNTVjNTdhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgfiAubmF2aWdhdGlvbl9fYmFja2dyb3VuZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoODApOyB9XG5cbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkIH4gLm5hdmlnYXRpb25fX25hdiB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5uYXZpZ2F0aW9uX19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07IH1cbiAgLm5hdmlnYXRpb25fX2ljb24sIC5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUsIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlLCAubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yczsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlIHtcbiAgICB0b3A6IC0uOHJlbTsgfVxuICAubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xuICAgIHRvcDogLjhyZW07IH1cblxuLm5hdmlnYXRpb25fX2J1dHRvbjpob3ZlciAubmF2aWdhdGlvbl9faWNvbjo6YmVmb3JlIHtcbiAgdG9wOiAtMXJlbTsgfVxuXG4ubmF2aWdhdGlvbl9fYnV0dG9uOmhvdmVyIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gIHRvcDogMXJlbTsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTsgfVxuXG4ubmF2aWdhdGlvbl9fY2hlY2tib3g6Y2hlY2tlZCArIC5uYXZpZ2F0aW9uX19idXR0b24gLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTsgfVxuXG5cbi8qIEhlYWRlciAqL1xuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IC41O1xuICB6LWluZGV4OiAxMDA7XG59XG4gIC5oZWFkZXIgaDQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4vKiBIb3Jpem9udGFsIFNjcm9sbCBhcmVhICovXG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgLnBhZ2Uge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5cbi8qIGZpcnN0IHBhZ2UgKi9cbi5pbnRybyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2FsdGl0dWRlLWNsb3Vkcy1jb2xkLTg3OTQ0My5qcGcnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiAgLmJvZHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjV2aDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmJvZHkgaDEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYm9keSBzcGFuIHtcbiAgICBmb250LWZhbWlseTogJ1N0YWxlbWF0ZSc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5ib2R5IHNwYW46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYig3OCwgMTY1LCAxODcpLCByZ2IoNzksIDUyLCAxNDMpKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuLyogU2tpbGxzICovXG5cbi5za2lsbHMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoNTcsIDE4MCwgMTMzKSwgcmdiKDY1LCAyMjYsIDI0NyksIHJnYigxMTksIDIxMCwgMjM4KSk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogRWR1Y2F0aW9uICovXG5cbi5lZHVjYXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoODAsIDU3LCAxODApLCByZ2IoMjE0LCAxMTksIDIzOCkpO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIFByb2plY3RzICovXG5cbi5wcm9qZWN0cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYigxODAsIDU3LCAxMTQpLCByZ2IoMTc2LCAyMzgsIDExOSkpO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qIExhc3QgUGFnZSAqL1xuXG4uZW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDU3LCAxODAsIDE2NCksIHJnYigyMTQsIDExOSwgMjM4KSk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogRm9vdGVyICovXG5cbi5mb290ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiBwdXJwbGU7XG59XG5cbi5mb290ZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAuNTtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICAuZm9vdGVyLXNlY3Rpb24gaDIsIGg0LCBpLCBwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <input type=\"checkbox\" class=\"navigation__checkbox\" id=\"navi-toggle\">\n\n  <label for=\"navi-toggle\" class=\"navigation__button\">\n      <span class=\"navigation__icon\">&nbsp;</span>\n  </label>\n\n  <div class=\"navigation__background\">&nbsp;</div>\n\n  <nav class=\"navigation__nav\">\n      <ul class=\"navigation__list\">\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>01</span>About Natous</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>02</span>Your benfits</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>03</span>Popular tours</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>04</span>Stories</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>05</span>Book now</a></li>\n      </ul>\n  </nav>\n</div>\n<div class=\"scrolling-wrapper\">\n  <div class=\"header\">\n    <h4>Logo or picture of me here that becomes a button that opens an about me angular component</h4>\n  </div>\n  <div class=\"page intro\">\n    <div class=\"body\">\n      <h1>Hi! My name is </h1>\n      <h1><span>Aleksandra Dooley</span></h1>\n      <h2>Full-Stack Web Developer</h2>\n      <p>Intro blah blah blah</p>\n    </div>\n  </div>\n  <div class=\"page skills\">\n    <h1>My Skills</h1>\n    <h3>Logo Logo Logo Logo</h3>\n  </div>\n  <div class=\"page education\">\n    <h2>Blah Blah Blah UCCS Blah Blah Blah Coding Dojo</h2>\n  </div>\n  <div class=\"page projects\">\n    <h2>My Projects!</h2>\n    <h3>Box Box Box Box</h3>\n  </div>\n  <div class=\"page end\">\n    <div class=\"contact-section\">\n      <h2>Contact ME!</h2>\n    </div>\n    <div class=\"note-section\">\n      <h2>Leave me a note!</h2>\n    </div>\n  </div>\n  <div class=\"footer-section\">\n    <h2>Footer</h2>\n    <h4>I am part of the footer can you see me yet?</h4>\n    <i class=\"fab fa-facebook\"></i>\n    <i class=\"fab fa-facebook\"></i>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(title) {
        title.setTitle('Aleksandra Dooley');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
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