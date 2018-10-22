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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"accordion\">\r\n  <ul>\r\n    <li tabindex=\"1\" (mouseenter) =\"mouseEnter('div a') \"  (mouseleave) =\"mouseLeave('div A')\">\r\n      <div>\r\n          <h1 *ngIf = \"showA\">About</h1>\r\n        <div class=\"ref\">\r\n          <h2 *ngIf = \"showB\">About</h2>\r\n          <p *ngIf = \"showB\">I'm a software developer and front-end developer along with Data Analyst skills, Masters graduate of computer science at the University of Dayton.\r\nApart from being a coder, You will find me cooking, library or working out in gym. I'm a recent graduate and looking for entry-level opportunities. \r\nAlways enthustiastc about learing new skills and building up the knowledge. I'd love to interact with people.</p>\r\n          </div>\r\n      </div>\r\n    </li>\r\n    <li tabindex=\"2\" (mouseenter) =\"mouseEnter('div a') \"  (mouseleave) =\"mouseLeave('div A')\">\r\n      <div>\r\n          <h1 *ngIf = \"showA\">Coder</h1>\r\n        <div class=\"ref\">\r\n          <h2 *ngIf = \"showB\">Coder</h2>\r\n          <p *ngIf = \"showB\">Body</p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li tabindex=\"3\" (mouseenter) =\"mouseEnter('div a') \"  (mouseleave) =\"mouseLeave('div A')\">\r\n      <div>\r\n          <h1 *ngIf = \"showA\">Designer</h1>\r\n        <div class=\"ref\">\r\n          <h2 *ngIf = \"showB\">Designer</h2>\r\n          <p *ngIf = \"showB\">Body</p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n</body>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans);\n@import url(https://fonts.googleapis.com/css?family=Montserrat:700);\n.accordion {\n  max-width: 1080px;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  min-width: 100%; }\n.accordion ul {\n    width: 100%;\n    display: table;\n    table-layout: fixed;\n    margin: 0;\n    padding: 0; }\n.accordion ul li {\n      display: table-cell;\n      position: relative;\n      width: 16.666%;\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: center center;\n      transition: all 500ms ease; }\n.accordion ul li div {\n        display: table;\n        overflow: hidden;\n        width: 100%; }\n.accordion ul li div h1 {\n          font-size: 30px;\n          letter-spacing: -1px;\n          color: #DFBF84;\n          text-transform: uppercase;\n          text-shadow: 1px 1px 0 #000;\n          padding: 0% 0% 65% 0%;\n          vertical-align: middle;\n          display: table-cell;\n          text-align: center; }\n.accordion ul li div .ref {\n          display: block;\n          height: 100vh;\n          width: 100%;\n          position: relative;\n          z-index: 3;\n          padding: 15px 20px;\n          box-sizing: border-box;\n          color: white;\n          text-decoration: none;\n          font-family: Open Sans, sans-serif;\n          transition: all 200ms ease; }\n.accordion ul li div .ref * {\n            opacity: 0;\n            margin: 0;\n            width: 100%;\n            text-overflow: ellipsis;\n            position: relative;\n            z-index: 5;\n            padding: 10% 10% 10% 10%;\n            white-space: normal;\n            overflow: hidden;\n            -webkit-transform: translateX(-20px);\n            transform: translateX(-20px);\n            transition: all 400ms ease; }\n.accordion ul li div .ref h2 {\n            font-size: 30px;\n            letter-spacing: -1px;\n            color: #DFBF84;\n            text-transform: uppercase;\n            text-shadow: 1px 1px 0 #000;\n            margin: 10px 0 24px;\n            text-align: center;\n            line-height: 50px; }\n.accordion ul li div .ref p {\n            color: #f6f6f6;\n            font-family: 'Orienta', sans-serif;\n            font-size: 16px;\n            line-height: 24px;\n            margin: 0 0 24px;\n            text-align: left; }\n.accordion ul li:nth-child(1) {\n      background-color: #501a49;\n      background-image: url('grad.png'); }\n.accordion ul li:nth-child(2) {\n      background-color: #333;\n      background-image: url('code.png'); }\n.accordion ul li:nth-child(3) {\n      background-color: #d19292;\n      background-image: url('code1.png'); }\n.accordion ul:hover li,\n    .accordion ul:focus-within li {\n      width: 8%; }\n.accordion ul li:focus {\n      outline: none; }\n.accordion ul:hover li:hover,\n    .accordion ul li:focus,\n    .accordion ul:focus-within li:focus {\n      width: 60%; }\n.accordion ul:hover li:hover .ref,\n      .accordion ul li:focus .ref,\n      .accordion ul:focus-within li:focus .ref {\n        background: rgba(0, 0, 0, 0.4); }\n.accordion ul:hover li:hover .ref *,\n        .accordion ul li:focus .ref *,\n        .accordion ul:focus-within li:focus .ref * {\n          opacity: 1;\n          -webkit-transform: translateX(0);\n          transform: translateX(0); }\n.accordion ul:hover li {\n      width: 8% !important; }\n.accordion ul:hover li .ref * {\n        opacity: 0 !important; }\n.accordion ul:hover li:hover {\n      width: 60% !important; }\n.accordion ul:hover li:hover .ref {\n        background: rgba(0, 0, 0, 0.4); }\n.accordion ul:hover li:hover .ref * {\n          opacity: 1 !important;\n          -webkit-transform: translateX(0);\n          transform: translateX(0); }\n@media screen and (max-width: 600px) {\n  body {\n    margin: 0;\n    position: fixed; }\n  .accordion ul li, .accordion ul li:hover, .accordion ul:hover li, .accordion ul:hover li:hover {\n    position: fixed;\n    display: table;\n    table-layout: fixed;\n    width: 100%;\n    transition: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxLaXNob3JlXFxEb2N1bWVudHNcXEdpdEh1YlxcbmV3cG9ydGZvbGlvL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsK0RBQVk7QUFDWixvRUFBWTtBQWFaO0VBQ0Usa0JBQWdCO0VBQ2hCLGFBQVc7RUFDWCxpQkFBZTtFQUtmLGdCQUFlO0VBQ2IsMkJBQTBCO0VBQzFCLFlBQVc7RUFDWCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGdCQUFlLEVBMEtsQjtBQXZMRDtJQWlCSSxZQUFVO0lBQ1YsZUFBYTtJQUNiLG9CQUFrQjtJQUNsQixVQUFRO0lBQ1IsV0FBUyxFQWdLVjtBQXJMSDtNQXdCTSxvQkFBa0I7TUFFbEIsbUJBQWtCO01BQ2xCLGVBQWE7TUFDYixhQUFXO01BRVgsNkJBQTJCO01BQzNCLG1DQUFpQztNQUVqQywyQkFBeUIsRUFrRjFCO0FBbkhMO1FBcUNRLGVBQWE7UUFDYixpQkFBZTtRQUNmLFlBQVUsRUEwRVg7QUFqSFA7VUEyQ1UsZ0JBQWU7VUFDZixxQkFBb0I7VUFDcEIsZUFBYztVQUNkLDBCQUF5QjtVQUN6Qiw0QkFBMkI7VUFDM0Isc0JBQXFCO1VBQ3JCLHVCQUFzQjtVQUN0QixvQkFBbUI7VUFDbkIsbUJBQWtCLEVBQ25CO0FBcERUO1VBeURVLGVBQWE7VUFDYixjQUFZO1VBQ1osWUFBVTtVQUVWLG1CQUFrQjtVQUNsQixXQUFTO1VBRVQsbUJBQWlCO1VBQ2pCLHVCQUFxQjtVQUNyQixhQUF3QjtVQUN4QixzQkFBb0I7VUFDcEIsbUNBQWlDO1VBRWpDLDJCQUF5QixFQXlDMUI7QUEvR1Q7WUEwRVksV0FBUztZQUNULFVBQVE7WUFDUixZQUFVO1lBQ1Ysd0JBQXNCO1lBQ3RCLG1CQUFpQjtZQUNqQixXQUFTO1lBQ1QseUJBQXVCO1lBQ3ZCLG9CQUFrQjtZQUNsQixpQkFBZTtZQUVmLHFDQUFtQztZQUNuQyw2QkFBMkI7WUFHM0IsMkJBQXlCLEVBRTFCO0FBMUZYO1lBOEZZLGdCQUFlO1lBQ2YscUJBQW9CO1lBQ3BCLGVBQWM7WUFDZCwwQkFBeUI7WUFDekIsNEJBQTJCO1lBQzFCLG9CQUFtQjtZQUFFLG1CQUFrQjtZQUFFLGtCQUFpQixFQUU1RDtBQXJHWDtZQXlHWSxlQUFjO1lBQ2QsbUNBQWtDO1lBQ2pDLGdCQUFlO1lBQUUsa0JBQWlCO1lBQUUsaUJBQWdCO1lBQUUsaUJBQWdCLEVBRXhFO0FBN0dYO01Bc0hzQiwwQkFBaUM7TUFBQyxrQ0FBa0UsRUFBRztBQXRIN0g7TUF1SHNCLHVCQUFzQjtNQUFFLGtDQUFrRSxFQUFFO0FBdkhsSDtNQXdIc0IsMEJBQW9DO01BQUMsbUNBQW1FLEVBQUU7QUF4SGhJOztNQThId0IsVUFBUSxFQUFJO0FBOUhwQztNQWlJTSxjQUFhLEVBQ2Q7QUFsSUw7OztNQXlJTSxXQUFTLEVBZ0JWO0FBekpMOzs7UUE2SVEsK0JBQXlCLEVBVTFCO0FBdkpQOzs7VUFpSlUsV0FBUztVQUNULGlDQUErQjtVQUMvQix5QkFBdUIsRUFFeEI7QUFySlQ7TUE0Sk0scUJBQW9CLEVBS3JCO0FBaktMO1FBK0pTLHNCQUFxQixFQUNyQjtBQWhLVDtNQW9LTSxzQkFBb0IsRUFlckI7QUFuTEw7UUF3S1EsK0JBQXlCLEVBVTFCO0FBbExQO1VBNEtVLHNCQUFvQjtVQUNwQixpQ0FBK0I7VUFDL0IseUJBQXVCLEVBRXhCO0FBVVQ7RUFHRTtJQUFPLFVBQVE7SUFBRSxnQkFBZSxFQUFHO0VBRW5DO0lBUU0sZ0JBQWM7SUFDZCxlQUFhO0lBQ2Isb0JBQWtCO0lBQ2xCLFlBQVU7SUFHVixpQkFBZSxFQUVoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb250c1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NzAwKTtcclxuXHJcbi8vIEFjY29yZGlvbiBIZWlnaHRcclxuJGEtaGVpZ2h0OiA2MDBweDtcclxuXHJcbiRicmFjZS1jb2xvciA6IHdoaXRlO1xyXG5cclxuLy8gUG9zaXRpb24gdGV4dCBhbG9uZyBib3R0b21cclxuJHRleHQtb2Zmc2V0OiAkYS1oZWlnaHQgLSA5MDtcclxuXHJcbi8vIFBhZ2UgVGl0bGVcclxuXHJcblxyXG4uYWNjb3JkaW9uIHtcclxuICBtYXgtd2lkdGg6MTA4MHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuICAvLyBtYXJnaW46MTBweCAxMHB4IDEwcHggMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dFdhbGxwYXBlci9teXBpYy5qcGcpO1xyXG4gIC8vIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuXHJcbiAgdWwge1xyXG5cclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgdGFibGUtbGF5b3V0OmZpeGVkO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaSB7XHJcblxyXG4gICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIC8vIHZlcnRpY2FsLWFsaWduOmJvdHRvbTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDoxNi42NjYlOyAvLyA2IGludG8gMTAwXHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOmFsbCA1MDBtcyBlYXNlO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OnRhYmxlO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4OyBcclxuICAgICAgICAgIGNvbG9yOiAjREZCRjg0OyBcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjMDAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMCUgMCUgNjUlIDAlO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAucmVmIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgIGhlaWdodDoxMDB2aDtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOztcclxuICAgICAgICAgIHotaW5kZXg6MztcclxuICAgICAgICAgIC8vIHZlcnRpY2FsLWFsaWduOmJvdHRvbTtcclxuICAgICAgICAgIHBhZGRpbmc6MTVweCAyMHB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTpPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYW5zaXRpb246YWxsIDIwMG1zIGVhc2U7XHJcblxyXG4gICAgICAgICAgKiB7XHJcblxyXG4gICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDo1O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwJSAxMCUgMTAlIDEwJTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6bm9ybWFsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpO1xyXG5cclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCA0MDBtcyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCA0MDBtcyBlYXNlO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMiB7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7IFxyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjREZCRjg0OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgIzAwMDtcclxuICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjZmNmY2OyBcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcmllbnRhJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDI0cHg7IG1hcmdpbjogMCAwIDI0cHg7IHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBCYWNrZ3JvdW5kIGltYWdlc1xyXG4gICAgbGk6bnRoLWNoaWxkKDEpIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCAyNiwgNzMpO2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0V2FsbHBhcGVyL2dyYWQucG5nKTt9XHJcbiAgICBsaTpudGgtY2hpbGQoMikgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dFdhbGxwYXBlci9jb2RlLnBuZyl9XHJcbiAgICBsaTpudGgtY2hpbGQoMykgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxNDYsIDE0Nik7YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXRXYWxscGFwZXIvY29kZTEucG5nKX1cclxuICAgIC8vIGxpOm50aC1jaGlsZCg0KSB7IGJhY2tncm91bmQtY29sb3I6ICMzMzM7fVxyXG4gICAgLy8gbGk6bnRoLWNoaWxkKDUpIHsgYmFja2dyb3VuZC1jb2xvcjogIzMzMzt9XHJcbiAgICAvLyBsaTpudGgtY2hpbGQoNikgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO31cclxuXHJcbiAgICAmOmhvdmVyIGxpLFxyXG4gICAgJjpmb2N1cy13aXRoaW4gbGkgeyB3aWR0aDo4JTsgfVxyXG4gICAgXHJcbiAgICBsaTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciBsaTpob3ZlcixcclxuICAgIC8vIGFsbG93IHVzZXJzIHRvIHRhYiB0aHJvdWdoIGFjdGl2ZSBzbGlkZXNcclxuICAgIGxpOmZvY3VzLFxyXG4gICAgJjpmb2N1cy13aXRoaW4gbGk6Zm9jdXMge1xyXG5cclxuICAgICAgd2lkdGg6NjAlO1xyXG5cclxuICAgICAgLnJlZiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KTtcclxuICAgICAgICBcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXIgbGkge1xyXG4gICAgICB3aWR0aDogOCUgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgIC5yZWYgKiB7XHJcbiAgICAgICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOmhvdmVyIGxpOmhvdmVyIHtcclxuICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAucmVmIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBvcGFjaXR5OjEgIWltcG9ydGFudDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIFN0YWNrIGl0ZW1zXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgXHJcbiAgLy8gSUUgZ2V0cyBmdXNzeSBpZiB0aGlzIGlzbid0IGhlcmVcclxuICBib2R5IHsgbWFyZ2luOjA7IHBvc2l0aW9uOiBmaXhlZDt9XHJcbiAgXHJcbiAgLmFjY29yZGlvbiB7XHJcbiAgICBcclxuICAgIC8vIGhlaWdodDphdXRvO1xyXG4gICAgXHJcbiAgICB1bCx1bDpob3ZlciB7XHJcbiAgICAgIFxyXG4gICAgICBsaSxsaTpob3ZlciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZTtcclxuICAgICAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246bm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOm5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutComponent = /** @class */ (function () {
    function AboutComponent(route, router, contentService, http) {
        this.route = route;
        this.router = router;
        this.contentService = contentService;
        this.http = http;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showA = true;
        this.showB = false;
        // const aboutData = this.route.snapshot.data['about'];
        // this.about = this.contentService.abouts[aboutData];
        this.http.get('../../assets/info.txt').subscribe(function (data) {
            // console.log(data.text());
            _this.fin = data.text().toString();
        });
    };
    AboutComponent.prototype.mouseEnter = function (div) {
        console.log("mouse enter : " + div);
        this.showB = true;
        this.showA = false;
    };
    AboutComponent.prototype.mouseLeave = function (div) {
        console.log('mouse leave :' + div);
        this.showB = false;
        this.showA = true;
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            // animations: [verticalTransitions],
            // host: { '[@verticalTransitions]': '' },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes, AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-home/main-home.component */ "./src/app/main-home/main-home.component.ts");
/* harmony import */ var _shared_accrodion_accrodion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/accrodion/accrodion.component */ "./src/app/shared/accrodion/accrodion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], data: { animation: 'home' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { animation: 'about' } },
    { path: 'contact', component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], data: { animation: 'contact' } },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], data: { animation: 'resume' } },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
                // RouterModule.forRoot(
                //   appRoutes,
                //   { enableTracing: true } // <-- debugging purposes only
                // )
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_6__["MainHomeComponent"], _shared_accrodion_accrodion_component__WEBPACK_IMPORTED_MODULE_7__["AccrodionComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n    position: fixed;\r\n    z-index: 1;\r\n    overflow-x: auto;\r\n    background-color: #000000;\r\n    height: 6%;\r\n    opacity: 1;\r\n  }\r\n  \r\n  md-toolbar-row {\r\n    justify-content:space-between;\r\n  }\r\n  \r\n  .pointer-cursor{\r\n  cursor: pointer;\r\n}\r\n  \r\n  .spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .link_social a{\r\n\t  margin: 0 10px;\r\n    padding: 0px;\r\n    color: white;\r\n  }\r\n  \r\n  .link_social a, .intro-social li a:visited {\r\n    color: #FFFFFF;\r\n  }\r\n  \r\n  .link_social a:hover, .intro-social li a:focus {\r\n    color: #49a8f5;\r\n  }\r\n  \r\n  a.active {\r\n    background-color: #49a8f5;\r\n    color:#ffffff;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: \"Harabara Bold\";\r\n    src: url('Raleway-Black.ttf');\r\n  }\r\n  \r\n  a {\r\n    font-style: 'Harabara Bold',sans-serif;\r\n    text-align: center; \r\n    text-decoration: none;\r\n    color: rgb(255, 255, 255);\r\n  }\r\n  \r\n  h1 {\r\n    margin: 0;\r\n  }\r\n  \r\n  h1 .light {\r\n    font-weight: 50;\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFdBQVc7R0FDWjs7RUFFRDtJQUNFLDhCQUE4QjtHQUMvQjs7RUFFSDtFQUNFLGdCQUFnQjtDQUNqQjs7RUFDQztJQUNFLGVBQWU7R0FDaEI7O0VBRUQ7R0FDQyxlQUFlO0lBQ2QsYUFBYTtJQUNiLGFBQWE7R0FDZDs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7O0VBQ0Q7SUFDRSxlQUFlO0dBQ2hCOztFQUdEO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7R0FDZjs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3Qiw4QkFBc0Q7R0FDdkQ7O0VBRUQ7SUFDRSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwwQkFBMEI7R0FDM0I7O0VBQ0Q7SUFDRSxVQUFVO0dBQ1g7O0VBRUQ7SUFDRSxnQkFBZ0I7R0FDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGhlaWdodDogNiU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBtZC10b29sYmFyLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbi5wb2ludGVyLWN1cnNvcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxpbmtfc29jaWFsIGF7XHJcblx0ICBtYXJnaW46IDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5saW5rX3NvY2lhbCBhLCAuaW50cm8tc29jaWFsIGxpIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLmxpbmtfc29jaWFsIGE6aG92ZXIsIC5pbnRyby1zb2NpYWwgbGkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzQ5YThmNTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OWE4ZjU7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhhcmFiYXJhIEJvbGRcIjtcclxuICAgIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL3JhbGV3YXkvUmFsZXdheS1CbGFjay50dGZcIik7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGZvbnQtc3R5bGU6ICdIYXJhYmFyYSBCb2xkJyxzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaDEgLmxpZ2h0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDtcclxuICB9XHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"> \n\n<mat-toolbar>\n  <!-- <h1><span class=\"light\">KISHORE </span>BLOG</h1> -->\n  <!-- <span class=\"spacer\"></span> -->\n  <a mat-button\n  [routerLink]=\"['/home']\"\n  routerLinkActive=\"active\">HOME</a>\n  <a mat-button\n  [routerLink]=\"['/about']\"\n  routerLinkActive=\"active\" [ngStyle]=\"{'background-color': color}\">ABOUT</a>\n  <a mat-button\n  [routerLink]=\"['/contact']\"\n  routerLinkActive=\"active\">CONTACT</a>\n  <span class=\"spacer\"></span>\n  <div class=\"link_social pointer-cursor\">\n  <a (click) = \"redirect_social('linkedin')\" matTooltip = \"LinkedIn\" [ngStyle]=\"{'background-color': color}\"><i class=\"fa fa-linkedin-square\"></i></a>\n  <a (click) = \"redirect_social('github')\" matTooltip = \"GitHub\"><i class=\"fa fa-github\"></i></a>\n  <a (click) = \"redirect_social('twitter')\" matTooltip = \"Twitter\"><i class=\"fa fa-twitter\"></i></a>\n  <a (click) = \"redirect_social('instagram')\" matTooltip = \"Instagram\"><i class=\"fa fa-instagram\"></i></a>\n</div>\n</mat-toolbar>\n<!-- <div background-image=\"assets/bg.jpg\"> -->\n\n  <div [@slideInOut]=\"triggerAnimation(route)\">\n    <router-outlet #route=\"outlet\"></router-outlet>\n  </div>\n<!-- </div> -->\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(deviceService, router) {
        var _this = this;
        this.deviceService = deviceService;
        this.router = router;
        this.title = 'Kishore Blog';
        this.propsToShow = ['userAgent', 'os', 'browser', 'device', 'os_version', 'browser_version'];
        this.deviceInfo = null;
        this.currentURL = null;
        this.color = 'blue';
        this.deviceInfo = deviceService.getDeviceInfo();
        // console.log(this.deviceInfo)
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // console.log("current url",event.url); // event.url has current url
                _this.currentURL = event.url;
                // your code will goes here
                if (_this.currentURL.match('/about')) {
                    _this.color = '#BCA136';
                }
                else
                    _this.color = 'black';
            }
        });
    }
    //   ngOnInit() {
    //     let currentUrl = this.router.url; /// this will give you current url
    //     console.log("Current URL: "+currentUrl);
    //     // your logic to know if its my home page.
    // } 
    AppComponent.prototype.getPage = function (outlet) {
        console.log("Outlet: " + outlet.activatedRouteData['page']);
        return outlet.activatedRouteData['page'] || 'one';
    };
    AppComponent.prototype.triggerAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    Object.defineProperty(AppComponent.prototype, "isMobile", {
        get: function () {
            return this.deviceService.isMobile();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isTablet", {
        get: function () {
            return this.deviceService.isTablet();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isDesktop", {
        get: function () {
            return this.deviceService.isDesktop();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.redirect_social = function (name) {
        // console.log(name);
        if (name === 'linkedin')
            window.open("https://www.linkedin.com/in/chandrakishoredanduri", "_blank");
        else if (name === 'github')
            window.open("https://github.com/Kishore180994", "_blank");
        else if (name === 'twitter')
            window.open("https://twitter.com/chandrakishore1", "_blank");
        else if (name === 'instagram')
            window.open("https://www.instagram.com/kishore189/", "_blank");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                // trigger('animRoutes', [
                //   transition('* <=> *', [
                //     group([
                //       query(
                //         ':enter',
                //         [
                //           style({
                //             opacity: 0,
                //             transform: 'translateY(9rem) rotate(-10deg)'
                //           }),
                //           animate(
                //             '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                //             style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
                //           ),
                //           animateChild()
                //         ],
                //         { optional: true }
                //       ),
                //       query(
                //         ':leave',
                //         [animate('0.35s', style({ opacity: 0 })), animateChild()],
                //         { optional: true }
                //       )
                //     ])
                //   ])
                // ])
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *, :enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ position: 'absolute', width: '100%' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(100vw)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0vw)' }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    transform: 'translateY(-100vw)'
                                }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    transform: 'translateY(0vw)'
                                }))
                            ], { optional: true })
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialMode, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialMode", function() { return MaterialMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_directives_fullpage_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/directives/fullpage.directive */ "./src/app/shared/directives/fullpage.directive.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialMode = /** @class */ (function () {
    function MaterialMode() {
    }
    MaterialMode = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
            ],
            declarations: []
        })
    ], MaterialMode);
    return MaterialMode;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_directives_fullpage_directive__WEBPACK_IMPORTED_MODULE_5__["FullpageDirective"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                MaterialMode,
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = ":host {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.pointer-cursor{\r\n    cursor: pointer;\r\n}\r\n\r\nmat-card {\r\n    width:500px;\r\n    background: rgba(255,255,255,0.9);\r\n}\r\n\r\nmat-card-header {\r\n    color: #ff0000;\r\n}\r\n\r\nmat-card-content {\r\n    padding: 8px;\r\n}\r\n\r\n#intro {\r\n    background: #151515 url('sw3.jpg') center;\r\n    background-size: 140% 140%;\r\n    background-attachment: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    display: table;\r\n    position: fixed;\r\n    text-align: center;\r\n}\r\n\r\n.intro-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #111111;\r\n    opacity: .55;\r\n}\r\n\r\n.intro-content {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    -webkit-transform: translateY(-2.1rem);\r\n    transform: translateY(-2.1rem);\r\n}\r\n\r\n@font-face {\r\n    font-family: \"spartan\";\r\n    src: url('LeagueSpartan-Bold.otf') format(\"truetype\");\r\n  }\r\n\r\n.intro-content h1 {\r\n    color: rgb(255, 255, 255);\r\n    font-family: \"spartan\",sans-serif;\r\n    font-size: 10rem;\r\n    line-height: 1.071;\r\n    max-width: 900px;\r\n    margin-top: 0;\r\n    margin-bottom: .6rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.intro-content h2 {\r\n    color:#119dfaa4;\r\n    font-family: \"poppins-medium\", sans-serif;\r\n    font-size: 2.3rem;\r\n    line-height: 1.071;\r\n    max-width: 900px;\r\n    margin-top: 1.5rem;\r\n    margin-bottom: 3.5rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.intro-content h5 {\r\n    color: #ffffff;\r\n    font-family: \"spartan\",sans-serif;\r\n    font-size: 135%;\r\n    line-height: 1.565;\r\n    margin-bottom: 0;\r\n    text-transform: uppercase;\r\n    letter-spacing: .3rem;\r\n    text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.intro-content .intro-position {\r\n    font-family: \"lora-regular\", serif;\r\n    font-size: 70%;\r\n    line-height: 2.8rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .2rem;\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.intro-content .intro-position span {\r\n    display: inline-block;\r\n}\r\n\r\n.intro-content .intro-position span::after {\r\n    content: \"|\";\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding: 0 8px 0 14px;\r\n    color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.intro-content .intro-position span:first-child::before {\r\n    content: \"|\";\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding: 0 14px 0 8px;\r\n    color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.intro-content .button {\r\n    color: #FFFFFF ;\r\n    border-color: rgba(255, 255, 255, 0.3);\r\n    height: 3.4rem;\r\n    line-height: 3.4rem ;\r\n    padding: 0 1.5rem 0 1.5rem;\r\n    margin-top: .6rem;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .25rem;\r\n}\r\n\r\n.intro-content .button:hover, .intro-content .button:focus {\r\n    border-color: #49a8f5;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.intro-content .button::after {\r\n    display: inline-block;\r\n    content: \"\\f107\";\r\n    color: #FFFFFF;\r\n    font-family: fontAwesome;\r\n    font-size: 1rem;\r\n    line-height: inherit;\r\n    text-align: center;\r\n    position: relative;\r\n    left: 1.2rem;\r\n}\r\n\r\n.intro-social {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 15%;\r\n    font-size: 2.5rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.intro-social li {\r\n    display: inline-block;\r\n    margin: 0 1%;\r\n    padding: 0;\r\n}\r\n\r\n.intro-social li a, .intro-social li a:visited {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.intro-social li a:hover, .intro-social li a:focus {\r\n    color: #49a8f5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7Q0FDckM7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLDBDQUE0RDtJQUc1RCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFFdkMsK0JBQStCO0NBQ2xDOztBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNEQUF1RTtHQUN4RTs7QUFDSDtJQUNJLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix3Q0FBd0M7Q0FDM0M7O0FBQ0Q7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQix3Q0FBd0M7Q0FDM0M7O0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsZ0NBQWdDO0NBQ25DOztBQUNEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGdDQUFnQztDQUNuQzs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQzFCOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztDQUNkOztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksZUFBZTtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb2ludGVyLWN1cnNvcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiNpbnRybyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNTE1IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3N3My5qcGcpIGNlbnRlcjtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTQwJSAxNDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnRyby1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgICBvcGFjaXR5OiAuNTU7XHJcbn1cclxuXHJcbi5pbnRyby1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuMXJlbSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjFyZW0pO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjFyZW0pO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwic3BhcnRhblwiO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL0xlYWd1ZVNwYXJ0YW4tQm9sZC5vdGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gIH1cclxuLmludHJvLWNvbnRlbnQgaDEge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcInNwYXJ0YW5cIixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjA3MTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjZyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5pbnRyby1jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiMxMTlkZmFhNDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInBvcHBpbnMtbWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIuM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjA3MTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5pbnRyby1jb250ZW50IGg1IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwic3BhcnRhblwiLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzNSU7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3JlbTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uaW50cm8tY29udGVudCAuaW50cm8tcG9zaXRpb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwibG9yYS1yZWd1bGFyXCIsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMi44cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmludHJvLWNvbnRlbnQgLmludHJvLXBvc2l0aW9uIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5pbnRyby1jb250ZW50IC5pbnRyby1wb3NpdGlvbiBzcGFuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcInxcIjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgOHB4IDAgMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuLmludHJvLWNvbnRlbnQgLmludHJvLXBvc2l0aW9uIHNwYW46Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcInxcIjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTRweCAwIDhweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuLmludHJvLWNvbnRlbnQgLmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiA7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGhlaWdodDogMy40cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNHJlbSA7XHJcbiAgICBwYWRkaW5nOiAwIDEuNXJlbSAwIDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC42cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMjVyZW07XHJcbn1cclxuLmludHJvLWNvbnRlbnQgLmJ1dHRvbjpob3ZlciwgLmludHJvLWNvbnRlbnQgLmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0OWE4ZjU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uaW50cm8tY29udGVudCAuYnV0dG9uOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwN1wiO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEuMnJlbTtcclxufVxyXG5cclxuLmludHJvLXNvY2lhbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMTUlO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pbnRyby1zb2NpYWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaW50cm8tc29jaWFsIGxpIGEsIC5pbnRyby1zb2NpYWwgbGkgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5pbnRyby1zb2NpYWwgbGkgYTpob3ZlciwgLmludHJvLXNvY2lhbCBsaSBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNDlhOGY1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\n  <!--- basic page needs\n  ================================================== -->\n  <meta charset=\"utf-8\">\n <title>Kishore Portfolio</title>\n <meta name=\"description\" content=\"\">  \n <meta name=\"author\" content=\"Kishore\">\n\n  <!-- mobile specific metas\n  ================================================== -->\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n\n  <!-- CSS\n  ================================================== -->\n  <link rel=\"stylesheet\" href=\"assets/css/base.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/main.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"> \n\n  <!--JS - scripts-->\n  <link rel=\"javascript\" href=\"assets/js/bganim.js\">\n\n  <!-- fav icon -->\n <link rel=\"icon\" type=\"assets/image/png\" href=\"favicon.png\">\n\n</head>\n\n<body id=\"top\">  \n        <!-- intro section\n   ================================================== -->\n   <div id=\"intro\" [ngStyle]=\"setBgStyle()\" (document:mousemove)=\"onMouseMove($event)\">   \n    <div class=\"intro-overlay\"></div>\t\n    \n    <div class=\"intro-content\">\n      <div class=\"row\">\n\n        <div class=\"col-twelve\">\n\n          <h5>Chandra Kishore Danduri</h5>\n          <!-- <h2>Chandra Kishore Danduri</h2> -->\n\n          <p class=\"intro-position\">\n            <span>Java Developer</span>\n            <span>Front End Developer</span>\n            <span>UI/UX Designer</span> \n            <span>C# Developer</span> \n            <span>Game/Unity Developer</span> \n            <span>Data Analyst</span>\n          </p>\n          <a class=\"button stroke smoothscroll\" (click)=scrollToElement()>More About Me</a>\n          \n        </div>  \n        \n      </div>   \t\t \t\t\n    </div> <!-- /intro-content --> \n    <ul class=\"intro-social pointer-cursor\">       \n        <li><a (click) = \"redirect_social('linkedin')\" matTooltip = \"LinkedIn\"><i class=\"fa fa-linkedin-square\"></i></a></li>\n        <li><a (click) = \"redirect_social('github')\" matTooltip = \"GitHub\"><i class=\"fa fa-github\"></i></a></li>\n        <li><a (click) = \"redirect_social('twitter')\" matTooltip = \"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n        <li><a (click) = \"redirect_social('instagram')\" matTooltip = \"Instagram\"><i class=\"fa fa-instagram\"></i></a></li>\n     </ul> <!-- /intro-social -->      \t\n\n    </div> <!-- /intro -->\n    \n</body>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router) {
        this.route = route;
        this.router = router;
        this.console = console;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // const homeData = this.route.snapshot.data['home'];
        // this.home = this.contentService.homes[homeData];
    };
    HomeComponent.prototype.onMouseMove = function (e) {
        this.e = e;
    };
    HomeComponent.prototype.setBgStyle = function () {
        var moveX = ((this.e.x) * -1 / 5);
        var moveY = ((this.e.y) * -1 / 5);
        // console.log(moveX);
        var styles = {
            // 'background-image': 'url(../../assets/images/sw.jpg)',
            'background-position': moveX + 'px ' + moveY + 'px'
        };
        return styles;
    };
    HomeComponent.prototype.scrollToElement = function () {
        // this.router.navigate(['contact'],{relativeTo: this.route});
        this.router.navigate(['about']);
        //window.open('home','_self');
    };
    HomeComponent.prototype.redirect_social = function (name) {
        // console.log(name);
        if (name === 'linkedin')
            window.open("https://www.linkedin.com/in/chandrakishoredanduri", "_blank");
        else if (name === 'github')
            window.open("https://github.com/Kishore180994", "_blank");
        else if (name === 'twitter')
            window.open("https://twitter.com/chandrakishore1", "_blank");
        else if (name === 'instagram')
            window.open("https://www.instagram.com/kishore189/", "_blank");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-home/main-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-home/main-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n}\r\n\r\nmat-card {\r\n    width:500px;\r\n    background: rgba(255,255,255,0.9);\r\n}\r\n\r\nmat-card-header {\r\n    color: #ff0000;\r\n}\r\n\r\nmat-card-content {\r\n    padding: 8px;\r\n}\r\n\r\n.fullBg {\r\n    z-index:0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ob21lL21haW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9tYWluLWhvbWUvbWFpbi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5mdWxsQmcge1xyXG4gICAgei1pbmRleDowO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-home/main-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-home/main-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img class=\"fullBg\" [src]=\"page.image\"> -->\n\n<mat-card>\n  <mat-card-header>\n  <mat-card-title><h1>Hello</h1></mat-card-title>\n  <mat-card-subtitle>How are you?</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n  LOL!\n  </mat-card-content>\n  </mat-card>\n  <p>\n      <button (click)=scrollToElement()>More About Me</button>\n  </p>\n  "

/***/ }),

