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

module.exports = "*{\n  margin: 0px;\n  padding: 0px;\n}\n/* Font! */\n@font-face {\n  font-family: Stalemate;\n  src: url('Stalemate-Regular.ttf') format(\"truetype\");\n}\n/* Navigation Bar */\n.navigation__checkbox {\n  display: none; }\n.navigation__button {\n  background-color: #fff;\n  height: 7rem;\n  width: 7rem;\n  position: fixed;\n  top: 6rem;\n  right: 6rem;\n  border-radius: 50%;\n  z-index: 2000;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);\n  text-align: center;\n  cursor: pointer; }\n.navigation__background {\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  position: fixed;\n  top: 6.5rem;\n  right: 6.5rem;\n  background-image: radial-gradient(#7ed56f, #28b485);\n  z-index: 1000;\n  transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }\n.navigation__nav {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.navigation__list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  list-style: none;\n  text-align: center;\n  width: 100%; }\n.navigation__item {\n  margin: 1rem; }\n.navigation__link:link, .navigation__link:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all .4s; }\n.navigation__link:link span, .navigation__link:visited span {\n    margin-right: 1.5rem;\n    display: inline-block; }\n.navigation__link:hover, .navigation__link:active {\n  background-position: 100%;\n  color: #55c57a;\n  -webkit-transform: translateX(1rem);\n          transform: translateX(1rem); }\n.navigation__checkbox:checked ~ .navigation__background {\n  -webkit-transform: scale(80);\n          transform: scale(80); }\n.navigation__checkbox:checked ~ .navigation__nav {\n  opacity: 1;\n  width: 100%; }\n.navigation__icon {\n  position: relative;\n  margin-top: 3.5rem; }\n.navigation__icon, .navigation__icon::before, .navigation__icon::after {\n    width: 3rem;\n    height: 2px;\n    background-color: #333;\n    display: inline-block; }\n.navigation__icon::before, .navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all .2s; }\n.navigation__icon::before {\n    top: -.8rem; }\n.navigation__icon::after {\n    top: .8rem; }\n.navigation__button:hover .navigation__icon::before {\n  top: -1rem; }\n.navigation__button:hover .navigation__icon::after {\n  top: 1rem; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon {\n  background-color: transparent; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg); }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::after {\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg); }\n/* Header */\n.header {\n  width: 100%;\n  vertical-align: top;\n}\n.header h3 {\n    display: inline-block;\n    position: absolute;\n    right: 0px;\n  }\n.header h4 {\n    display: inline-block;\n  }\n/* Horizontal Scroll area */\n.scrolling-wrapper {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  .page {\n    -webkit-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n}\n/* first page */\n.intro {\n  min-width: 100%;\n  height: 92vh;\n  background-image: (white, .6, url('altitude-clouds-cold-879443.jpg'));\n  background-image: url('altitude-clouds-cold-879443.jpg');\n  background-attachment: fixed;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.body {\n    text-align: center;\n    vertical-align: middle;\n  }\n.body h1 {\n    font-family: 'Stalemate';\n    font-weight: bolder;\n    color: rgb(0, 0, 0);\n    font-size: 72px;\n  }\n.body h1:hover {\n    background: -webkit-linear-gradient(rgb(78, 165, 187), rgb(79, 52, 143));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n/* Skills */\n.skills {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 133), rgb(65, 226, 247), rgb(119, 210, 238));\n  min-width: 100%;\n  height: 92vh;\n}\n/* Education */\n.education {\n  background-image: linear-gradient(to bottom right, rgb(80, 57, 180), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 92vh;\n}\n/* Projects */\n.projects {\n  background-image: linear-gradient(to bottom right, rgb(180, 57, 114), rgb(176, 238, 119));\n  min-width: 100%;\n  height: 92vh;\n}\n/* Last Page */\n.end {\n  background-image: linear-gradient(to bottom right, rgb(57, 180, 164), rgb(214, 119, 238));\n  min-width: 100%;\n  height: 92vh;\n}\n/* Footer */\n.footer {\n  vertical-align: bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0EsVUFBVTtBQUNWO0VBQ0Usc0JBQXNCO0VBQ3RCLG9EQUE0RTtBQUM5RTtBQUVBLG1CQUFtQjtBQUVuQjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixlQUFlLEVBQUU7QUFFbkI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixtREFBbUQ7RUFDbkQsYUFBYTtFQUNiLGlFQUF5RDtFQUF6RCx5REFBeUQ7RUFBekQsZ0hBQXlELEVBQUU7QUFFN0Q7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFVBQVU7RUFDVixRQUFRO0VBQ1IsMkRBQTJELEVBQUU7QUFFL0Q7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFFO0FBRWY7RUFDRSxZQUFZLEVBQUU7QUFFaEI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsb0ZBQW9GO0VBQ3BGLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBRTtBQUNyQjtJQUNFLG9CQUFvQjtJQUNwQixxQkFBcUIsRUFBRTtBQUUzQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFFO0FBRS9CO0VBQ0UsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFFO0FBRXhCO0VBQ0UsVUFBVTtFQUNWLFdBQVcsRUFBRTtBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFFO0FBQ3BCO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIscUJBQXFCLEVBQUU7QUFDekI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxtQkFBbUIsRUFBRTtBQUN2QjtJQUNFLFdBQVcsRUFBRTtBQUNmO0lBQ0UsVUFBVSxFQUFFO0FBRWhCO0VBQ0UsVUFBVSxFQUFFO0FBRWQ7RUFDRSxTQUFTLEVBQUU7QUFFYjtFQUNFLDZCQUE2QixFQUFFO0FBRWpDO0VBQ0UsTUFBTTtFQUNOLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLE1BQU07RUFDTixrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUU7QUFHOUIsV0FBVztBQUVYO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVGLDJCQUEyQjtBQUUzQjtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQzs7RUFFakM7SUFDRSxzQkFBYztZQUFkLGNBQWM7RUFDaEI7QUFDRjtBQUVBLGVBQWU7QUFDZjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oscUVBQW1GO0VBQ25GLHdEQUFzRTtFQUN0RSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx3RUFBd0U7SUFDeEUsNkJBQTZCO0lBQzdCLG9DQUFvQztFQUN0QztBQUVGLFdBQVc7QUFFWDtFQUNFLDRHQUE0RztFQUM1RyxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUEsY0FBYztBQUVkO0VBQ0Usd0ZBQXdGO0VBQ3hGLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQSxhQUFhO0FBRWI7RUFDRSx5RkFBeUY7RUFDekYsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBLGNBQWM7QUFFZDtFQUNFLHlGQUF5RjtFQUN6RixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUEsV0FBVztBQUVYO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLyogRm9udCEgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogU3RhbGVtYXRlO1xuICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvU3RhbGVtYXRlL1N0YWxlbWF0ZS1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5cbi8qIE5hdmlnYXRpb24gQmFyICovXG5cbi5uYXZpZ2F0aW9uX19jaGVja2JveCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLm5hdmlnYXRpb25fX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogN3JlbTtcbiAgd2lkdGg6IDdyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2cmVtO1xuICByaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAyMDAwO1xuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5uYXZpZ2F0aW9uX19iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA2cmVtO1xuICB3aWR0aDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNi41cmVtO1xuICByaWdodDogNi41cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzdlZDU2ZiwgIzI4YjQ4NSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTsgfVxuXG4ubmF2aWdhdGlvbl9fbmF2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE1MDA7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTsgfVxuXG4ubmF2aWdhdGlvbl9fbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm5hdmlnYXRpb25fX2l0ZW0ge1xuICBtYXJnaW46IDFyZW07IH1cblxuLm5hdmlnYXRpb25fX2xpbms6bGluaywgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA1MCUsICNmZmYgNTAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMjAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzOyB9XG4gIC5uYXZpZ2F0aW9uX19saW5rOmxpbmsgc3BhbiwgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLm5hdmlnYXRpb25fX2xpbms6aG92ZXIsIC5uYXZpZ2F0aW9uX19saW5rOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGNvbG9yOiAjNTVjNTdhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgfiAubmF2aWdhdGlvbl9fYmFja2dyb3VuZCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoODApOyB9XG5cbi5uYXZpZ2F0aW9uX19jaGVja2JveDpjaGVja2VkIH4gLm5hdmlnYXRpb25fX25hdiB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5uYXZpZ2F0aW9uX19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzLjVyZW07IH1cbiAgLm5hdmlnYXRpb25fX2ljb24sIC5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUsIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSwgLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7IH1cbiAgLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSB7XG4gICAgdG9wOiAtLjhyZW07IH1cbiAgLm5hdmlnYXRpb25fX2ljb246OmFmdGVyIHtcbiAgICB0b3A6IC44cmVtOyB9XG5cbi5uYXZpZ2F0aW9uX19idXR0b246aG92ZXIgLm5hdmlnYXRpb25fX2ljb246OmJlZm9yZSB7XG4gIHRvcDogLTFyZW07IH1cblxuLm5hdmlnYXRpb25fX2J1dHRvbjpob3ZlciAubmF2aWdhdGlvbl9faWNvbjo6YWZ0ZXIge1xuICB0b3A6IDFyZW07IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgKyAubmF2aWdhdGlvbl9fYnV0dG9uIC5uYXZpZ2F0aW9uX19pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgKyAubmF2aWdhdGlvbl9fYnV0dG9uIC5uYXZpZ2F0aW9uX19pY29uOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IH1cblxuLm5hdmlnYXRpb25fX2NoZWNrYm94OmNoZWNrZWQgKyAubmF2aWdhdGlvbl9fYnV0dG9uIC5uYXZpZ2F0aW9uX19pY29uOjphZnRlciB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7IH1cblxuXG4vKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuICAuaGVhZGVyIGgzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgLmhlYWRlciBoNCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbi8qIEhvcml6b250YWwgU2Nyb2xsIGFyZWEgKi9cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAucGFnZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cbn1cblxuLyogZmlyc3QgcGFnZSAqL1xuLmludHJvIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkydmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICh3aGl0ZSwgLjYsIHVybCgnLi4vYXNzZXRzL2ltZy9hbHRpdHVkZS1jbG91ZHMtY29sZC04Nzk0NDMuanBnJykpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvYWx0aXR1ZGUtY2xvdWRzLWNvbGQtODc5NDQzLmpwZycpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuICAuYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmJvZHkgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhbGVtYXRlJztcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICB9XG4gIC5ib2R5IGgxOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoNzgsIDE2NSwgMTg3KSwgcmdiKDc5LCA1MiwgMTQzKSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbi8qIFNraWxscyAqL1xuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDU3LCAxODAsIDEzMyksIHJnYig2NSwgMjI2LCAyNDcpLCByZ2IoMTE5LCAyMTAsIDIzOCkpO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTJ2aDtcbn1cblxuLyogRWR1Y2F0aW9uICovXG5cbi5lZHVjYXRpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2IoODAsIDU3LCAxODApLCByZ2IoMjE0LCAxMTksIDIzOCkpO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTJ2aDtcbn1cblxuLyogUHJvamVjdHMgKi9cblxuLnByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiKDE4MCwgNTcsIDExNCksIHJnYigxNzYsIDIzOCwgMTE5KSk7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MnZoO1xufVxuXG4vKiBMYXN0IFBhZ2UgKi9cblxuLmVuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYig1NywgMTgwLCAxNjQpLCByZ2IoMjE0LCAxMTksIDIzOCkpO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTJ2aDtcbn1cblxuLyogRm9vdGVyICovXG5cbi5mb290ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <input type=\"checkbox\" class=\"navigation__checkbox\" id=\"navi-toggle\">\n\n  <label for=\"navi-toggle\" class=\"navigation__button\">\n      <span class=\"navigation__icon\">&nbsp;</span>\n  </label>\n\n  <div class=\"navigation__background\">&nbsp;</div>\n\n  <nav class=\"navigation__nav\">\n      <ul class=\"navigation__list\">\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>01</span>About Natous</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>02</span>Your benfits</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>03</span>Popular tours</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>04</span>Stories</a></li>\n        <li class=\"navigation__item\"><a href=\"#\" class=\"navigation__link\"><span>05</span>Book now</a></li>\n      </ul>\n  </nav>\n</div>\n<div class=\"header\">\n  <h4>How about some kind of logo or something here.</h4>\n</div>\n<div class=\"scrolling-wrapper\">\n  <div class=\"page intro\">\n    <div class=\"body\">\n      <h1>Aleksandra Dooley</h1>\n      <h2>Full-Stack Web Developer</h2>\n      <p>Intro blah blah blah</p>\n    </div>\n  </div>\n  <div class=\"page skills\">\n    <h1>My Skills</h1>\n    <h3>Logo Logo Logo Logo</h3>\n  </div>\n  <div class=\"page education\">\n    <h2>Blah Blah Blah UCCS Blah Blah Blah Coding Dojo</h2>\n  </div>\n  <div class=\"page projects\">\n    <h2>My Projects!</h2>\n    <h3>Box Box Box Box</h3>\n  </div>\n  <div class=\"page end\">\n    <div class=\"contact-section\">\n      <h2>Contact ME!</h2>\n    </div>\n    <div class=\"note-section\">\n      <h2>Leave me a note!</h2>\n    </div>\n  </div>\n</div>\n<div class=\"footer-section\">\n  <h2>Footer</h2>\n</div>\n\n"

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