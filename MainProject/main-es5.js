function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n  <mat-toolbar color=\"primary\">\n    \n    <mat-toolbar-row>\n      <!--  <span>HOME</span> --><div style=\"margin-left: 150px;\">\n      <form class=\"example\" action=\"action_page.php\">\n        <input type=\"text\" placeholder=\"Search..\" name=\"search\">\n        <button type=\"submit\" (click)=\"alertt()\"><i class=\"fa fa-search\"></i></button>\n      </form>\n      </div>\n       <span class=\"spacer\"></span>\n\n\n       <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- The form -->\n\n\n\n      <a mat-button routerLink=\"/sell\">Sell a Product</a>\n      <a mat-button routerLink=\"/buy\">Buy a Product</a>\n       <a mat-button routerLink=\"/register\">Register/Login</a>\n   \n    </mat-toolbar-row>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</body>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuyBuyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <style>\n    .card {\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n      transition: 0.3s;\n      width: 40%;\n      padding: 20px;\n  word-spacing: normal;\n    }\n    \n    .card:hover {\n      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n    }\n    \n    .container {\n      padding: 2px 16px;\n    }\n    </style>\n    </head>\n    <body>\n        <mat-toolbar>\n            <span style=\"margin-left: 670px;\"> Buy A Product </span>\n          </mat-toolbar>\n          <br>\n          <br>\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Mobiles</div>\n            <div class=\"panel-body\">\n                <div class=\"app\">\n\n                    <div class=\"card\" *ngFor=\"let obj of Mobilearray\">\n                     <!-- <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div> -->\n                      <img [src]=\"obj.imglink\" alt=\"MobileImage\" >\n                      <div class=\"textalign\"> <h3>Brand:&nbsp; &nbsp;<b>{{obj.brand}}</b></h3> </div> \n                      <div class=\"textalign\"> <h4>Product Name:&nbsp; &nbsp;<b>{{obj.title}}</b></h4> </div> \n                      <div class=\"textalign\"> <h4>Price:&nbsp; &nbsp;<b>Rs.{{obj.price}}</b></h4> </div> \n                      <div class=\"container\">\n                        \n                        <button mat-raised-button color=\"primary\"  (click)=\"desc(obj.imglink,obj.title,obj.desc,obj.price,obj.brand)\" routerLink=\"/desc\">Buy</button>\n              \n                      </div>\n                    </div>\n              \n                </div>\n            </div>\n          </div>\n\n          <br>\n          <br>\n\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Laptops/PC's</div>\n               <div class=\"panel-body\">\n                    <div class=\"app\">\n\n                        <div class=\"card\" *ngFor=\"let obj of Laptoparray\">\n                     <!-- <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div> -->\n                      <img [src]=\"obj.price\" alt=\"MobileImage\" >\n                      <!-- <div class=\"textalign\"> <h3>Brand:&nbsp; &nbsp;<b>{{obj.brand}}</b></h3> </div>  -->\n                      <div class=\"textalign\"> <h4>Product Name:&nbsp; &nbsp;<b>{{obj.brand}}</b></h4> </div> \n                      <div class=\"textalign\"> <h4>Price:&nbsp; &nbsp;<b>Rs.{{obj.title}}</b></h4> </div> \n                      <div class=\"container\">\n                        \n                        <button mat-raised-button color=\"primary\"  (click)=\"desc(obj.price,obj.brand,obj.imglink,obj.title)\" routerLink=\"/desc\">Buy</button>\n              \n                          </div>\n                        </div>\n              \n                </div>\n            </div>\n          </div>\n\n          <br>\n          <br>\n\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">LED's/LCD's/TV</div>\n            <div class=\"panel-body\">\n                <div class=\"app\">\n\n                    <div class=\"card\" *ngFor=\"let obj of Ledarray\">\n                     <!-- <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div> -->\n                      <img [src]=\"obj.imglink\" alt=\"ledImage\" >\n                      <!-- <div class=\"textalign\"> <h3>Brand:&nbsp; &nbsp;<b>{{obj.brand}}</b></h3> </div>  -->\n                      <div class=\"textalign\"> <h4>Product Name:&nbsp; &nbsp;<b>{{obj.title}}</b></h4> </div> \n                      <div class=\"textalign\"> <h4>Price:&nbsp; &nbsp;<b>Rs.{{obj.desc}}</b></h4> </div> \n                      <div class=\"container\">\n                        \n                        <button mat-raised-button color=\"primary\" (click)=\"desc(obj.imglink,obj.title,obj.price,obj.desc)\" routerLink=\"/desc\">Buy</button>\n              \n                      </div>\n                    </div>\n              \n                </div>\n            </div>\n          </div>\n\n          <br>\n          <br>\n\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">HardDisks/Printers</div>\n            <div class=\"panel-body\">\n                <div class=\"app\">\n\n                    <div class=\"card\" *ngFor=\"let obj of Printerarray\">\n                     <!-- <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div> -->\n                      <img [src]=\"obj.imglink\" alt=\"printer/harddisk Image\" >\n                      <!-- <div class=\"textalign\"> <h3>Brand:&nbsp; &nbsp;<b>{{obj.brand}}</b></h3> </div>  -->\n                      <div class=\"textalign\"> <h4>Product Name:&nbsp; &nbsp;<b>{{obj.title}}</b></h4> </div> \n                      <div class=\"textalign\"> <h4>Price:&nbsp; &nbsp;<b>Rs.{{obj.price}}</b></h4> </div> \n                      <div class=\"container\">\n                        \n                        <button mat-raised-button color=\"primary\"  (click)=\"desc(obj.imglink,obj.title,obj.desc,obj.price)\" routerLink=\"/desc\">Buy</button>\n              \n                      </div>\n                    </div>\n              \n                </div>\n            </div>\n          </div>\n\n          <br>\n          <br>\n\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">Cameras</div>\n           \n\n            <div class=\"panel-body\">\n                <div class=\"app\">\n\n                    <div class=\"card\" *ngFor=\"let obj of Cameraarray\">\n                     <!-- <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div> -->\n                      <img [src]=\"obj.price\" alt=\"MobileImage\" >\n                      <!-- <div class=\"textalign\"> <h3>Brand:&nbsp; &nbsp;<b>{{obj.imglink}}</b></h3> </div>  -->\n                      <div class=\"textalign\"> <h4>Product Name:&nbsp; &nbsp;<b>{{obj.brand}}</b></h4> </div> \n                      <div class=\"textalign\"> <h4>Price:&nbsp; &nbsp;<b>Rs.{{obj.title}}</b></h4> </div> \n                      <div class=\"container\">\n                        \n                        <button mat-raised-button color=\"primary\"  (click)=\"desc(obj.price,obj.brand,obj.desc,obj.title,obj.imglink)\" routerLink=\"/desc\">Buy</button>\n              \n                      </div>\n                    </div>\n              \n                </div>\n            </div>\n          </div>\n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cameras/cameras.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cameras/cameras.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCamerasCamerasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post Your Advertisement</span>\n      </mat-toolbar>\n    \n      <h1 style=\"margin-left:350px\"> You have selected Camera and Lenses Category</h1>\n      <mat-card class=\"my-card\">\n        <mat-card-content>\n           <form class=\"camera-form\" (submit)=\"OnSubmit(camera)\" #camera=\"ngForm\">\n              \n\n            <mat-label style=\"color: blue;\">Brand Name*</mat-label>\n            <mat-form-field class=\"full-width\">\n                <mat-select [(value)]=\"selected\" type=\"text\" [(ngModel)]=\"brand\" name=\"brand\" required >\n                  <mat-option value=\"Canon\">Canon</mat-option>\n                  <mat-option value=\"Nikon\">Nikon</mat-option>\n                  <mat-option value=\"FujiFilm\">FujiFilm</mat-option>\n                  <mat-option value=\"Sony\">Sony</mat-option>\n                  <mat-option value=\"Panasonic\">Panasonic</mat-option>\n                  <mat-option value=\"Olympus\">Olympus</mat-option>\n                  <mat-option value=\"Others\">Others</mat-option>\n                </mat-select>\n                <!-- <mat-error *ngIf=\"brand.invalid\">Choose a brand</mat-error> -->\n              </mat-form-field>\n              \n              <p>You selected: {{selected}}</p>\n\n\n    \n              <br>\n              <br>\n              <mat-label style=\"color: blue;\">Ad Title*</mat-label>\n              &nbsp;&nbsp;&nbsp;\n              <mat-form-field class=\"half-width\">\n                <input matInput placeholder=\"Ad Title\" value=\"LG\" [(ngModel)]=\"title\" name=\"title\" maxlength=\"30\" required>\n            <!-- <mat-error *ngIf=\"title.invalid\">Incorrect Title</mat-error>  -->\n            </mat-form-field>\n            \n\n            \n\n            <br>\n            <br>\n            <mat-label style=\"color: blue;\">Description*</mat-label>\n       \n                <mat-form-field class=\"full-width\">\n                  <input matInput maxlength=\"256\" placeholder=\"Ex. This Camera is in amazing condition..........\" name=\"desc\" [(ngModel)]=\"desc\" required minlength=\"10\" >\n                  <mat-hint align=\"start\"><strong>Give complete info about your device condition....</strong> </mat-hint>\n                  <!-- <mat-error *ngIf=\"desc.invalid\">Description should be atleast of 50 words.</mat-error> -->\n                </mat-form-field>\n             \n\n                <br>\n                <br>\n                <mat-label style=\"color: blue;\">Price*</mat-label>\n                &nbsp;&nbsp;&nbsp;\n                <mat-form-field class=\"half-width\">\n                  <input matInput placeholder=\"Price(Rs.)\" value=\"10000\" [(ngModel)]=\"price\" name=\"price\"  pattern=\"\\d*\" required>\n              <!-- <mat-error *ngIf=\"price.invalid\">Invalid Price</mat-error>  -->\n              </mat-form-field>\n\n\n              <br>\n              <br>\n\n\n              <mat-label style=\"color: blue;\">Upload an Image*</mat-label>\n               \n              <input type=\"file\" (change)=\"onselect($event)\">\n              \n            <br>\n\n\n            </form>\n        </mat-card-content>\n        <mat-card-actions>\n           <button mat-raised-button type=\"submit\" (click)=sm(brand,title,price,desc) color=\"primary\">Submit details</button>\n        </mat-card-actions>\n     </mat-card>\n\n\n      \n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDescDescComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    \n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    <title>eCommerce Product Detail</title>\n    <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\" rel=\"stylesheet\">\n\n  </head>\n\n  <body>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"container-fliud\">\n\t\t\t\t<div class=\"wrapper row\">\n\t\t\t\t\t<div class=\"preview col-md-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"preview-pic tab-content\">\n\t\t\t\t\t\t  <div class=\"tab-pane active\" id=\"pic-1\"><img [src]=\"product[3]\" /></div>\n\t\t\t\t\t\t  <!-- <div class=\"tab-pane\" id=\"pic-2\"><img src=\"http://placekitten.com/400/252\" /></div>\n\t\t\t\t\t\t  <div class=\"tab-pane\" id=\"pic-3\"><img src=\"http://placekitten.com/400/252\" /></div>\n\t\t\t\t\t\t  <div class=\"tab-pane\" id=\"pic-4\"><img src=\"http://placekitten.com/400/252\" /></div>\n\t\t\t\t\t\t  <div class=\"tab-pane\" id=\"pic-5\"><img src=\"http://placekitten.com/400/252\" /></div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <ul class=\"preview-thumbnail nav nav-tabs\">\n\t\t\t\t\t\t  <li class=\"active\"><a data-target=\"#pic-1\" data-toggle=\"tab\"><img src=\"http://placekitten.com/200/126\" /></a></li>\n\t\t\t\t\t\t  <li><a data-target=\"#pic-2\" data-toggle=\"tab\"><img src=\"http://placekitten.com/200/126\" /></a></li>\n\t\t\t\t\t\t  <li><a data-target=\"#pic-3\" data-toggle=\"tab\"><img src=\"http://placekitten.com/200/126\" /></a></li>\n\t\t\t\t\t\t  <li><a data-target=\"#pic-4\" data-toggle=\"tab\"><img src=\"http://placekitten.com/200/126\" /></a></li>\n\t\t\t\t\t\t  <li><a data-target=\"#pic-5\" data-toggle=\"tab\"><img src=\"http://placekitten.com/200/126\" /></a></li>\n\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"details col-md-6\">\n\t\t\t\t\t\t<h3 class=\"product-title\">{{product[0]}}</h3>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<div class=\"stars\">\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <span class=\"review-no\">41 reviews</span> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"product-description\" >{{product[4]}}&nbsp;{{product[2]}}</p>\n\t\t\t\t\t\t<h4 class=\"price\">current price: <span>Rs.{{product[1]}}</span></h4>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- <h5 class=\"sizes\">sizes:\n\t\t\t\t\t\t\t<span class=\"size\" data-toggle=\"tooltip\" title=\"small\">s</span>\n\t\t\t\t\t\t\t<span class=\"size\" data-toggle=\"tooltip\" title=\"medium\">m</span>\n\t\t\t\t\t\t\t<span class=\"size\" data-toggle=\"tooltip\" title=\"large\">l</span>\n\t\t\t\t\t\t\t<span class=\"size\" data-toggle=\"tooltip\" title=\"xtra large\">xl</span>\n\t\t\t\t\t\t</h5> -->\n\t\t\t\t\t\t<!-- <h5 class=\"colors\">colors:\n\t\t\t\t\t\t\t<span class=\"color orange not-available\" data-toggle=\"tooltip\" title=\"Not In store\"></span>\n\t\t\t\t\t\t\t<span class=\"color green\"></span>\n\t\t\t\t\t\t\t<span class=\"color blue\"></span>\n\t\t\t\t\t\t</h5> -->\n\t\t\t\t\t\t<div class=\"action\">\n\t\t\t\t\t\t\t<button class=\"add-to-cart btn btn-default\" routerLink=\"/thnx\" type=\"button\">Buy</button>\n\t\t\t\t\t\t\t<!-- <button class=\"like btn btn-default\" type=\"button\"><span class=\"fa fa-heart\"></span></button> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </body>\n</html>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/laptop/laptop.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/laptop/laptop.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLaptopLaptopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post Your Advertisement</span>\n      </mat-toolbar>\n    \n      <h1 style=\"margin-left:350px\"> You have selected Desktop and Laptop Category</h1>\n      <mat-card class=\"my-card\">\n        <mat-card-content>\n           <form class=\"laptop-form\" (submit)=\"OnSubmit(laptop)\" #laptop=\"ngForm\">\n              \n            <mat-label style=\"color: blue;\">Brand Name*</mat-label>\n            <mat-form-field class=\"full-width\">\n                <mat-select [(value)]=\"selected\" type=\"text\" [(ngModel)]=\"brand\" name=\"brand\" required >\n                  <mat-option value=\"Apple\">Apple</mat-option>\n                  <mat-option value=\"hp\">HP</mat-option>\n                  <mat-option value=\"asus\">ASUS</mat-option>\n                  <mat-option value=\"msi\">MSI</mat-option>\n                  <mat-option value=\"Acer\">Acer</mat-option>\n                  <mat-option value=\"Dell\">Dell</mat-option>\n                  <mat-option value=\"Lenovo\">Lenovo</mat-option>\n                  <mat-option value=\"Microsoft\">Microsoft</mat-option>\n                  <mat-option value=\"Huawei\">Huawei</mat-option>\n                  <mat-option value=\"Xiaomi\">Xiaomi</mat-option>\n                  <mat-option value=\"Samsung\">Samsung</mat-option>\n                  <mat-option value=\"MicroMax\">MicroMax</mat-option>\n                  <mat-option value=\"HCL\">HCL</mat-option>\n                  <mat-option value=\"Wipro\">Wipro</mat-option>\n                  <mat-option value=\"Lg\">LG</mat-option>\n                  <mat-option value=\"Sony\">Sony</mat-option>\n                  <mat-option value=\"HTC\">HTC</mat-option>\n                  <mat-option value=\"Lava\">Lava</mat-option>\n                  <mat-option value=\"Toshiba\">Toshiba</mat-option>\n                  <mat-option value=\"iBall\">iBall</mat-option>\n                  <mat-option value=\"Others\">Others</mat-option>\n                </mat-select>\n                <!-- <mat-error *ngIf=\"brand.invalid\">Choose a br/and</mat-error> -->\n              </mat-form-field>\n              \n              <p>You selected: {{selected}}</p>\n\n\n              <br>\n              <br>\n              <mat-label style=\"color: blue;\">Ad Title*</mat-label>\n              &nbsp;&nbsp;&nbsp;\n              <mat-form-field class=\"half-width\">\n                <input matInput placeholder=\"Ad Title\" value=\"HP Ideapad 360\" [(ngModel)]=\"title\" name=\"title\"  maxlength=\"50\" required>\n            <!-- <mat-error *ngIf=\"title.invalid\">Incorrect Title</mat-error>  -->\n            </mat-form-field>\n            \n\n            \n\n            <br>\n            <br>\n            <mat-label style=\"color: blue;\">Description*</mat-label>\n       \n                <mat-form-field class=\"full-width\">\n                  <input matInput maxlength=\"256\" placeholder=\"Ex. This Desktop/Laptop is in amazing condition..........\" name=\"desc\" [(ngModel)]=\"desc\" required minlength=\"10\">\n                  <mat-hint align=\"start\"><strong>Give complete info about your device condition....</strong> </mat-hint>\n                  <!-- <mat-error *ngIf=\"desc.invalid\">Description should be atleast of 50 words.</mat-error> -->\n                </mat-form-field>\n             \n\n                <br>\n                <br>\n                <mat-label style=\"color: blue;\">Price*</mat-label>\n                &nbsp;&nbsp;&nbsp;\n                <mat-form-field class=\"half-width\">\n                  <input matInput placeholder=\"Price(Rs.)\" value=\"10000\" [(ngModel)]=\"price\" name=\"price\" pattern=\"\\d*\" required>\n              <!-- <mat-error *ngIf=\"price.invalid\">Invalid Price</mat-error>  -->\n              </mat-form-field>\n\n\n              <br>\n              <br>\n\n\n              <mat-label style=\"color: blue;\">Upload an Image*</mat-label>\n               \n              <input type=\"file\" (change)=\"onselect($event)\">\n              \n            <br>\n\n            </form>\n        </mat-card-content>\n        <mat-card-actions>\n           <button mat-raised-button type=\"submit\" (click)=\"sm(brand,title,price,desc)\" color=\"primary\">Submit details</button>\n        </mat-card-actions>\n     </mat-card>\n\n\n      \n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/led/led.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/led/led.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLedLedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post Your Advertisement</span>\n      </mat-toolbar>\n    \n      <h1 style=\"margin-left:400px\"> You have selected TV/LED/LCD Category</h1>\n      <mat-card class=\"my-card\">\n        <mat-card-content>\n           <form class=\"led-form\" (submit)=\"OnSubmit(led)\" #led=\"ngForm\">\n              \n    \n              <br>\n              <br>\n              <mat-label style=\"color: blue;\">Ad Title*</mat-label>\n              &nbsp;&nbsp;&nbsp;\n              <mat-form-field class=\"half-width\">\n                <input matInput placeholder=\"Ad Title\" value=\"LG\" [(ngModel)]=\"title\" name=\"title\" maxlength=\"30\" required>\n            <!-- <mat-error *ngIf=\"title.invalid\">Incorrect Title</mat-error>  -->\n            </mat-form-field>\n            \n\n            \n\n            <br>\n            <br>\n            <mat-label style=\"color: blue;\">Description*</mat-label>\n       \n                <mat-form-field class=\"full-width\">\n                  <input matInput maxlength=\"256\" placeholder=\"Ex. This LED is in amazing condition..........\" name=\"desc\" [(ngModel)]=\"desc\" required minlength=\"10\" >\n                  <mat-hint align=\"start\"><strong>Give complete info about your device condition....</strong> </mat-hint>\n                  <!-- <mat-error *ngIf=\"desc.invalid\">Description should be atleast of 50 words.</mat-error> -->\n                </mat-form-field>\n             \n\n                <br>\n                <br>\n                <mat-label style=\"color: blue;\">Price*</mat-label>\n                &nbsp;&nbsp;&nbsp;\n                <mat-form-field class=\"half-width\">\n                  <input matInput placeholder=\"Price(Rs.)\" value=\"10000\" [(ngModel)]=\"price\" name=\"price\"  pattern=\"\\d*\" required>\n              <!-- <mat-error *ngIf=\"price.invalid\">Invalid Price</mat-error>  -->\n              </mat-form-field>\n\n              <br>\n              <br>\n\n\n              <mat-label style=\"color: blue;\">Upload an Image*</mat-label>\n               \n              <input type=\"file\" (change)=\"onselect($event)\" >\n             \n            <br>\n\n            </form>\n        </mat-card-content>\n        <mat-card-actions>\n           <button mat-raised-button type=\"submit\" (click)=\"sm(title,price,desc)\" color=\"primary\">Submit details</button>\n        </mat-card-actions>\n     </mat-card>\n\n\n      \n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-component/login-component.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-component/login-component.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginComponentLoginComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"tool-bar\">\n    <span>LOGIN</span>\n  </mat-toolbar>\n  <mat-card class=\"my-card\">\n     <mat-card-content>\n        <form class=\"my-form\">\n           <mat-form-field class=\"full-width\">\n              <mat-label>Email</mat-label>\n              <input  matInput  placeholder=\"Email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" name=\"email\" [(ngModel)]=\"email\" required >\n           </mat-form-field>\n           <mat-form-field class=\"full-width\">\n              <mat-label>Password</mat-label>\n              <input  matInput  placeholder=\"Password\"  pattern=\"^.*(?=.{7,50})(?=.*\\d)(?=.*[A-Z]).*$\" name=\"password\" type=\"password\"  [(ngModel)]=\"password\"  required>\n           </mat-form-field>\n        </form>\n     </mat-card-content>\n     <p>Don't have an account <a  routerLink=\"/register\">Register</a></p> \n     <mat-card-actions>\n        <button mat-raised-button (click)=\"login(email,password)\" color=\"primary\">LOGIN</button>\n        <br>\n        <div *ngIf=\"Userr.fname!=null\">Hello {{Userr.fname}} click this <a routerLink=\"/buy\"><button mat-raised-button (click)=\"sendMsg(Userr.fname)\" color=\"primary\">Next</button></a></div>    \n\n     </mat-card-actions>\n  </mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMobileMobileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n</head>\n\n<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post Your Advertisement</span>\n      </mat-toolbar>\n    \n      <h1 style=\"margin-left:450px\"> You have selected Mobile Category</h1>\n      <mat-card class=\"my-card\">\n        <mat-card-content>\n           <form class=\"mobile-form\" (submit)=\"OnSubmit(mobile)\" #mobile=\"ngForm\">\n              \n            <mat-label style=\"color: blue;\">Brand Name*</mat-label>\n            <mat-form-field class=\"full-width\">\n                <mat-select [(value)]=\"selected\" type=\"text\" [(ngModel)]=\"brand\" name=\"brand\" required >\n                  <mat-option value=\"iPhone\">iPhone</mat-option>\n                  <mat-option value=\"Samsung\">Samsung</mat-option>\n                  <mat-option value=\"Mi\">Mi</mat-option>\n                  <mat-option value=\"Vivo\">Vivo</mat-option>\n                  <mat-option value=\"Oppo\">Oppo</mat-option>\n                  <mat-option value=\"One Plus\">One Plus</mat-option>\n                  <mat-option value=\"Motorola\">Motorola</mat-option>\n                  <mat-option value=\"Nokia\">Nokia</mat-option>\n                  <mat-option value=\"Realme\">Realme</mat-option>\n                  <mat-option value=\"Lenovo\">Lenovo</mat-option>\n                  <mat-option value=\"Asus\">Asus</mat-option>\n                  <mat-option value=\"MicroMax\">MicroMax</mat-option>\n                  <mat-option value=\"Gionee\">Gionee</mat-option>\n                  <mat-option value=\"Honor\">Honor</mat-option>\n                  <mat-option value=\"Lava\">Lava</mat-option>\n                  <mat-option value=\"Sony\">Sony</mat-option>\n                  <mat-option value=\"HTC\">HTC</mat-option>\n                  <mat-option value=\"LG\">LG</mat-option>\n                  <mat-option value=\"Intex\">Intex</mat-option>\n                  <mat-option value=\"BlackBerry\">BlackBerry</mat-option>\n                  <mat-option value=\"Huawei\">Huawei</mat-option>\n                  <mat-option value=\"Infinix\">Infinix</mat-option>\n                  <mat-option value=\"Karbonn\">Karbonn</mat-option>\n                  <mat-option value=\"Techno\">Techno</mat-option>\n                  <mat-option value=\"GooglePixel\">GooglePixel</mat-option>\n                  <mat-option value=\"Others\">Others</mat-option>\n                </mat-select>\n                <!-- <mat-error *ngIf=\"brand.invalid\">Choose a brand</mat-error> -->\n              </mat-form-field>\n              \n              <p>You selected: {{selected}}</p>\n\n\n              <br>\n              <br>\n              <mat-label style=\"color: blue;\">Ad Title*</mat-label>\n              &nbsp;&nbsp;&nbsp;\n              <mat-form-field class=\"half-width\">\n                <input matInput placeholder=\"Ad Title\" value=\"One Plus 7\" [(ngModel)]=\"title\" name=\"title\"  maxlength=\"30\" required>\n            <!-- <mat-error *ngIf=\"title.invalid\">Incorrect Title</mat-error>  -->\n            </mat-form-field>\n            \n\n            \n\n            <br>\n            <br>\n            <mat-label style=\"color: blue;\">Description*</mat-label>\n       \n                <mat-form-field class=\"full-width\">\n                  <input matInput maxlength=\"256\" placeholder=\"Ex. This device is in amazing condition..........\" name=\"desc\" [(ngModel)]=\"desc\" required minlength=\"10\" >\n                  <mat-hint align=\"start\"><strong>Give complete info about your device condition....</strong> </mat-hint>\n                  <!-- <mat-error *ngIf=\"desc.invalid\">Description should be atleast of 50 words.</mat-error> -->\n                </mat-form-field>\n\n                <br>\n                <br>\n                <mat-label style=\"color: blue;\">Price*</mat-label>\n                &nbsp;&nbsp;&nbsp;\n                <mat-form-field class=\"half-width\">\n                  <input matInput placeholder=\"Price(Rs.)\" value=\"10000\" [(ngModel)]=\"price\" name=\"price\" pattern=\"\\d*\" required>\n              <!-- <mat-error *ngIf=\"price.invalid\">Invalid Price</mat-error>  -->\n              </mat-form-field>\n\n\n              <br>\n              <br>\n\n\n              <mat-label style=\"color: blue;\">Upload an Image*</mat-label>\n               \n              <input type=\"file\" (change)=\"onselect($event)\" >\n              \n            <br>\n              <!-- <input type=\"file\" (change)=\"onselect($event)\" multiple> -->\n              \n              \n    \n\n\n            </form>\n        </mat-card-content>\n        <mat-card-actions>\n           <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"sm(mobile,brand,title,price,desc)\">Submit details</button>\n        </mat-card-actions>\n     </mat-card>\n\n\n      \n    </body>\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/printers/printers.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/printers/printers.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrintersPrintersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post Your Advertisement</span>\n      </mat-toolbar>\n    \n      <h1 style=\"margin-left:350px\"> You have selected HardDisk and Printer Category</h1>\n      <mat-card class=\"my-card\">\n        <mat-card-content>\n           <form class=\"printer-form\" (submit)=\"OnSubmit(printer)\" #printer=\"ngForm\">\n              \n    \n              <br>\n              <br>\n              <mat-label style=\"color: blue;\">Ad Title*</mat-label>\n              &nbsp;&nbsp;&nbsp;\n              <mat-form-field class=\"half-width\">\n                <input matInput placeholder=\"Ad Title\" value=\"HP\" [(ngModel)]=\"title\" name=\"title\"  maxlength=\"30\" required>\n            <!-- <mat-error *ngIf=\"title.invalid\">Incorrect Title</mat-error>  -->\n            </mat-form-field>\n            \n\n            \n\n            <br>\n            <br>\n            <mat-label style=\"color: blue;\">Description*</mat-label>\n       \n                <mat-form-field class=\"full-width\">\n                  <input matInput maxlength=\"256\" placeholder=\"Ex. This printer or HardDisk is in amazing condition..........\" name=\"desc\" [(ngModel)]=\"desc\" required minlength=\"10\" >\n                  <mat-hint align=\"start\"><strong>Give complete info about your device condition....</strong> </mat-hint>\n                  <!-- <mat-error *ngIf=\"desc.invalid\">Description should be atleast of 50 words.</mat-error> -->\n                </mat-form-field>\n             \n\n                <br>\n                <br>\n                <mat-label style=\"color: blue;\">Price*</mat-label>\n                &nbsp;&nbsp;&nbsp;\n                <mat-form-field class=\"half-width\">\n                  <input matInput placeholder=\"Price(Rs.)\" value=\"10000\" [(ngModel)]=\"price\" name=\"price\"  pattern=\"\\d*\" required>\n              <!-- <mat-error *ngIf=\"price.invalid\">Invalid Price</mat-error>  -->\n              </mat-form-field>\n\n\n              <br>\n              <br>\n\n\n              <mat-label style=\"color: blue;\">Upload an Image*</mat-label>\n               \n              <input type=\"file\" (change)=\"onselect($event)\">\n            \n            <br>\n\n            </form>\n        </mat-card-content>\n        <mat-card-actions>\n           <button mat-raised-button type=\"submit\" (click)=\"sm(title,price,desc)\" color=\"primary\">Submit details</button>\n        </mat-card-actions>\n     </mat-card>\n     \n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration-component/registration-component.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration-component/registration-component.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationComponentRegistrationComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"tool-bar\">\n    <span>Registration</span>\n  </mat-toolbar>\n  <mat-card class=\"my-card\">\n     <mat-card-content>\n        <form class=\"my-form\" (submit)=\"OnSubmit(register)\" #register=\"ngForm\">\n            <mat-form-field class=\"half-width\">\n                   <mat-label>First Name</mat-label>\n                   <input  matInput  placeholder=\"First name\" [(ngModel)]=\"fname\" name=\"fname\"  minlength=\"2\" maxlength=\"20\" required>\n                   <mat-error *ngIf=\"fname.invalid\">Enter correct FirstName</mat-error>\n                  </mat-form-field>\n\n\n                &nbsp;&nbsp;\n                \n                \n                <mat-form-field class=\"half-width\">\n                   <mat-label>Last Name</mat-label>\n                   <input  matInput  placeholder=\"Last Name\" [(ngModel)]=\"lname\" name=\"lname\"   minlength=\"2\" maxlength=\"20\"  required>\n                   <mat-error *ngIf=\"lname.invalid\">Enter correct LastName</mat-error>\n                  </mat-form-field>\n\n                \n                <mat-form-field>\n                    <mat-label>Date of Birth</mat-label>\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"bdate\" name=\"bdate\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <!-- <mat-error *ngIf=\"bdate.invalid\">Enter Your BirthDate</mat-error> -->\n              </mat-form-field>\n             \n              \n\n              <mat-form-field class=\"full-width\">\n               <input matInput placeholder=\" Mobile Number\"  type=\"text\" pattern=\"\\d*\" required [(ngModel)]=\"Pno\" name=\"Pno\" minlength=\"10\" maxlength=\"10\"/>\n               <mat-error *ngIf=\"Pno.invalid\">Please enter your Correct Mobile number</mat-error>\n           </mat-form-field>\n\n\n\n           <mat-form-field class=\"full-width\">\n                   <mat-label>Email</mat-label>\n                   <input  matInput  placeholder=\"Email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" name=\"email\" [(ngModel)]=\"email\" required >\n                   <mat-error *ngIf=\"email.invalid\">Enter correct Email</mat-error>\n                </mat-form-field>\n\n                \n              \n                <mat-form-field class=\"full-width\">\n                   <mat-label>Password</mat-label>\n                   <input  matInput  placeholder=\"Password\"  pattern=\"^.*(?=.{7,50})(?=.*\\d)(?=.*[A-Z]).*$\" name=\"password\" type=\"password\"  [(ngModel)]=\"password\"  required>\n                   <mat-error *ngIf=\"password.invalid\">Password minlength is 8 with atleast use of 1 lower and 1 uppercase with 1 alphanumeric and a special character</mat-error>\n                  </mat-form-field>\n\n              \n              <br><br>\n                <section class=\"example-section\">\n                    <label class=\"example-margin\">Gender:</label>\n                    <mat-radio-group [(ngModel)]=\"gender\" name=\"gender\">&nbsp;\n                      <mat-radio-button class=\"example-margin\" value=\"after\" checked=\"true\" >Male</mat-radio-button>\n &nbsp;&nbsp;                     <mat-radio-button class=\"example-margin\" value=\"before\">Female</mat-radio-button>\n                      \n                    </mat-radio-group>\n                  </section>\n               \n                  \n\n                <mat-form-field class=\"full-width\">\n                    <mat-label>Address</mat-label>\n                    <input  matInput  placeholder=\"Address\" pattern=\"^[#.0-9a-zA-Z\\s,-]+$\" name=\"address\" [(ngModel)]=\"address\" required>\n                    <mat-error *ngIf=\"address.invalid\">Enter your Address</mat-error>\n                 </mat-form-field>\n         </form>\n     </mat-card-content>\n     <mat-card-actions>\n        <!--REGISTER BUTTON HERE-->\n        <p>Already have account <a  routerLink=\"/login\">Login</a></p> \n        <button mat-raised-button type=\"submit\" [disabled]=\"!register.form.valid\" (click)=sm(register,fname,lname,bdate,email,password,address,gender,Pno) color=\"primary\">REGISTER</button>\n     </mat-card-actions>\n  </mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSellSellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <style>\n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    width: 40%;\n  }\n  \n  .card:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n  \n  .container {\n    padding: 2px 16px;\n  }\n  </style>\n  </head>\n<body>\n    <mat-toolbar>\n        <span style=\"margin-left: 600px;\"> Post An Advertisement </span>\n      </mat-toolbar>\n      <div class=\"app\">\n\n      <div class=\"card\">\n       <div class=\"textalign\"><h4><b>Mobiles</b></h4> </div>\n        <img src=\"assets/m1.jpg\" alt=\"Avatar\" >\n        <div class=\"container\">\n          \n          <button mat-raised-button color=\"primary\" routerLink=\"/mobile\">Sell</button>\n\n        </div>\n      </div>\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"card\">\n        <div class=\"textalign\"><h4><b>Desktops and Laptops</b></h4>  </div> \n        <img src=\"assets/laptop and pc.png\" alt=\"Avatar\" >\n        <div class=\"container\">\n          \n          <button mat-raised-button color=\"primary\" routerLink=\"/laptop\">Sell</button>\n        </div>\n      </div>\n\n      <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"card\">\n        <img src=\"assets/m1.jpg\" alt=\"Avatar\" >\n        <div class=\"container\">\n          <h4><b>Mobiles</b></h4> \n          <a  routerLink=\"/mobile\">Sell Your Mobile</a>\n        </div>\n      </div> -->\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"card\">\n        <div class=\"textalign\">  <h4><b>TV's LED,LCD's</b></h4>   </div> \n        <img src=\"assets/led.jpg\" alt=\"Avatar\" >\n        <div class=\"container\">\n         \n        <button mat-raised-button color=\"primary\" routerLink=\"/led\">Sell</button>\n        </div>\n      </div>\n\n\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"card\">\n\n         <div class=\"textalign\"> <h4><b>Hard Disks and Printers</b></h4>   </div> \n        <img src=\"assets/Printers-and-hard-drive together.png\" alt=\"Avatar\" >\n        <div class=\"container\">\n        \n          <button mat-raised-button color=\"primary\" routerLink=\"/printers\">Sell</button>\n        </div>\n      </div>\n\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <div class=\"card\">\n          <div class=\"textalign\"><h4><b>Cameras and Lenses</b></h4>  </div> \n        <img src=\"assets/camera-2.jpeg\" alt=\"Avatar\" >\n        <div class=\"container\">\n        \n          <button mat-raised-button color=\"primary\" routerLink=\"/cameras\">Sell</button>\n        </div>\n      </div>\n\n      </div>\n    </body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thnx/thnx.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thnx/thnx.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThnxThnxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div style=\"background-image: url('assets/thnx.jpg');\"> -->\n<img src=\"assets/thnx.jpg\" width=\"1540px\" height=\"700px\">";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _registration_component_registration_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration-component/registration-component.component */
    "./src/app/registration-component/registration-component.component.ts");
    /* harmony import */


    var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-component/login-component.component */
    "./src/app/login-component/login-component.component.ts");

    var routes = [{
      path: 'register',
      component: _registration_component_registration_component_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponentComponent"]
    }, {
      path: "",
      redirectTo: 'register',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponentComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  body{\r\n      background-image: url(\"3.jpeg\");\r\n      max-width: 100%;\r\n  }\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  /* Style the search field */\r\n  form.example input[type=text] {\r\n    padding: 10px;\r\n    font-size: 17px;\r\n    border: 1px solid grey;\r\n    float: left;\r\n    width: 80%;\r\n    color:black;\r\n    background: #f1f1f1;\r\n  }\r\n  /* Style the submit button */\r\n  form.example button {\r\n    float: left;\r\n    width: 20%;\r\n    padding: 10px;\r\n    background: rgba(255, 81, 0, 0.966);\r\n    color: white;\r\n    font-size: 17px;\r\n    border: 1px solid grey;\r\n    border-left: none; /* Prevent double borders */\r\n    cursor: pointer;\r\n  }\r\n  form.example button:hover {\r\n    background: #c01355;\r\n  }\r\n  /* Clear floats */\r\n  form.example::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7RUFDQTtNQUNJLCtCQUErQjtNQUMvQixlQUFlO0VBQ25CO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQzlDLGVBQWU7RUFDakI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBLGlCQUFpQjtFQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgYm9keXtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiMy5qcGVnXCIpO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiBcclxuICAvKiBTdHlsZSB0aGUgc2VhcmNoIGZpZWxkICovXHJcbiAgZm9ybS5leGFtcGxlIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgZm9ybS5leGFtcGxlIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDgxLCAwLCAwLjk2Nik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7IC8qIFByZXZlbnQgZG91YmxlIGJvcmRlcnMgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgZm9ybS5leGFtcGxlIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzAxMzU1O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgKi9cclxuICBmb3JtLmV4YW1wbGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'MainProject';
      }

      _createClass(AppComponent, [{
        key: "alertt",
        value: function alertt() {
          alert("This functionality will be added soon...");
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _registration_component_registration_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registration-component/registration-component.component */
    "./src/app/registration-component/registration-component.component.ts");
    /* harmony import */


    var _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login-component/login-component.component */
    "./src/app/login-component/login-component.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sell/sell.component */
    "./src/app/sell/sell.component.ts");
    /* harmony import */


    var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mobile/mobile.component */
    "./src/app/mobile/mobile.component.ts");
    /* harmony import */


    var _laptop_laptop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./laptop/laptop.component */
    "./src/app/laptop/laptop.component.ts");
    /* harmony import */


    var _led_led_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./led/led.component */
    "./src/app/led/led.component.ts");
    /* harmony import */


    var _printers_printers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./printers/printers.component */
    "./src/app/printers/printers.component.ts");
    /* harmony import */


    var _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./cameras/cameras.component */
    "./src/app/cameras/cameras.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user-registration.service */
    "./src/app/user-registration.service.ts");
    /* harmony import */


    var _buy_buy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./buy/buy.component */
    "./src/app/buy/buy.component.ts");
    /* harmony import */


    var _desc_desc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./desc/desc.component */
    "./src/app/desc/desc.component.ts");
    /* harmony import */


    var _thnx_thnx_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./thnx/thnx.component */
    "./src/app/thnx/thnx.component.ts"); // import {MatToolbar} from '@angular/material';
    // import {MatButton} from '@angular/material';
    // import { MyMaterialModule } from  './material.module'


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _registration_component_registration_component_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponentComponent"], _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponentComponent"], _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"], _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_13__["MobileComponent"], _laptop_laptop_component__WEBPACK_IMPORTED_MODULE_14__["LaptopComponent"], _led_led_component__WEBPACK_IMPORTED_MODULE_15__["LedComponent"], _printers_printers_component__WEBPACK_IMPORTED_MODULE_16__["PrintersComponent"], _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__["CamerasComponent"], _buy_buy_component__WEBPACK_IMPORTED_MODULE_20__["BuyComponent"], _desc_desc_component__WEBPACK_IMPORTED_MODULE_21__["DescComponent"], _thnx_thnx_component__WEBPACK_IMPORTED_MODULE_22__["ThnxComponent"] // MyMaterialMod/ule
      ],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([{
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }, {
        path: 'register',
        component: _registration_component_registration_component_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponentComponent"]
      }, {
        path: 'login',
        component: _login_component_login_component_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponentComponent"]
      }, {
        path: 'sell',
        component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"]
      }, {
        path: 'mobile',
        component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_13__["MobileComponent"]
      }, {
        path: 'laptop',
        component: _laptop_laptop_component__WEBPACK_IMPORTED_MODULE_14__["LaptopComponent"]
      }, {
        path: 'led',
        component: _led_led_component__WEBPACK_IMPORTED_MODULE_15__["LedComponent"]
      }, {
        path: 'printers',
        component: _printers_printers_component__WEBPACK_IMPORTED_MODULE_16__["PrintersComponent"]
      }, {
        path: 'cameras',
        component: _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__["CamerasComponent"]
      }, {
        path: 'buy',
        component: _buy_buy_component__WEBPACK_IMPORTED_MODULE_20__["BuyComponent"]
      }, {
        path: 'desc',
        component: _desc_desc_component__WEBPACK_IMPORTED_MODULE_21__["DescComponent"]
      }, {
        path: 'thnx',
        component: _thnx_thnx_component__WEBPACK_IMPORTED_MODULE_22__["ThnxComponent"]
      }])],
      providers: [_user_registration_service__WEBPACK_IMPORTED_MODULE_19__["UserRegistrationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/buy/buy.component.css":
  /*!***************************************!*\
    !*** ./src/app/buy/buy.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuyBuyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n    background-color: white;\r\n}\r\n/* .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n  } */\r\n.textalign{\r\n   margin-left: 200px;\r\n }\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n.container {\r\n    padding: 2px 16px;\r\n    width: 200px;\r\n  }\r\n.card img{\r\n      width: 550px;\r\n      height: 350px;\r\n  }\r\n.app{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  overflow-x: auto;\r\n  padding: 10px;\r\n  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5L2J1eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7OztLQUdLO0FBQ0o7R0FDRSxrQkFBa0I7Q0FDcEI7QUFFQztJQUNFLHdDQUF3QztFQUMxQztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNBO01BQ0ksWUFBWTtNQUNaLGFBQWE7RUFDakI7QUFDRjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvYnV5L2J1eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfSAqL1xyXG4gLnRleHRhbGlnbntcclxuICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIGltZ3tcclxuICAgICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuLmFwcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/buy/buy.component.ts":
  /*!**************************************!*\
    !*** ./src/app/buy/buy.component.ts ***!
    \**************************************/

  /*! exports provided: BuyComponent */

  /***/
  function srcAppBuyBuyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyComponent", function () {
      return BuyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var BuyComponent =
    /*#__PURE__*/
    function () {
      function BuyComponent(UserSer) {
        _classCallCheck(this, BuyComponent);

        this.UserSer = UserSer;
        this.Fname = "";
      }

      _createClass(BuyComponent, [{
        key: "desc",
        value: function desc(Img, title, price, _desc, brand) {
          this.UserSer.sendDesc(Img, title, _desc, price, brand);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.UserSer.msg$.subscribe(function (msgg) {
            return console.log("msg recieved" + msgg), _this.Fname = msgg;
          });
          this.UserSer.getAllMobiles().subscribe(function (data) {
            _this.Mobilearray = data;
            console.log(_this.Mobilearray);
          });
          this.UserSer.getAllLaptop().subscribe(function (data) {
            _this.Laptoparray = data;
            console.log(_this.Laptoparray);
          });
          this.UserSer.getAllLed().subscribe(function (data) {
            _this.Ledarray = data;
            console.log(_this.Ledarray);
          });
          this.UserSer.getAllPrinter().subscribe(function (data) {
            _this.Printerarray = data;
            console.log(_this.Printerarray);
          });
          this.UserSer.getAllCamera().subscribe(function (data) {
            _this.Cameraarray = data;
            console.log(_this.Cameraarray);
          });
        }
      }]);

      return BuyComponent;
    }();

    BuyComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    BuyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/buy/buy.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy.component.css */
      "./src/app/buy/buy.component.css")).default]
    })], BuyComponent);
    /***/
  },

  /***/
  "./src/app/cameras/cameras.component.css":
  /*!***********************************************!*\
    !*** ./src/app/cameras/cameras.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCamerasCamerasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.mobile-form{\r\n    min-width: 150px;\r\n    max-width: 600px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:45%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 410px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 88%;\r\n  }\r\n   \r\n  .cont{\r\n    height: 500px;\r\n    width: 650px;\r\n    padding: 25px;\r\n    word-spacing: normal;\r\n    border: 2px solid black;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhcy9jYW1lcmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxrQkFBa0I7SUFDcEIsU0FBUzs7QUFFYjs7RUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7O0VBQ0E7SUFDSSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2FtZXJhcy9jYW1lcmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vYmlsZS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvb2wtYmFye1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgIFxyXG59XHJcbi5teS1jYXJke1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcbi5oYWxmLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgfVxyXG5cclxuICAuY29udHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/cameras/cameras.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cameras/cameras.component.ts ***!
    \**********************************************/

  /*! exports provided: CamerasComponent */

  /***/
  function srcAppCamerasCamerasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamerasComponent", function () {
      return CamerasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var CamerasComponent =
    /*#__PURE__*/
    function () {
      function CamerasComponent(userReg) {
        _classCallCheck(this, CamerasComponent);

        this.userReg = userReg;
        this.Brand = "";
        this.Price = "";
        this.Title = "";
        this.Desc = "";
        this.imglink = "";
        this.ImgLink = "";
      }

      _createClass(CamerasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(Forms) {}
      }, {
        key: "onselect",
        value: function onselect(event) {
          this.selected = event.target.files[0];
        }
      }, {
        key: "sm",
        value: function sm(Forms, brand, title, price, desc) {
          var _this2 = this;

          this.userReg.imgurl(this.selected).subscribe(function (data) {
            var img = data.data.link;
            _this2.ImgLink = img.toString();
            console.log(img);
            _this2.Brand = brand;
            _this2.Title = title;
            _this2.Price = price;
            _this2.Desc = desc;
            _this2.imglink = _this2.ImgLink;

            var response = _this2.userReg.addCamera(_this2.Brand, _this2.Title, _this2.Price, _this2.Desc, _this2.imglink);

            response.subscribe();
          }, function (error) {});
        }
      }]);

      return CamerasComponent;
    }();

    CamerasComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    CamerasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cameras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cameras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cameras/cameras.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cameras.component.css */
      "./src/app/cameras/cameras.component.css")).default]
    })], CamerasComponent);
    /***/
  },

  /***/
  "./src/app/desc/desc.component.css":
  /*!*****************************************!*\
    !*** ./src/app/desc/desc.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDescDescComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n/*****************globals*************/\r\nbody {\r\n    font-family: 'open sans';\r\n    overflow-x: hidden; }\r\nimg {\r\n    max-width: 100%; }\r\n.preview {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; }\r\n@media screen and (max-width: 996px) {\r\n      .preview {\r\n        margin-bottom: 20px; } }\r\n.preview-pic {\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1; }\r\n.preview-thumbnail.nav-tabs {\r\n    border: none;\r\n    margin-top: 15px; }\r\n.preview-thumbnail.nav-tabs li {\r\n      width: 18%;\r\n      margin-right: 2.5%; }\r\n.preview-thumbnail.nav-tabs li img {\r\n        max-width: 100%;\r\n        display: block; }\r\n.preview-thumbnail.nav-tabs li a {\r\n        padding: 0;\r\n        margin: 0; }\r\n.preview-thumbnail.nav-tabs li:last-of-type {\r\n        margin-right: 0; }\r\n.tab-content {\r\n    overflow: hidden; }\r\n.tab-content img {\r\n      width: 100%;\r\n      -webkit-animation-name: opacity;\r\n              animation-name: opacity;\r\n      -webkit-animation-duration: .3s;\r\n              animation-duration: .3s; }\r\n.card {\r\n    margin-top: 50px;\r\n    background: #eee;\r\n    padding: 3em;\r\n    line-height: 1.5em; }\r\n@media screen and (min-width: 997px) {\r\n    .wrapper {\r\n      display: -webkit-box;\r\n      display: flex; } }\r\n.details {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; }\r\n.colors {\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1; }\r\n.product-title, .price, .sizes, .colors {\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold; }\r\n.checked, .price span {\r\n    color: #ff9f1a; }\r\n.product-title, .rating, .product-description, .price, .vote, .sizes {\r\n    margin-bottom: 15px; }\r\n.product-title {\r\n    margin-top: 0; }\r\n.size {\r\n    margin-right: 10px; }\r\n.size:first-of-type {\r\n      margin-left: 40px; }\r\n.color {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 10px;\r\n    height: 2em;\r\n    width: 2em;\r\n    border-radius: 2px; }\r\n.color:first-of-type {\r\n      margin-left: 20px; }\r\n.add-to-cart, .like {\r\n    background: #ff9f1a;\r\n    padding: 1.2em 1.5em;\r\n    border: none;\r\n    text-transform: UPPERCASE;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    -webkit-transition: background .3s ease;\r\n            transition: background .3s ease; }\r\n.add-to-cart:hover, .like:hover {\r\n      background: #b36800;\r\n      color: #fff; }\r\n.not-available {\r\n    text-align: center;\r\n    line-height: 2em; }\r\n.not-available:before {\r\n      font-family: fontawesome;\r\n      content: \"\\f00d\";\r\n      color: #fff; }\r\n.orange {\r\n    background: #ff9f1a; }\r\n.green {\r\n    background: #85ad00; }\r\n.blue {\r\n    background: #0076ad; }\r\n.tooltip-inner {\r\n    padding: 1.3em; }\r\n@-webkit-keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(3);\r\n              transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1); } }\r\n@keyframes opacity {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: scale(3);\r\n              transform: scale(3); }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: scale(1);\r\n              transform: scale(1); } }\r\n/*# sourceMappingURL=style.css.map */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzYy9kZXNjLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUFzQztBQUN0QztJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0IsRUFBRTtBQUV0QjtJQUNFLGVBQWUsRUFBRTtBQUVuQjtJQUNFLG9CQUFvQjtJQUdwQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDZCQUE2QjtZQUdyQixzQkFBc0IsRUFBRTtBQUNoQztNQUNFO1FBQ0UsbUJBQW1CLEVBQUUsRUFBRTtBQUU3QjtJQUNFLG1CQUFtQjtZQUdYLFlBQVksRUFBRTtBQUV4QjtJQUNFLFlBQVk7SUFDWixnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLFVBQVU7TUFDVixrQkFBa0IsRUFBRTtBQUNwQjtRQUNFLGVBQWU7UUFDZixjQUFjLEVBQUU7QUFDbEI7UUFDRSxVQUFVO1FBQ1YsU0FBUyxFQUFFO0FBQ2I7UUFDRSxlQUFlLEVBQUU7QUFFdkI7SUFDRSxnQkFBZ0IsRUFBRTtBQUNsQjtNQUNFLFdBQVc7TUFDWCwrQkFBK0I7Y0FDdkIsdUJBQXVCO01BQy9CLCtCQUErQjtjQUN2Qix1QkFBdUIsRUFBRTtBQUVyQztJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXRCO0lBQ0U7TUFDRSxvQkFBb0I7TUFHcEIsYUFBYSxFQUFFLEVBQUU7QUFFckI7SUFDRSxvQkFBb0I7SUFHcEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7WUFHckIsc0JBQXNCLEVBQUU7QUFFbEM7SUFDRSxtQkFBbUI7WUFHWCxZQUFZLEVBQUU7QUFFeEI7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCLEVBQUU7QUFFckI7SUFDRSxjQUFjLEVBQUU7QUFFbEI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLGFBQWEsRUFBRTtBQUVqQjtJQUNFLGtCQUFrQixFQUFFO0FBQ3BCO01BQ0UsaUJBQWlCLEVBQUU7QUFFdkI7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQixFQUFFO0FBQ3BCO01BQ0UsaUJBQWlCLEVBQUU7QUFFdkI7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx1Q0FBdUM7WUFDL0IsK0JBQStCLEVBQUU7QUFDekM7TUFDRSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFFO0FBRWpCO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFO0FBQ2xCO01BQ0Usd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixXQUFXLEVBQUU7QUFFakI7SUFDRSxtQkFBbUIsRUFBRTtBQUV2QjtJQUNFLG1CQUFtQixFQUFFO0FBRXZCO0lBQ0UsbUJBQW1CLEVBQUU7QUFFdkI7SUFDRSxjQUFjLEVBQUU7QUFFbEI7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7Y0FDbkIsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BQ1YsMkJBQTJCO2NBQ25CLG1CQUFtQixFQUFFLEVBQUU7QUFFbkM7SUFDRTtNQUNFLFVBQVU7TUFDViwyQkFBMkI7Y0FDbkIsbUJBQW1CLEVBQUU7SUFDL0I7TUFDRSxVQUFVO01BQ1YsMkJBQTJCO2NBQ25CLG1CQUFtQixFQUFFLEVBQUU7QUFFbkMsb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvZGVzYy9kZXNjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqKioqKioqKioqKioqKioqZ2xvYmFscyoqKioqKioqKioqKiovXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgfVxyXG4gIFxyXG4gIC5wcmV2aWV3IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xyXG4gICAgICAucHJldmlldyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfSB9XHJcbiAgXHJcbiAgLnByZXZpZXctcGljIHtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcbiAgXHJcbiAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XHJcbiAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMi41JTsgfVxyXG4gICAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cclxuICAgICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwOyB9XHJcbiAgICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxyXG4gIFxyXG4gIC50YWItY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbiAgICAudGFiLWNvbnRlbnQgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7IH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5N3B4KSB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyB9IH1cclxuICBcclxuICAuZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gIFxyXG4gIC5jb2xvcnMge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cclxuICBcclxuICAucHJvZHVjdC10aXRsZSwgLnByaWNlLCAuc2l6ZXMsIC5jb2xvcnMge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcbiAgXHJcbiAgLmNoZWNrZWQsIC5wcmljZSBzcGFuIHtcclxuICAgIGNvbG9yOiAjZmY5ZjFhOyB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGl0bGUsIC5yYXRpbmcsIC5wcm9kdWN0LWRlc2NyaXB0aW9uLCAucHJpY2UsIC52b3RlLCAuc2l6ZXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7IH1cclxuICBcclxuICAuc2l6ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuICAgIC5zaXplOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDBweDsgfVxyXG4gIFxyXG4gIC5jb2xvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XHJcbiAgICAuY29sb3I6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XHJcbiAgXHJcbiAgLmFkZC10by1jYXJ0LCAubGlrZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xyXG4gICAgcGFkZGluZzogMS4yZW0gMS41ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTsgfVxyXG4gICAgLmFkZC10by1jYXJ0OmhvdmVyLCAubGlrZTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiMzY4MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmOyB9XHJcbiAgXHJcbiAgLm5vdC1hdmFpbGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTsgfVxyXG4gICAgLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xyXG4gICAgICBjb250ZW50OiBcIlxcZjAwZFwiO1xyXG4gICAgICBjb2xvcjogI2ZmZjsgfVxyXG4gIFxyXG4gIC5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOWYxYTsgfVxyXG4gIFxyXG4gIC5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVhZDAwOyB9XHJcbiAgXHJcbiAgLmJsdWUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNzZhZDsgfVxyXG4gIFxyXG4gIC50b29sdGlwLWlubmVyIHtcclxuICAgIHBhZGRpbmc6IDEuM2VtOyB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cclxuICBcclxuICBAa2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cclxuICBcclxuICAvKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovIl19 */";
    /***/
  },

  /***/
  "./src/app/desc/desc.component.ts":
  /*!****************************************!*\
    !*** ./src/app/desc/desc.component.ts ***!
    \****************************************/

  /*! exports provided: DescComponent */

  /***/
  function srcAppDescDescComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescComponent", function () {
      return DescComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var DescComponent =
    /*#__PURE__*/
    function () {
      function DescComponent(Userser) {
        _classCallCheck(this, DescComponent);

        this.Userser = Userser;
        this.Title = "";
        this.Price = "";
        this.Desc = "";
        this.Img = "";
        this.title = "";
        this.price = "";
        this.desc = "";
        this.img = "";
        this.product = [];
      }

      _createClass(DescComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Title = this.Userser.Tt;
          this.Price = this.Userser.Pr;
          this.Desc = this.Userser.De;
          this.Img = this.Userser.Img1;
          console.log(this.Title);
          this.product = [this.Title, this.Price, this.Desc, this.Img];
          console.log(this.product);
        }
      }]);

      return DescComponent;
    }();

    DescComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    DescComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-desc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./desc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/desc/desc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./desc.component.css */
      "./src/app/desc/desc.component.css")).default]
    })], DescComponent);
    /***/
  },

  /***/
  "./src/app/laptop/laptop.component.css":
  /*!*********************************************!*\
    !*** ./src/app/laptop/laptop.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLaptopLaptopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mobile-form{\r\n    min-width: 150px;\r\n    max-width: 600px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:45%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 410px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 88%;\r\n  }\r\n   \r\n  .cont{\r\n    height: 500px;\r\n    width: 650px;\r\n    padding: 25px;\r\n    word-spacing: normal;\r\n    border: 2px solid black;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFwdG9wL2xhcHRvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxrQkFBa0I7SUFDcEIsU0FBUzs7QUFFYjs7RUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7O0VBQ0E7SUFDSSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbGFwdG9wL2xhcHRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvb2wtYmFye1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgIFxyXG59XHJcbi5teS1jYXJke1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcbi5oYWxmLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgfVxyXG4gIC5jb250e1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/laptop/laptop.component.ts":
  /*!********************************************!*\
    !*** ./src/app/laptop/laptop.component.ts ***!
    \********************************************/

  /*! exports provided: LaptopComponent */

  /***/
  function srcAppLaptopLaptopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LaptopComponent", function () {
      return LaptopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var LaptopComponent =
    /*#__PURE__*/
    function () {
      function LaptopComponent(userReg) {
        _classCallCheck(this, LaptopComponent);

        this.userReg = userReg;
        this.brand = '';
        this.Brand = "";
        this.Price = "";
        this.Title = "";
        this.Desc = "";
        this.ImgLink = "";
        this.imglink = "";
      }

      _createClass(LaptopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(Forms) {}
      }, {
        key: "onselect",
        value: function onselect(event) {
          this.selected = event.target.files[0];
        }
      }, {
        key: "sm",
        value: function sm(Forms, brand, title, price, desc) {
          var _this3 = this;

          this.userReg.imgurl(this.selected).subscribe(function (data) {
            var img = data.data.link;
            _this3.ImgLink = img.toString();
            console.log(img);
            _this3.Brand = brand;
            _this3.Title = title;
            _this3.Price = price;
            _this3.Desc = desc;
            _this3.imglink = _this3.ImgLink;

            var response = _this3.userReg.addLaptop(_this3.Brand, _this3.Title, _this3.Price, _this3.Desc, _this3.imglink);

            response.subscribe();
          }, function (error) {});
        }
      }]);

      return LaptopComponent;
    }();

    LaptopComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    LaptopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-laptop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./laptop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/laptop/laptop.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./laptop.component.css */
      "./src/app/laptop/laptop.component.css")).default]
    })], LaptopComponent);
    /***/
  },

  /***/
  "./src/app/led/led.component.css":
  /*!***************************************!*\
    !*** ./src/app/led/led.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLedLedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mobile-form{\r\n    min-width: 150px;\r\n    max-width: 600px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:45%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 410px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 88%;\r\n  }\r\n   \r\n  .cont{\r\n    height: 500px;\r\n    width: 650px;\r\n    padding: 25px;\r\n    word-spacing: normal;\r\n    border: 2px solid black;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVkL2xlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxrQkFBa0I7SUFDcEIsU0FBUzs7QUFFYjs7RUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7O0VBQ0E7SUFDSSxVQUFVO0VBQ1o7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbGVkL2xlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvb2wtYmFye1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgIFxyXG59XHJcbi5teS1jYXJke1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQxMHB4O1xyXG5cclxuICAgIFxyXG59XHJcbi5oYWxmLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgfVxyXG4gIC5jb250e1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/led/led.component.ts":
  /*!**************************************!*\
    !*** ./src/app/led/led.component.ts ***!
    \**************************************/

  /*! exports provided: LedComponent */

  /***/
  function srcAppLedLedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedComponent", function () {
      return LedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var LedComponent =
    /*#__PURE__*/
    function () {
      function LedComponent(userReg) {
        _classCallCheck(this, LedComponent);

        this.userReg = userReg;
        this.Price = "";
        this.Title = "";
        this.Desc = "";
        this.imglink = "";
        this.ImgLink = "";
      }

      _createClass(LedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(Forms) {}
      }, {
        key: "onselect",
        value: function onselect(event) {
          this.selected = event.target.files[0];
        }
      }, {
        key: "sm",
        value: function sm(title, price, desc) {
          var _this4 = this;

          this.userReg.imgurl(this.selected).subscribe(function (data) {
            var img = data.data.link;
            _this4.ImgLink = img.toString();
            console.log(img);
            _this4.Title = title;
            _this4.Price = price;
            _this4.Desc = desc;
            _this4.imglink = _this4.ImgLink;

            var response = _this4.userReg.addLED(_this4.Title, _this4.Price, _this4.Desc, _this4.imglink);

            response.subscribe();
          }, function (error) {});
        }
      }]);

      return LedComponent;
    }();

    LedComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    LedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-led',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./led.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/led/led.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./led.component.css */
      "./src/app/led/led.component.css")).default]
    })], LedComponent);
    /***/
  },

  /***/
  "./src/app/login-component/login-component.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/login-component/login-component.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginComponentLoginComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tool-bar{\r\n    margin-left: 480px;\r\n  width:28%;\r\n \r\n}\r\n.my-card{\r\n  width:28%;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin-left: 480px;\r\n\r\n  \r\n}\r\n.my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n.full-width {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tY29tcG9uZW50L2xvZ2luLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCLFNBQVM7O0FBRVg7QUFDQTtFQUNFLFNBQVM7RUFDVCx3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCOzs7QUFHcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1jb21wb25lbnQvbG9naW4tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1iYXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcbiAgd2lkdGg6MjglO1xyXG4gXHJcbn1cclxuLm15LWNhcmR7XHJcbiAgd2lkdGg6MjglO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ4MHB4O1xyXG5cclxuICBcclxufVxyXG4ubXktZm9ybXtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICBcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/login-component/login-component.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/login-component/login-component.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoginComponentComponent */

  /***/
  function srcAppLoginComponentLoginComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentComponent", function () {
      return LoginComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var LoginComponentComponent =
    /*#__PURE__*/
    function () {
      function LoginComponentComponent(UserSer) {
        _classCallCheck(this, LoginComponentComponent);

        this.UserSer = UserSer;
        this.email = "";
        this.password = "";
        this.Email = "";
        this.Password = "";
        this.Fname = "";
        this.Userr = {};
      }

      _createClass(LoginComponentComponent, [{
        key: "login",
        value: function login(email, password) {
          var _this5 = this;

          console.log("btn click");
          this.Email = this.email;
          this.Password = this.password;
          var response = this.UserSer.checklogin(this.Email, this.Password);
          response.subscribe(function (data) {
            _this5.Userr = data;
            console.log(_this5.Userr);
          });
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(Fname) {
          alert(Fname);

          if (this.Fname != null) {
            console.log(Fname);
            this.UserSer.sendFname(Fname);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          alert('After Login Successfully Click Next Button');
        }
      }]);

      return LoginComponentComponent;
    }();

    LoginComponentComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    LoginComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-component/login-component.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-component.component.css */
      "./src/app/login-component/login-component.component.css")).default]
    })], LoginComponentComponent);
    /***/
  },

  /***/
  "./src/app/mobile/mobile.component.css":
  /*!*********************************************!*\
    !*** ./src/app/mobile/mobile.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMobileMobileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mobile-form{\r\n    min-width: 150px;\r\n    max-width: 600px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:45%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 410px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 88%;\r\n  }\r\n \r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxrQkFBa0I7SUFDcEIsU0FBUzs7QUFFYjs7RUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7O0VBQ0E7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudG9vbC1iYXJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgXHJcbn1cclxuLm15LWNhcmR7XHJcbiAgICB3aWR0aDo0NSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuLmhhbGYtd2lkdGgge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICB9XHJcbiBcclxuXHJcblxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mobile/mobile.component.ts":
  /*!********************************************!*\
    !*** ./src/app/mobile/mobile.component.ts ***!
    \********************************************/

  /*! exports provided: MobileComponent */

  /***/
  function srcAppMobileMobileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileComponent", function () {
      return MobileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var MobileComponent =
    /*#__PURE__*/
    function () {
      function MobileComponent(userReg) {
        _classCallCheck(this, MobileComponent);

        this.userReg = userReg;
        this.brand = '';
        this.Brand = "";
        this.Price = "";
        this.Title = "";
        this.Desc = "";
        this.ImgLink = "";
        this.imglink = "";
      }

      _createClass(MobileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(Forms) {} // sm(Forms:NgForm,brand:string,title:string,price:string,desc:string,ImgLink:string)
        // {
        //   this.Brand=brand;
        //   this.Title=title;
        //   this.Price=price;
        //   this.Desc=desc;
        //   this.imglink=ImgLink;
        //   let response=this.userReg.addMobile(this.Brand,this.Title,this.Price,this.Desc,this.imglink);
        //   response.subscribe();
        // }

      }, {
        key: "onselect",
        value: function onselect(event) {
          this.selected = event.target.files[0];
        }
      }, {
        key: "sm",
        value: function sm(Forms, brand, title, price, desc) {
          var _this6 = this;

          this.userReg.imgurl(this.selected).subscribe(function (data) {
            var img = data.data.link;
            _this6.ImgLink = img.toString();
            console.log(img);
            _this6.Brand = brand;
            _this6.Title = title;
            _this6.Price = price;
            _this6.Desc = desc;
            _this6.imglink = _this6.ImgLink;

            var response = _this6.userReg.addMobile(_this6.Brand, _this6.Title, _this6.Price, _this6.Desc, _this6.imglink);

            response.subscribe();
          }, function (error) {});
        }
      }]);

      return MobileComponent;
    }();

    MobileComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mobile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mobile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mobile.component.css */
      "./src/app/mobile/mobile.component.css")).default]
    })], MobileComponent);
    /***/
  },

  /***/
  "./src/app/printers/printers.component.css":
  /*!*************************************************!*\
    !*** ./src/app/printers/printers.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrintersPrintersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mobile-form{\r\n    min-width: 150px;\r\n    max-width: 600px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:45%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 410px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 88%;\r\n  }\r\n   \r\n  body{\r\n  background-image: url('Web-design.jpg');\r\n}\r\n   \r\n  .cont{\r\n  height: 500px;\r\n  width: 650px;\r\n  padding: 25px;\r\n  word-spacing: normal;\r\n  border: 2px solid black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnRlcnMvcHJpbnRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO01BQ0ksa0JBQWtCO0lBQ3BCLFNBQVM7O0FBRWI7O0VBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0FBR3RCOztFQUNBO0lBQ0ksVUFBVTtFQUNaOztFQUVGO0VBQ0UsdUNBQXFFO0FBQ3ZFOztFQUdBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ByaW50ZXJzL3ByaW50ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudG9vbC1iYXJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgXHJcbn1cclxuLm15LWNhcmR7XHJcbiAgICB3aWR0aDo0NSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuLmhhbGYtd2lkdGgge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICB9XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChDOlxcVXNlcnNcXEhQXFxNYWluUHJvamVjdFxcc3JjXFxhcHBcXFdlYi1kZXNpZ24uanBnKTtcclxufVxyXG5cclxuXHJcbi5jb250e1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDY1MHB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/printers/printers.component.ts":
  /*!************************************************!*\
    !*** ./src/app/printers/printers.component.ts ***!
    \************************************************/

  /*! exports provided: PrintersComponent */

  /***/
  function srcAppPrintersPrintersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintersComponent", function () {
      return PrintersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var PrintersComponent =
    /*#__PURE__*/
    function () {
      function PrintersComponent(userReg) {
        _classCallCheck(this, PrintersComponent);

        this.userReg = userReg;
        this.Price = "";
        this.Title = "";
        this.Desc = "";
        this.imglink = "";
        this.ImgLink = "";
      }

      _createClass(PrintersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnSubmit",
        value: function OnSubmit(Forms) {}
      }, {
        key: "onselect",
        value: function onselect(event) {
          this.selected = event.target.files[0];
        }
      }, {
        key: "sm",
        value: function sm(title, price, desc) {
          var _this7 = this;

          this.userReg.imgurl(this.selected).subscribe(function (data) {
            var img = data.data.link;
            _this7.ImgLink = img.toString();
            console.log(img);
            _this7.Title = title;
            _this7.Price = price;
            _this7.Desc = desc;
            _this7.imglink = _this7.ImgLink;

            var response = _this7.userReg.addPrinter(_this7.Title, _this7.Price, _this7.Desc, _this7.imglink);

            response.subscribe();
          }, function (error) {});
        }
      }]);

      return PrintersComponent;
    }();

    PrintersComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    PrintersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-printers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./printers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/printers/printers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./printers.component.css */
      "./src/app/printers/printers.component.css")).default]
    })], PrintersComponent);
    /***/
  },

  /***/
  "./src/app/registration-component/registration-component.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/registration-component/registration-component.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationComponentRegistrationComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n   \r\n  .tool-bar{\r\n      margin-left: 480px;\r\n    width:28%;\r\n   \r\n}\r\n   \r\n  .my-card{\r\n    width:28%;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-left: 480px;\r\n\r\n    \r\n}\r\n   \r\n  .half-width {\r\n    width: 45%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uLWNvbXBvbmVudC9yZWdpc3RyYXRpb24tY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtNQUNJLGtCQUFrQjtJQUNwQixTQUFTOztBQUViOztFQUNBO0lBQ0ksU0FBUztJQUNULHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7OztBQUd0Qjs7RUFDQTtJQUNJLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi1jb21wb25lbnQvcmVnaXN0cmF0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudG9vbC1iYXJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcclxuICAgIHdpZHRoOjI4JTtcclxuICAgXHJcbn1cclxuLm15LWNhcmR7XHJcbiAgICB3aWR0aDoyOCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDgwcHg7XHJcblxyXG4gICAgXHJcbn1cclxuLmhhbGYtd2lkdGgge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/registration-component/registration-component.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/registration-component/registration-component.component.ts ***!
    \****************************************************************************/

  /*! exports provided: RegistrationComponentComponent */

  /***/
  function srcAppRegistrationComponentRegistrationComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponentComponent", function () {
      return RegistrationComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-registration.service */
    "./src/app/user-registration.service.ts");

    var RegistrationComponentComponent =
    /*#__PURE__*/
    function () {
      //  Reg:RegistrationComponentComponent;
      function RegistrationComponentComponent(userReg) {
        _classCallCheck(this, RegistrationComponentComponent);

        this.userReg = userReg;
        this.password = "";
        this.email = "";
        this.fname = "";
        this.lname = "";
        this.address = "";
        this.bdate = "";
        this.gender = "";
        this.Pno = "";
        this.Fname = "";
        this.Lname = "";
        this.Bday = "";
        this.Pass = "";
        this.Email = "";
        this.Address = "";
        this.Gender = "";
        this.Phone = "";
      }

      _createClass(RegistrationComponentComponent, [{
        key: "OnSubmit",
        value: function OnSubmit(form) {// this.sm(form.value.fname,form.value.lname,form.value.bdate,form.value.email,form.value.password,form.value.address,form.value.gender,form.value.Pno);
        }
      }, {
        key: "sm",
        value: function sm(form, fname, lname, bdate, email, password, address, gender, Pno) {
          this.Fname = this.fname;
          this.Lname = this.lname;
          this.Bday = this.bdate;
          this.Pass = this.password;
          this.Email = this.email;
          this.Address = this.address;
          this.Gender = this.gender;
          this.Phone = this.Pno;
          var response = this.userReg.doRegistration(this.Fname, this.Lname, this.Bday, this.Email, this.Pass, this.Gender, this.Address, this.Phone);
          response.subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistrationComponentComponent;
    }();

    RegistrationComponentComponent.ctorParameters = function () {
      return [{
        type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"]
      }];
    };

    RegistrationComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration-component/registration-component.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration-component.component.css */
      "./src/app/registration-component/registration-component.component.css")).default]
    })], RegistrationComponentComponent);
    /***/
  },

  /***/
  "./src/app/sell/sell.component.css":
  /*!*****************************************!*\
    !*** ./src/app/sell/sell.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSellSellComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n    background-color: white;\r\n}\r\n.card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n.textalign{\r\n   margin-left: 200px;\r\n }\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n.container {\r\n    padding: 2px 16px;\r\n    width: 200px;\r\n  }\r\n.card img{\r\n      width: 600px;\r\n      height: 550px;\r\n  }\r\n.app{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  overflow-x: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbC9zZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVDQUF1QztJQUN2Qyx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Q7R0FDRSxrQkFBa0I7Q0FDcEI7QUFFQztJQUNFLHdDQUF3QztFQUMxQztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtBQUNBO01BQ0ksWUFBWTtNQUNaLGFBQWE7RUFDakI7QUFDRjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gLnRleHRhbGlnbntcclxuICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIC5jYXJkIGltZ3tcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gIH1cclxuLmFwcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sell/sell.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sell/sell.component.ts ***!
    \****************************************/

  /*! exports provided: SellComponent */

  /***/
  function srcAppSellSellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellComponent", function () {
      return SellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SellComponent =
    /*#__PURE__*/
    function () {
      function SellComponent() {
        _classCallCheck(this, SellComponent);
      }

      _createClass(SellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SellComponent;
    }();

    SellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sell.component.css */
      "./src/app/sell/sell.component.css")).default]
    })], SellComponent);
    /***/
  },

  /***/
  "./src/app/thnx/thnx.component.css":
  /*!*****************************************!*\
    !*** ./src/app/thnx/thnx.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppThnxThnxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RobngvdGhueC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/thnx/thnx.component.ts":
  /*!****************************************!*\
    !*** ./src/app/thnx/thnx.component.ts ***!
    \****************************************/

  /*! exports provided: ThnxComponent */

  /***/
  function srcAppThnxThnxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThnxComponent", function () {
      return ThnxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThnxComponent =
    /*#__PURE__*/
    function () {
      function ThnxComponent() {
        _classCallCheck(this, ThnxComponent);
      }

      _createClass(ThnxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThnxComponent;
    }();

    ThnxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thnx',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thnx.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thnx/thnx.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thnx.component.css */
      "./src/app/thnx/thnx.component.css")).default]
    })], ThnxComponent);
    /***/
  },

  /***/
  "./src/app/user-registration.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/user-registration.service.ts ***!
    \**********************************************/

  /*! exports provided: UserRegistrationService */

  /***/
  function srcAppUserRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function () {
      return UserRegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserRegistrationService =
    /*#__PURE__*/
    function () {
      function UserRegistrationService(http) {
        _classCallCheck(this, UserRegistrationService);

        this.http = http;
        this.Img1 = "";
        this.Tt = "";
        this.Br = "";
        this.Pr = "";
        this.De = "";
        this.msgsrc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.msg$ = this.msgsrc.asObservable();
        this.imguploadurl = "https://api.imgur.com/3/image";
      }

      _createClass(UserRegistrationService, [{
        key: "sendDesc",
        value: function sendDesc(Img, title, price, desc, brand) {
          this.Img1 = Img;
          this.Tt = title;
          this.Pr = price;
          this.De = desc;
          this.Br = brand;
        }
      }, {
        key: "checklogin",
        value: function checklogin(Email, Password) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('email', Email);
          body = body.set('password', Password);
          return this.http.post("http://localhost:8081/login", body, {
            headers: myheader
          });
        }
      }, {
        key: "doRegistration",
        value: function doRegistration(fname1, lname1, bdate1, email1, password1, gender1, address1, Pno1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('fname', fname1);
          body = body.set('lname', lname1);
          body = body.set('bdate', bdate1);
          body = body.set('email', email1);
          body = body.set('password', password1);
          body = body.set('address', address1);
          body = body.set('gender', gender1);
          body = body.set('pno', Pno1);
          return this.http.post("http://localhost:8081/register", body, {
            headers: myheader
          });
        }
      }, {
        key: "addMobile",
        value: function addMobile(brand1, title1, price1, desc1, imglink1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('brand', brand1);
          body = body.set('title', title1);
          body = body.set('price', price1);
          body = body.set('desc', desc1);
          body = body.set('imglink', imglink1);
          return this.http.post("http://localhost:8081/mobile", body, {
            headers: myheader
          });
        }
      }, {
        key: "addLaptop",
        value: function addLaptop(brand1, title1, price1, desc1, imglink1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('brand', brand1);
          body = body.set('title', title1);
          body = body.set('price', price1);
          body = body.set('desc', desc1);
          body = body.set('imglink', imglink1);
          return this.http.post("http://localhost:8081/laptop", body, {
            headers: myheader
          });
        }
      }, {
        key: "addLED",
        value: function addLED(title1, price1, desc1, imglink1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('title', title1);
          body = body.set('price', price1);
          body = body.set('desc', desc1);
          body = body.set('imglink', imglink1);
          return this.http.post("http://localhost:8081/led", body, {
            headers: myheader
          });
        }
      }, {
        key: "addPrinter",
        value: function addPrinter(title1, price1, desc1, imglink1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('title', title1);
          body = body.set('price', price1);
          body = body.set('desc', desc1);
          body = body.set('imglink', imglink1);
          return this.http.post("http://localhost:8081/printer", body, {
            headers: myheader
          });
        }
      }, {
        key: "addCamera",
        value: function addCamera(brand1, title1, price1, desc1, imglink1) {
          var myheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          body = body.set('brand', brand1);
          body = body.set('title', title1);
          body = body.set('price', price1);
          body = body.set('desc', desc1);
          body = body.set('imglink', imglink1);
          return this.http.post("http://localhost:8081/camera", body, {
            headers: myheader
          });
        }
      }, {
        key: "sendFname",
        value: function sendFname(Fname) {
          this.msgsrc.next(Fname);
        }
      }, {
        key: "imgurl",
        value: function imgurl(file) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Client-ID 113e55b64dce4d1"
          });
          return this.http.post(this.imguploadurl, file, {
            headers: headers
          });
        }
      }, {
        key: "getAllMobiles",
        value: function getAllMobiles() {
          return this.http.get("http://localhost:8081/getallmobile");
        }
      }, {
        key: "getAllLaptop",
        value: function getAllLaptop() {
          return this.http.get("http://localhost:8081/getalllaptops");
        }
      }, {
        key: "getAllLed",
        value: function getAllLed() {
          return this.http.get("http://localhost:8081/getallled");
        }
      }, {
        key: "getAllPrinter",
        value: function getAllPrinter() {
          return this.http.get("http://localhost:8081/getallprinter");
        }
      }, {
        key: "getAllCamera",
        value: function getAllCamera() {
          return this.http.get("http://localhost:8081/findallcamera");
        }
      }]);

      return UserRegistrationService;
    }();

    UserRegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserRegistrationService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HP\MainProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map