/***/ "./src/app/main-home/main-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-home/main-home.component.ts ***!
  \**************************************************/
/*! exports provided: MainHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function() { return MainHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainHomeComponent = /** @class */ (function () {
    function MainHomeComponent(route, router, contentService) {
        this.route = route;
        this.router = router;
        this.contentService = contentService;
    }
    MainHomeComponent.prototype.ngOnInit = function () {
    };
    MainHomeComponent.prototype.scrollToElement = function () {
        // this.router.navigate(['contact'],{relativeTo: this.route});
        this.router.navigate(['resume']);
        //window.open('home','_self');
    };
    MainHomeComponent.prototype.redirect_social = function (name) {
        // console.log(name);
        if (name === 'linkedin')
            window.open("https://www.linkedin.com/in/chandrakishoredanduri", "_blank");
        else if (name === 'github')
            window.open("https://github.com/Kishore180994", "_blank");
        else if (name === 'twitter')
            window.open("https://twitter.com/chandrakishore1", "_blank");
        else if (name === 'instagram')
            window.open("https://www.instagram.com/kishore189/", "_blank");
    };
    MainHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-home',
            template: __webpack_require__(/*! ./main-home.component.html */ "./src/app/main-home/main-home.component.html"),
            styles: [__webpack_require__(/*! ./main-home.component.css */ "./src/app/main-home/main-home.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]])
    ], MainHomeComponent);
    return MainHomeComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card {\r\n    width:500px;\r\n    background: rgba(255,255,255,0.9);\r\n}\r\n\r\n.mat-expansion-panel p {\r\n    color: red;\r\n    height: 50%;\r\n    width:100%;\r\n  }\r\n\r\n.mat-expansion-panel .intro{\r\n    background-color: yellow;\r\n    height: 500%;\r\n    width:100%;\r\n}\r\n\r\n.mat-expansion-panel{\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n\r\nmat-card-header {\r\n    color: #3f3434;\r\n}\r\n\r\nmat-card-content {\r\n    padding: 8px;\r\n}\r\n\r\n.fullBg {\r\n    z-index:0;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial;\r\n    color: white;\r\n}\r\n\r\n.split {\r\n    height: 100%;\r\n    width: 50%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n}\r\n\r\n.left {\r\n    left: 0;\r\n    background-color: #111;\r\n}\r\n\r\n.right {\r\n    right: 0;\r\n    background-color: red;\r\n}\r\n\r\n.centered {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztDQUNyQzs7QUFFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztHQUNaOztBQUVIO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtDQUNmOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFHRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0NBQ1g7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFFBQVE7SUFDUix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwgcCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5pbnRyb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIGhlaWdodDogNTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMzZjM0MzQ7XHJcbn1cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmZ1bGxCZyB7XHJcbiAgICB6LWluZGV4OjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwbGl0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"split left\">\n    <div class=\"centered\">\n      <img src=\"img_avatar2.png\" alt=\"Avatar woman\">\n      <h2>Jane Flex</h2>\n      <p>Some text.</p>\n    </div>\n  </div>\n  \n  <div class=\"split right\">\n    <div class=\"centered\">\n      <img src=\"img_avatar.png\" alt=\"Avatar man\">\n      {{fin}}\n      <p>Some text here too.</p>\n    </div>\n  </div> -->\n  <app-accrodion></app-accrodion>"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_accrodion_accrodion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/accrodion/accrodion.component */ "./src/app/shared/accrodion/accrodion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageComponent = /** @class */ (function () {
    // page = {
    //   title: 'Home',
    //   subtitle: 'welcome Home!',
    //   content: 'Some home content',
    //   image: 'assets/bg.jpg'
    // };
    function PageComponent(route, router, contentService) {
        this.route = route;
        this.router = router;
        this.contentService = contentService;
        this.isOpened = true;
    }
    PageComponent.prototype.ngOnInit = function () {
        console.log('contact: ngOnInit');
        // //this.page = this.contentService.pages['home'];
        // const pageData = this.route.snapshot.data['page'];
        // this.page = this.contentService.pages[pageData];
    };
    PageComponent.prototype.scrollToElement = function () {
        // this.router.navigate(['contact'],{relativeTo: this.route});
        this.router.navigate(['home']);
        //window.open('home','_self');
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_accrodion_accrodion_component__WEBPACK_IMPORTED_MODULE_3__["AccrodionComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  resume works!\n</p>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/shared/accrodion/accrodion.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/accrodion/accrodion.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-heading{\r\n    background-color: #3498db;\r\n    border-bottom: 1px solid #258cd1;\r\n    text-align: center;\r\n    font-weight: 300;\r\n    padding: 2em;\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    -webkit-transition: background-color 0.5s \r\n}\r\n.panel-heading:before{\r\n    content: \"+\";\r\n    font-size: 1.5em;\r\n    line-height: 0.5em;\r\n    float: left;\r\n    transition: -webkit-transform 0.3s ease-in-out;\r\n    transition: transform 0.3s ease-in-out;\r\n    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\r\n}\r\n.panel-heading:hover{\r\n    background-color: #2980b9;\r\n}\r\n.pointer-cursor{\r\n    cursor: pointer;\r\n}\r\n.panel-body{\r\n    min-height: 20rem;\r\n}\r\n.mat-panel-description{\r\n    height: 40rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FjY3JvZGlvbi9hY2Nyb2Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUNBQXlDO0NBQzVDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osK0NBQXVDO0lBQXZDLHVDQUF1QztJQUF2QywyRUFBdUM7Q0FDMUM7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWNjcm9kaW9uL2FjY3JvZGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWhlYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNThjZDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIFxyXG59XHJcbi5wYW5lbC1oZWFkaW5nOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiK1wiO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xyXG59XHJcbi5wb2ludGVyLWN1cnNvcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhbmVsLWJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcclxufVxyXG5cclxuLm1hdC1wYW5lbC1kZXNjcmlwdGlvbntcclxuICAgIGhlaWdodDogNDByZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/accrodion/accrodion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/accrodion/accrodion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"panel-primary\">\n<div class=\"panel-heading pointer-cursor\" (click)=\"expandPanel()\">This is the heading</div>\n<div class=\"panel-body\" [hidden]=\"panelExpanded\">Hey Buddy</div>\n</div> -->\n\n<mat-accordion>\n\n    <mat-expansion-panel >\n      <mat-expansion-panel-header>\n        This is the expansion 1 title\n      </mat-expansion-panel-header>\n    <p [innerHTML]=\"fin\"></p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        This is the expansion 2 title\n      </mat-expansion-panel-header>\n  \n      This the expansion 2 content\n  \n    </mat-expansion-panel>\n  \n  </mat-accordion>"

/***/ }),

/***/ "./src/app/shared/accrodion/accrodion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accrodion/accrodion.component.ts ***!
  \*********************************************************/
/*! exports provided: AccrodionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccrodionComponent", function() { return AccrodionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccrodionComponent = /** @class */ (function () {
    function AccrodionComponent(http) {
        this.http = http;
        this.panelExpanded = true;
    }
    AccrodionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const aboutData = this.route.snapshot.data['about'];
        // this.about = this.contentService.abouts[aboutData];
        this.http.get('../../assets/info.txt').subscribe(function (data) {
            // console.log(data.text());
            _this.fin = data.text().toString();
        });
    };
    AccrodionComponent.prototype.expandPanel = function () {
        this.panelExpanded = !(this.panelExpanded);
    };
    AccrodionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accrodion',
            template: __webpack_require__(/*! ./accrodion.component.html */ "./src/app/shared/accrodion/accrodion.component.html"),
            styles: [__webpack_require__(/*! ./accrodion.component.css */ "./src/app/shared/accrodion/accrodion.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AccrodionComponent);
    return AccrodionComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/fullpage.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/fullpage.directive.ts ***!
  \*********************************************************/
/*! exports provided: FullpageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullpageDirective", function() { return FullpageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullpageDirective = /** @class */ (function () {
    function FullpageDirective(element) {
        this.element = element;
    }
    FullpageDirective.prototype.onResize = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.onLoad = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.resize = function () {
        var bgwidth = this.element.nativeElement.width;
        var bgheight = this.element.nativeElement.height;
        var winwidth = window.innerWidth;
        var winheight = window.innerHeight;
        var widthratio = winwidth / bgwidth;
        var heightratio = winheight / bgheight;
        var widthdiff = heightratio * bgwidth;
        var heightdiff = widthratio * bgheight;
        if (heightdiff > winheight) {
            this.element.nativeElement.width = winwidth;
            this.element.nativeElement.height = heightdiff;
        }
        else {
            this.element.nativeElement.width = widthdiff;
            this.element.nativeElement.height = winheight;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullpageDirective.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('load', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullpageDirective.prototype, "onLoad", null);
    FullpageDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFullpage]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullpageDirective);
    return FullpageDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/content.service.ts ***!
  \****************************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentService = /** @class */ (function () {
    // pages: Object = {
    //   //Defining Variables
    //   'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg.jpg'},
    //   'contact': {title: 'Chandra Kishore Danduri', subtitle: '(937) 829-2112', content: 'kishore.vds60@gmail.com', image: 'assets/intro-bg.jpg'}
    // };
    // abouts: Object = {  
    // }
    // homes:Object = {
    // }
    function ContentService() {
    }
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
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

module.exports = __webpack_require__(/*! C:\Users\Kishore\Documents\GitHub\newportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map