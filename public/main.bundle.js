webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(153);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(341),
        styles: [__webpack_require__(327)]
    })
], AppComponent);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_participants_participants_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_workshops_workshops_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_schedule_schedule_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_participant_participant_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_workshop_workshop_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_statistics_statistics_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_settings_settings_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_Validation_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_Workshops_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_User_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_auth_guard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_sort_by_last_pipe__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_order_by_date_pipe__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_filterby_pipe__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // {path:'**',redirectTo:'/login',pathMatch:'full'},
    { path: 'statistics', component: __WEBPACK_IMPORTED_MODULE_16__components_statistics_statistics_component__["a" /* StatisticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'participants', component: __WEBPACK_IMPORTED_MODULE_8__components_participants_participants_component__["a" /* ParticipantsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'participant/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_participant_participant_component__["a" /* ParticipantComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'workshops', component: __WEBPACK_IMPORTED_MODULE_11__components_workshops_workshops_component__["a" /* WorkshopsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'workshop/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_workshop_workshop_component__["a" /* WorkshopComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_13__components_schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_17__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_participants_participants_component__["a" /* ParticipantsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_workshops_workshops_component__["a" /* WorkshopsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_schedule_schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_participant_participant_component__["a" /* ParticipantComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_workshop_workshop_component__["a" /* WorkshopComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_statistics_statistics_component__["a" /* StatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_order_by_date_pipe__["a" /* OrderByDatePipe */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_filterby_pipe__["a" /* FilterByPipe */],
            __WEBPACK_IMPORTED_MODULE_17__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_sort_by_last_pipe__["a" /* SortByLastPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_20_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_Validation_service__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__services_Participants_service__["a" /* ParticipantsService */], __WEBPACK_IMPORTED_MODULE_23__services_Workshops_service__["a" /* WorkshopsService */], __WEBPACK_IMPORTED_MODULE_25__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__services_User_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(342),
        styles: [__webpack_require__(328)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/home.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(validationService, flashMessage, authService, router, http) {
        this.validationService = validationService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/participants']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validationService.validateLogin(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-warning' });
            return false;
        }
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                // this.flashMessage.show('Welcome, ' + data.user.username, {cssClass:'alert-success', timeout:5000});
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/participants']);
            }
            else {
                _this.flashMessage.show('Please provide valid credentials', { cssClass: 'alert-warning', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(343),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__["a" /* ValidationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/login.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.collapse = false;
        this.width = innerWidth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggle = function () {
        this.collapse = !this.collapse;
    };
    NavbarComponent.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        if (this.collapse) {
            this.collapse = !this.collapse;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(344),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(345),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/page-not-found.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantComponent = (function () {
    function ParticipantComponent(participantService, workshopsService, route, router) {
        this.participantService = participantService;
        this.workshopsService = workshopsService;
        this.route = route;
        this.router = router;
        this.editing = false;
        this.altShops = [];
    }
    ParticipantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.participantService.getParticipant(params['id'])
                .subscribe(function (data) {
                _this.participant = data;
                _this.participant.birthDate = new Date(_this.participant.birthDate);
                _this.month = _this.participant.birthDate.getMonth() + 1 + '';
                if (_this.month.length < 2)
                    _this.month = '0' + _this.month;
                _this.day = _this.participant.birthDate.getDate();
                if (_this.day.length < 2)
                    _this.day = '0' + _this.day;
                _this.year = _this.participant.birthDate.getFullYear();
                _this.rfcBDay = _this.year + "-" + _this.month + "-" + _this.day;
                if (_this.participant.preferredWorkshops[0]) {
                    _this.p1 = _this.participant.preferredWorkshops[0]._id;
                }
                if (_this.participant.preferredWorkshops[1]) {
                    _this.p2 = _this.participant.preferredWorkshops[1]._id;
                }
                if (_this.participant.preferredWorkshops[2]) {
                    _this.p3 = _this.participant.preferredWorkshops[2]._id;
                }
                if (_this.participant.preferredWorkshops[3]) {
                    _this.p4 = _this.participant.preferredWorkshops[3]._id;
                }
                if (_this.participant.preferredWorkshops[4]) {
                    _this.p5 = _this.participant.preferredWorkshops[4]._id;
                }
                if (_this.participant.preferredWorkshops[5]) {
                    _this.p6 = _this.participant.preferredWorkshops[5]._id;
                }
                if (_this.participant.preferredWorkshops[6]) {
                    _this.p7 = _this.participant.preferredWorkshops[6]._id;
                }
            }, function (error) { return console.log(error); });
            _this.workshopsService.getWorkshops()
                .subscribe(function (data) { return _this.workshops = data; }, function (error) { return console.log(error); });
        });
    };
    ParticipantComponent.prototype.goBack = function () {
        this.router.navigate(['/participants']);
    };
    ParticipantComponent.prototype.deleteParticipant = function () {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.participantService.deleteParticipant(this.participant._id)
                .subscribe(function (data) {
                if (data.success) {
                    var workshops = _this.participant.selectedWorkshops;
                    for (var workshop in workshops) {
                        _this.workshopsService.updateWorkshop(workshop);
                    }
                    // this.workshopsService.updateWorkshop()
                    // this.onChange();
                    _this.router.navigate(['/participants']);
                    _this.participant = null;
                }
            });
        }
        else {
            return;
        }
    };
    ParticipantComponent.prototype.editParticipant = function () {
        console.log(this.participant.birthDate);
        this.editing = !this.editing;
    };
    ParticipantComponent.prototype.saveParticipant = function () {
        // console.log(this.participant);
        var _this = this;
        if (confirm('Are you sure?')) {
            this.participant.birthDate = this.rfcBDay;
            console.log(this.participant.birthDate);
            this.editing = !this.editing;
            if (typeof this.participant.birthDate === "string") {
                var x = this.participant.birthDate.split('-');
                this.participant.birthDate = new Date(x[0], x[1] - 1, x[2]);
                console.log(this.participant.birthDate);
                this.month = this.participant.birthDate.getMonth() + 1;
                this.day = this.participant.birthDate.getDate();
                this.year = this.participant.birthDate.getFullYear();
            }
            // console.log(this.participant.birthDate)
            this.participant.preferredWorkshops = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7];
            // console.log(this.participant.preferredWorkshops);
            this.participantService.updateParticipant(this.participant)
                .subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['/participant/' + _this.participant._id]);
                }
            });
        }
        else {
            return;
        }
    };
    return ParticipantComponent;
}());
ParticipantComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-participant',
        template: __webpack_require__(346),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__["a" /* ParticipantsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ParticipantComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/participant.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Workshops_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Validation_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParticipantsComponent = (function () {
    function ParticipantsComponent(participantService, workshopService, validationService, flashMessages, eleRef, router) {
        this.participantService = participantService;
        this.workshopService = workshopService;
        this.validationService = validationService;
        this.flashMessages = flashMessages;
        this.eleRef = eleRef;
        this.router = router;
        this.create = false;
        this.participants = [];
        this.showPrint = false;
        this.newParticipant = {
            firstName: '',
            lastName: '',
            age: '',
            birthDate: '',
            phoneNumber: '',
            phoneNumberOpt: '',
            additional: 'None',
            photographPermission: false,
            address: {
                street: '',
                street2: '',
                city: '',
                state: '',
                zipCode: ''
            },
            guardian: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: ''
            },
            preferredWorkshops: []
        };
        this.workshops = [];
        this.logoPath = '/assets/ipllogo.png';
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participantService.getParticipants()
            .subscribe(function (data) {
            _this.participants = data;
            //   for(let i = 0; i < this.participants.length;i++){
            //     this.participants[i].selectedWorkshops[].date 
            //   }
        }, function (error) { return console.log(error.message); });
        this.workshopService.getWorkshops()
            .subscribe(function (data) { return _this.workshops = data; }, function (error) { return console.log(error.message); });
    };
    ParticipantsComponent.prototype.update = function () {
        var _this = this;
        this.participantService.getParticipants()
            .subscribe(function (data) { return _this.participants = data; }, function (error) { return console.log(error.message); });
    };
    ParticipantsComponent.prototype.print = function () {
        if (confirm('Are you sure?')) {
            console.log('open print pop-up');
            var printContents = void 0, popupWin = void 0;
            printContents = document.getElementById('print-section').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n        <html>\n          <head>\n            <title>Print tab</title>\n            <style>\n              #logo{\n                width:175px;\n                height:100px;\n                margin-bottom:25px;\n              }\n              p{\n                text-indent:50px;\n              }\n              .footer{\n                display:flex;\n                flex-direction:column;\n                justify-content:flex-end;\n              }\n              .signature{\n                \n              }\n              .footer-address{\n                margin-top:50px;\n                font-size:10pt;\n                text-align:center;\n              }\n              .pagebreak{\n                page-break-after:always;\n              }\n              .print-header{\n                display:flex;\n                justify-content:center;\n                padding-top: 30px;\n              }\n              .print-body{\n                margin: 0 50px;\n                font-size:12pt\n              }\n              hr{\n                border: 1px solid black;\n              }\n              .print-text{\n                margin:10px 0;\n                padding-left: 60px;\n                // text-align:center;\n              }\n            </style>\n          </head>\n          <body onload=\"window.print();window.close()\">" + printContents + "</body>\n        </html>");
            popupWin.document.close();
        }
        else {
            return;
        }
    };
    ParticipantsComponent.prototype.onSelect = function (participant) {
        this.router.navigate(['/participant/' + participant._id]);
        this.selectedParticipant = participant;
        // console.log(JSON.stringify(this.selectedParticipant));
    };
    ParticipantsComponent.prototype.addParticipant = function () {
        var _this = this;
        if (this.newParticipant && confirm('Are you sure?')) {
            if (!this.newParticipant.firstName || this.newParticipant.firstName === null || this.newParticipant.firstName === "") {
                return this.flashMessages.show('First Name Required', { cssClass: 'alert-warning', timeout: 3000 });
            }
            if (!this.newParticipant.lastName || this.newParticipant.lastName === null || this.newParticipant.lastName === "") {
                return this.flashMessages.show('Last Name Required', { cssClass: 'alert-warning', timeout: 3000 });
            }
            if (this.newParticipant.age < 5) {
                this.flashMessages.show('Must be older than 5', { cssClass: 'alert-warning', timeout: 3000 });
                return;
            }
            else if (this.newParticipant.age > 17) {
                this.flashMessages.show('Must be younger than 17', { cssClass: 'alert-warning', timeout: 3000 });
                return;
            }
            if (this.newParticipant.birthDate) {
                var x = this.newParticipant.birthDate.split('-');
                this.newParticipant.birthDate = new Date(x[0], x[1] - 1, x[2]);
                this.newParticipant.preferredWorkshops = [this.s1, this.s2, this.s3, this.s4, this.s5, this.s6, this.s7];
            }
            else {
                this.flashMessages.show('Birthday required', { cssClass: 'alert-warning', timeout: 3000 });
                return;
            }
            if (this.newParticipant.phoneNumberOpt) {
                if (!this.validationService.validatePhoneNumber(this.newParticipant.phoneNumberOpt)) {
                    return this.flashMessages.show('Please enter valid phone number', { cssClass: 'alert-warning', timeout: 3000 });
                }
            }
            if (!this.validationService.validatePhoneNumber(this.newParticipant.phoneNumber) || !this.validationService.validatePhoneNumber(this.newParticipant.guardian.phoneNumber)) {
                return this.flashMessages.show('Please enter valid phone number', { cssClass: 'alert-warning', timeout: 3000 });
            }
            this.participantService.addParticipant(this.newParticipant)
                .subscribe(function (data) {
                console.log(JSON.stringify(data));
                if (data.success) {
                    _this.update();
                    _this.flashMessages.show('Participant has been added', { cssClass: 'alert-success', timeout: 3000 });
                    _this.create = !_this.create;
                    _this.newParticipant = {
                        firstName: '',
                        lastName: '',
                        age: '',
                        birthDate: '',
                        phoneNumber: '',
                        phoneNumberOpt: '',
                        additional: 'None',
                        photographPermission: false,
                        address: {
                            street: '',
                            street2: '',
                            city: '',
                            state: '',
                            zipCode: ''
                        },
                        guardian: {
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: ''
                        },
                        preferredWorkshops: []
                    };
                    _this.s1 = "";
                    _this.s2 = "";
                    _this.s3 = "";
                    _this.s4 = "";
                    _this.s5 = "";
                    _this.s6 = "";
                    _this.s7 = "";
                }
                else {
                    _this.flashMessages.show(data.msg, { cssClass: 'alert-warning', timeout: 3000 });
                }
            }, function (error) {
                console.log(error);
                _this.flashMessages.show('User was not added', { cssClass: 'alert-warning', timeout: 3000 });
            });
        }
        else {
            return;
        }
    };
    return ParticipantsComponent;
}());
ParticipantsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-participants',
        // templateUrl: './participants.component.html',
        template: __webpack_require__(347),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__["a" /* ParticipantsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_Validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_Validation_service__["a" /* ValidationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ParticipantsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/participants.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validationService, flashMessage, authService, router) {
        this.validationService = validationService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.goBack = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validationService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-warning' });
            return false;
        }
        if (!this.validationService.validateEmail(user.email)) {
            this.flashMessage.show('Please provide a valid email!', { cssClass: 'alert-warning' });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('User has been registered', { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('User was not registered', { cssClass: 'alert-warning' });
                _this.router.navigate(['/login']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(348),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Validation_service__["a" /* ValidationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/register.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = (function () {
    function ScheduleComponent(workshopsService) {
        this.workshopsService = workshopsService;
        this.workshops = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workshopsService.getWorkshops()
            .subscribe(function (data) {
            var shops = [];
            for (var i = 0; i < data.length; i++) {
                var shopDate = new Date(data[i].date);
                var now = new Date();
                now.setHours(0, 0, 0, 0);
                if (shopDate >= now) {
                    shops.push(data[i]);
                }
            }
            _this.workshops = shops;
        }, function (error) { return console.log(error.message); });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule',
        template: "\n    <section id=\"schedule\">\n      <h3>Workshop Schedule</h3>\n    </section>\n\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let workshop of workshops | orderByDate\">\n        <h4>{{workshop.title}}</h4>\n        <p>{{workshop.date | date: 'MM/dd/yyyy'}} {{workshop.startTime}}-{{workshop.endTime}}</p>\n      </li>\n    </ul>\n  ",
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _a || Object])
], ScheduleComponent);

var _a;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/schedule.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_User_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(flashMessage, userService, router, fb) {
        this.flashMessage = flashMessage;
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.changePass = false;
        this.clear = false;
        this.update = {
            password: '',
            confirm: ''
        };
        this.auth = {
            username: String,
            password: String
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.authForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]
        });
    };
    SettingsComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.update.password === "") {
            return this.flashMessage.show('Password required', { cssClass: 'alert-warning', timeout: 3000 });
        }
        if (this.update.password === this.update.confirm) {
            this.userService.updateUser(this.update)
                .subscribe(function (data) {
                if (data.success) {
                    _this.changePass = !_this.changePass;
                    _this.flashMessage.show('Password changed', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/settings']);
                }
            });
        }
        else {
            this.flashMessage.show('Passwords Must Match', { cssClass: 'alert-warning', timeout: 3000 });
        }
    };
    SettingsComponent.prototype.drop = function () {
        // this.userService.authenticate()
        // .subscribe(data => {
        //   if(data.success){
        //     if(confirm('Are you sure>')){
        //       this.userService.clearDb()
        //       .subscribe(data => {
        //         if(data.success){
        //           this.clear = false;
        //           this.router.navigate(['/settings']);
        //         } else {
        //           this.flashMessage.show('Unauthorized',{cssClass:'alert-warning',timeout:3000});
        //           return this.router.navigate(['/participants']);
        //         }
        //       })
        //     } else{
        //       return;
        //     }
        //   }
        // })
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(349),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_User_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_User_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], SettingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/settings.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsComponent = (function () {
    function StatisticsComponent(p_service, w_service) {
        this.p_service = p_service;
        this.w_service = w_service;
        this.participants = [];
        this.workshops = [];
        this.total = this.participants.length;
        this.age_counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.age_genCount = [{ male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }, { male: 0, female: 0 }];
        this.male_count = 0;
        this.female_count = 0;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.p_service.getParticipants()
            .subscribe(function (data) {
            _this.setParticipants(data)
                .then(function (participants) {
                _this.setCounts();
            })
                .catch(function (error) {
                console.log(error.message);
            });
        }, function (error) { return console.log(error.message); });
        this.w_service.getWorkshops()
            .subscribe(function (data) { return _this.workshops = data; }, function (error) { return console.log(error.message); });
    };
    StatisticsComponent.prototype.ngAfterContentInit = function () {
        this.setCounts();
    };
    StatisticsComponent.prototype.setParticipants = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (data) {
                // this.participants = data;
                resolve(_this.participants = data);
            }
            else {
                reject("No data given");
            }
        });
    };
    StatisticsComponent.prototype.setCounts = function () {
        for (var i = 0; i < this.participants.length; i++) {
            var participant = this.participants[i];
            if (participant.age >= 5 && participant.age <= 17) {
                this.age_counts[participant.age - 5]++;
                if (participant.gender === "Male" || participant.gender === "male") {
                    this.age_genCount[participant.age - 5].male++;
                    this.male_count++;
                }
                else if (participant.gender === "Female" || participant.gender === "female") {
                    this.age_genCount[participant.age - 5].female++;
                    this.female_count++;
                }
            }
        }
    };
    return StatisticsComponent;
}());
StatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(350),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Participants_service__["a" /* ParticipantsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _b || Object])
], StatisticsComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/statistics.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkshopComponent = (function () {
    function WorkshopComponent(workshopsService, participantsService, flashMessage, route, router) {
        this.workshopsService = workshopsService;
        this.participantsService = participantsService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.router = router;
        this.month = "";
        this.date = "";
        this.day = "";
        this.year = "";
        this.alternates = [];
        this.adding = false;
        this.removing = false;
        this.editing = false;
    }
    WorkshopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.workshopsService.getWorkshop(params['id'])
                .subscribe(function (data) {
                _this.workshop = data;
                _this.workshop.date = new Date(_this.workshop.date);
                _this.month = _this.workshop.date.getMonth() + 1 + '';
                if (_this.month.length < 2)
                    _this.month = '0' + _this.month;
                _this.day = _this.workshop.date.getDate();
                if (_this.day.length < 2)
                    _this.day = '0' + _this.day;
                _this.year = _this.workshop.date.getFullYear();
                _this.rfcDate = _this.year + "-" + _this.month + "-" + _this.day;
                console.log(_this.workshop);
                _this.participantsService.getParticipants()
                    .subscribe(function (data) {
                    _this.participants = data;
                    _this.pullPlaceFromList();
                    // console.log(this.participants);
                }, function (error) { return console.log(error); });
            }, function (error) { return console.log(error); });
        });
    };
    WorkshopComponent.prototype.addParticipant = function () {
        var _this = this;
        if (this.selectedPart != null) {
            if (this.selectedPart.selectedWorkshops.length >= 2) {
                return this.flashMessage.show("Participant already enrolled in 2 workshops!", { cssClass: "alert-warning", timeout: 3000 });
            }
            // for(var i = 0; i < this.selectedPart.alternateWorkshops.length; i++){
            //   console.log(this.selectedPart.alternateWorkshops[i]._id)
            //   if(this.workshop._id === this.selectedPart.alternateWorkshops[i]._id){
            //     console.log(this.selectedPart.alternateWorkshops[i])
            //     let splicedAlt = this.selectedPart.alternateWorkshops[i].splice(i,1);
            //     console.log(this.selectedPart.alternateWorkshops[i])
            //     this.selectedPart.selectedWorkshops.push(splicedAlt[0]);
            //     this.participantsService.updateParticipant(this.selectedPart).subscribe(data => {
            //       console.log(data);
            //       return;
            //     });
            //   }
            // }
            this.workshop.participants.push(this.selectedPart);
            this.selectedPart.selectedWorkshops.push(this.workshop._id);
            this.participantsService.updateParticipant(this.selectedPart)
                .subscribe(function (data) {
                _this.selectedPart;
                _this.flashMessage.show("Participant added", { cssClass: "alert-success", timeout: 3000 });
            });
            console.log(this.selectedPart);
        }
        else {
            return this.flashMessage.show("Participant not added", { cssClass: "alert-warning", timeout: 3000 });
        }
        this.workshopsService.updateWorkshop(this.workshop)
            .subscribe(function (data) {
            if (data.success) {
                _this.selectedPart = null;
            }
        });
    };
    WorkshopComponent.prototype.addAlternate = function () {
        var _this = this;
        if (this.selectedAlt != null) {
            this.workshop.alternates.push(this.selectedAlt);
            this.selectedAlt.alternateWorkshops.push(this.workshop._id);
            this.participantsService.updateParticipant(this.selectedAlt)
                .subscribe(function (data) {
                _this.selectedPart;
                _this.flashMessage.show("Alternate Added", { cssClass: "alert-success", timeout: 3000 });
            });
            console.log(this.selectedAlt);
        }
        else {
            return this.flashMessage.show("Alternate not added", { cssClass: "alert-warning", timeout: 3000 });
        }
        this.workshopsService.updateWorkshop(this.workshop)
            .subscribe(function (data) {
            if (data.success) {
                _this.selectedAlt = null;
            }
        });
    };
    WorkshopComponent.prototype.removeParticipant = function () {
        var _this = this;
        if (confirm('Are you sure?')) {
            if (this.selectedPart !== null) {
                var index = this.workshop.participants.indexOf(this.selectedPart);
                this.workshop.participants.splice(index, 1);
                for (var i = 0; i < this.selectedPart.selectedWorkshops.length; i++) {
                    if (this.selectedPart.selectedWorkshops[i] === this.workshop._id) {
                        this.selectedPart.selectedWorkshops.splice(i, 1);
                        this.participantsService.updateParticipant(this.selectedPart)
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.workshopsService.updateWorkshop(_this.workshop)
                                    .subscribe(function (data) {
                                    console.log(data);
                                    _this.selectedPart = null;
                                    return _this.flashMessage.show("Participant removed", { cssClass: "alert-success", timeout: 3000 });
                                });
                            }
                        });
                    }
                }
            }
            else {
                return this.flashMessage.show("Participant not removed", { cssClass: "alert-warning", timeout: 3000 });
            }
        }
        else {
            return;
        }
    };
    WorkshopComponent.prototype.removeAlternate = function () {
        var _this = this;
        if (confirm("Are you sure?")) {
            if (this.selectedAlt != null) {
                var index = this.workshop.alternates.indexOf(this.selectedAlt);
                this.workshop.alternates.splice(index, 1);
                for (var i = 0; i < this.selectedAlt.alternateWorkshops.length; i++) {
                    if (this.selectedAlt.alternateWorkshops[i] === this.workshop._id) {
                        this.selectedAlt.alternateWorkshops.splice(i, 1);
                        this.participantsService.updateParticipant(this.selectedAlt)
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.success) {
                                console.log("here");
                                _this.workshopsService.updateWorkshop(_this.workshop)
                                    .subscribe(function (data) {
                                    console.log(data);
                                    if (data.success) {
                                        _this.selectedAlt = null;
                                        return _this.flashMessage.show("Alternate removed", { cssClass: "alert-success", timeout: 3000 });
                                    }
                                });
                            }
                        });
                    }
                }
            }
            else {
                return this.flashMessage.show("ALternate not removed", { cssClass: "alert-success", timeout: 3000 });
            }
        }
        else {
            return;
        }
    };
    WorkshopComponent.prototype.goBack = function () {
        this.router.navigate(['/workshops']);
    };
    WorkshopComponent.prototype.pullPlaceFromList = function () {
        for (var i = 0; i < this.participants.length; i++) {
            for (var j = 0; j < this.workshop.participants.length; j++) {
                var full = this.participants[i].firstName + ' ' + this.participants[i].lastName;
                var placedFull = this.workshop.participants[j].firstName + ' ' + this.workshop.participants[j].lastName;
                // let altFull = this.workshop.alternates[j].firstName + ' ' + this.workshop.alternates[j].lastName;
                if (full === placedFull || this.participants[i].selectedWorkshops.length >= 2) {
                    this.participants.splice(i, 1);
                }
            }
        }
    };
    WorkshopComponent.prototype.deleteWorkshop = function () {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.workshopsService.deleteWorkshop(this.workshop._id)
                .subscribe(function (data) {
                console.log(JSON.stringify(data));
                if (data.success) {
                    // this.workshopsService.removeParticipantFromWorkshop(0,{})
                    // this.onChange();
                    _this.router.navigate(['/participants']);
                    _this.workshop = null;
                }
            });
        }
        else {
            return;
        }
    };
    WorkshopComponent.prototype.editWorkshop = function () {
        this.editing = !this.editing;
    };
    WorkshopComponent.prototype.saveWorkshop = function () {
        this.workshop.date = this.rfcDate;
        if (confirm('Are you sure?')) {
            this.editing = !this.editing;
            if (typeof this.workshop.date === "string") {
                var x = this.workshop.date.split('-');
                this.workshop.date = new Date(x[0], x[1] - 1, x[2]);
                console.log(this.workshop.date);
                this.month = this.workshop.date.getMonth() + 1;
                this.day = this.workshop.date.getDate();
                this.year = this.workshop.date.getFullYear();
            }
            this.workshopsService.updateWorkshop(this.workshop)
                .subscribe(function (data) {
                if (data.success) {
                }
            });
        }
        else {
            return;
        }
    };
    return WorkshopComponent;
}());
WorkshopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-workshop',
        template: __webpack_require__(351),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_Participants_service__["a" /* ParticipantsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WorkshopComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/workshop.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_Participants_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkshopsComponent = (function () {
    function WorkshopsComponent(workshopsService, participantService, flashMessages, router) {
        this.workshopsService = workshopsService;
        this.participantService = participantService;
        this.flashMessages = flashMessages;
        this.router = router;
        this.create = false;
        this.workshops = [];
        this.participants = [];
        this.newWorkshop = {
            title: '',
            ageMin: '',
            ageMax: '',
            startTime: '',
            endTime: '',
            date: '',
            capacity: '',
            location: '',
            instructor: ''
        };
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workshopsService.getWorkshops()
            .subscribe(function (data) { return _this.workshops = data; }, function (error) { return console.log(error.message); });
        this.participantService.getParticipants()
            .subscribe(function (data) { return _this.participants = data; }, function (error) { return console.log(error); });
    };
    WorkshopsComponent.prototype.isFull = function (shop) {
        if (shop.participants.length >= shop.capacity) {
            return true;
        }
        else {
            return false;
        }
    };
    WorkshopsComponent.prototype.removeFromArray = function (arr, x) {
        arr.splice(x, 1);
    };
    // placeParticipants(){
    //   if(confirm('Are you sure?')){
    //     this.canPlace(this.participants,(err,toBeSorted)=>{
    //       this.shuffle(toBeSorted,(err,randomized)=>{
    //         //Selects workshops from alternates
    //         // for(let i = 0; i < randomized.length; i++){
    //         //   randomized[i].alternateWorkshops = randomized[i].preferredWorkshops;
    //         //   let j = 0;
    //         //   while(randomized[i].selectedWorkshops.length < 2){
    //         //     let rand = Math.floor(Math.random() * (randomized[i].alternateWorkshops.length));
    //         //     if(randomized[i].selectedWorkshops.length > 0){
    //         //       randomized[i].alternateWorkshops.splice(rand,1)
    //         //       randomized[i].selectedWorkshops[0] = randomized[i].alternateWorkshops[rand];
    //         //       rand = Math.floor(Math.random() * (randomized[i].alternateWorkshops.length));
    //         //       randomized[i].alternateWorkshops.splice(rand,1)
    //         //       randomized[i].selectedWorkshops[1] = randomized[i].alternateWorkshops[rand];
    //         //       // console.log("item: " + rand + " | # of selected: " + randomized[i].selectedWorkshops.length + " | # of alternate: " + randomized[i].alternateWorkshops.length);
    //         //       if(j < randomized[i].selectedWorkshops.length){
    //         //         j++;
    //         //       }else{
    //         //         break;
    //         //       }
    //         //     } else{
    //         //       // console.log('Stuck Here');
    //         //     }
    //         //   }
    //         // }
    //         // this.workshopsService.getWorkshops()
    //         // .subscribe(workshops => {
    //         //   if(workshops){
    //         //     let k = 0;
    //         //     // for(let k = 0; k < workshops.length;k++){
    //         //       // console.log(workshops[k].participants.length);
    //         //       // console.log(workshops[k].capacity);
    //         //       console.log(typeof workshops[k].capacity)
    //         //       console.log("#" + k + ": " + workshops[k].participants.length >= workshops[k].capacity)
    //         //     // }
    //         //   }
    //         // })
    //         let len = randomized.length-1;
    //         while(len != -1){
    //           if(!randomized[len].preferredWorkshops){
    //             len--;
    //           }
    //           for(let j = 0; j < randomized[len].preferredWorkshops.length;j++){
    //             console.log(j);
    //             if(randomized[len].preferredWorkshop[j] === null){
    //               console.log("Removing null")
    //               randomized[len].preferredWorkshops.splice(j,1);
    //             }
    //           }
    //             len--
    //         }
    //         let i = 0;
    //         len = randomized.length - 1;
    //         // console.log(randomized[0]);
    //         while(randomized[len-1].selectedWorkshops.length !== 2){
    //           var preferred = randomized[i].preferredWorkshops;
    //           //Break if no preferred workshops
    //           if(randomized[len-1].preferredWorkshops.length == 0){
    //             break;
    //           }
    //           //Adds to selected workshops if array not full
    //           if(randomized[i].selectedWorkshops.length < 2){
    //             // var index = preferred.indexOf(randomized[i].selectedWorkshops[(randomized[i].selectedWorkshops.length - 1)]);
    //             let index;
    //             if(randomized[i].preferredWorkshops.length === 1){
    //               index = 0;
    //             } else{
    //               index = ((Math.random() * randomized[i].preferredWorkshops.length)-1);
    //             }
    //             randomized[i].selectedWorkshops.push(preferred.splice(index,1)[0]);
    //             randomized[i].alternateWorkshops = preferred;
    //           }
    //           //Checks to see if end of array and everyone has 2 workshops selected
    //           if(i === (len-1) && (randomized[len-1].selectedWorkshops.length < 2)){
    //             i = 0
    //           } else if(i === (len-1) && (randomized[len-1].selectedWorkshops.length === 2)){
    //             //Forces array to only have unique values
    //             while(randomized[i].selectedWorkshops[0].title === randomized[i].selectedWorkshops[1].title){
    //               let rand = ((Math.random() * randomized[i].preferredWorkshops.length)-1)
    //               randomized[i].preferredWorkshops.push(randomized[i].selectedWorkshops[1]);
    //               randomized[i].selectedWorkshops[1] = randomized[i].preferredWorkshops.splice(rand, 1)[0];
    //             }
    //             // for(let j = 0; j < randomized.length; j++){
    //             //   this.workshopsService.getWorkshops()
    //             //   .subscribe(data => {
    //             //     let shops = data;
    //             //     this.participantService.updateParticipants(randomized[j])
    //             //     .subscribe((data)=>{
    //             //       if((j==(randomized.length - 1)) && data.success){
    //             //         this.flashMessages.show('Participants have been placed',{cssClass:'alert-success',timeout:3000});
    //             //         this.router.navigate(['/participants']);
    //             //       }
    //             //     },
    //             //     error => console.log(error));
    //             //   })
    //             // }
    //             break;
    //           } else{
    //             i++
    //           }
    //         }
    //       })
    //     })
    //   } else{
    //     return;
    //   }
    // }
    WorkshopsComponent.prototype.canPlace = function (participants, callback) {
        var participantsLen = participants.length;
        var toBeSorted = participants;
        var placed = 0;
        var len = toBeSorted.length;
        while (len) {
            if (toBeSorted[len - 1] && toBeSorted[len - 1].selectedWorkshops.length > 0) {
                placed++;
                toBeSorted.splice(len - 1, 1);
            }
            else {
                len--;
            }
        }
        console.log(placed + ' already placed of ' + participantsLen);
        if (toBeSorted.length === 0) {
            return this.flashMessages.show('No participants to place', { cssClass: 'alert-warning', timeout: 3000 });
        }
        else {
            callback(null, toBeSorted);
        }
    };
    WorkshopsComponent.prototype.shuffle = function (array, callback) {
        var t, m = array.length, i;
        // While there remain elements to shuffle…
        while (m) {
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        callback(null, array);
    };
    WorkshopsComponent.prototype.onSelect = function (workshop) {
        this.router.navigate(['/workshop/' + workshop._id]);
        this.selectedWorkshop = workshop;
    };
    WorkshopsComponent.prototype.update = function () {
        var _this = this;
        this.workshopsService.getWorkshops()
            .subscribe(function (data) { return _this.workshops = data; }, function (error) { return console.log(error.message); });
    };
    WorkshopsComponent.prototype.addWorkshop = function () {
        var _this = this;
        if (this.newWorkshop && confirm('Are you sure?')) {
            var x = this.newWorkshop.date.split('-');
            this.newWorkshop.date = new Date(x[0], x[1] - 1, x[2]);
            this.workshopsService.addWorkshop(this.newWorkshop)
                .subscribe(function (data) {
                if (data.success) {
                    _this.update();
                    _this.create = !_this.create;
                    _this.newWorkshop = {
                        title: '',
                        ageMin: '',
                        ageMax: '',
                        startTime: '',
                        endTime: '',
                        date: '',
                        capacity: '',
                        location: '',
                        instructor: ''
                    };
                }
                else {
                    _this.flashMessages.show(data.msg, { cssClass: 'alert-warning' });
                }
            }, function (error) { return console.log(error); });
        }
        else {
            return;
        }
    };
    return WorkshopsComponent;
}());
WorkshopsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-workshops',
        template: "\n  <div class=\"parent-container\">\n    <h3 *ngIf=\"!create\" class=\"section-header\">Workshops</h3>\n    <p *ngIf=\"!create\" class=\"workshop-count\">Number of workshops: {{workshops.length}}</p><br/>\n\n    <div class=\"controls\">\n      <input *ngIf=\"!create\" (click)=\"create=!create\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"New\">\n    </div>\n\n    <div *ngIf=\"!create\" class=\"form-group\"> \n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Search by Title\" (keyup)=\"0\" name=\"searchText\" >\n    </div>\n    \n      <ul class=\"list-group\" *ngIf=\"workshops.length > 0 && !create\">\n        <li class=\"list-group-item\" *ngFor=\"let workshop of workshops | filterBy:{title:searchText}; trackBy:workshop?._id\" (click)='onSelect(workshop)'>\n          <a >{{workshop.title}}   \n            <p class=\"list-group-item-details\">Participants enrolled: <span *ngIf=\"isFull(workshop)\" class=\"full\">{{workshop.participants.length}} of {{workshop.capacity}}</span>\n              <span *ngIf=\"!isFull(workshop)\" >{{workshop.participants.length}} of {{workshop.capacity}}</span>\n              <span class=\"\"> | Alternates: {{workshop.alternates.length}}</span>\n              <span class=\"\"> | Ages:{{workshop.ageMin}}-{{workshop.ageMax}}</span>\n              <span class=\"\"> | Time:{{workshop.startTime}}-{{workshop.endTime}}</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    \n\n    <form class=\"form-container\" *ngIf=\"create\">\n      <div class=\"controls\">\n        <input (click)=\"create=!create\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Back\">\n        <input (click)=\"addWorkshop()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Submit\">\n      </div>\n\n      <label>Title</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.title\" name=\"newWorkshop.title\" placeholder=\"Workshop title\"><br/>\n\n      <label>Minimum Age</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.ageMin\" name=\"newWorkshop.ageMin\" placeholder=\"Minimum Age\"><br/>\n\n      <label>Maximum Age</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.ageMax\" name=\"newWorkshop.ageMax\" placeholder=\"Maximum Age\"><br/>\n\n      <label>Date</label>\n      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newWorkshop.date\" name=\"newWorkshop.date\" /><br/>\n\n      <label>Start Time</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.startTime\" name=\"newWorkshop.startTime\" placeholder=\"Start Time\"><br/>\n\n      <label>End Time</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.endTime\" name=\"newWorkshop.endTime\" placeholder=\"End Time\"><br/>\n\n      <label>Capacity</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.capacity\" name=\"newWorkshop.capacity\" placeholder=\"Capacity\"><br/>\n\n      <label>Location</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.location\" name=\"newWorkshop.location\" placeholder=\"Location\"><br/>\n\n      <label>Instructor</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newWorkshop.instructor\" name=\"newWorkshop.instructor\" placeholder=\"Instructor\"><br/>\n    </form>\n  </div>\n  ",
        styles: [__webpack_require__(339)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_Workshops_service__["a" /* WorkshopsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_Participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_Participants_service__["a" /* ParticipantsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WorkshopsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/workshops.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.filterByString = function (filter) {
        return function (value) {
            // console.log(value.toLowerCase().indexOf(filter) + ': ' + value);
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    };
    FilterByPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (!value.hasOwnProperty(key)) {
                    return false;
                }
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * Defatul filterDefault function
     *
     * @param filter
     * @returns {(value:any)=>boolean}
     */
    FilterByPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter == value;
        };
    };
    FilterByPipe.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    FilterByPipe.prototype.transform = function (array, filter) {
        var type = typeof filter;
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return array.filter(this.filterByObject(filter));
        }
        return array.filter(this.filterDefault(filter));
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterBy'
    })
], FilterByPipe);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/filterby.pipe.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByDatePipe = (function () {
    function OrderByDatePipe() {
    }
    OrderByDatePipe.prototype.transform = function (value, args) {
        var newVal = value.sort(function (a, b) {
            var date1 = new Date(a.date);
            var date2 = new Date(b.date);
            if (date1 > date2) {
                return 1;
            }
            else if (date1 < date2) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return newVal;
    };
    return OrderByDatePipe;
}());
OrderByDatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderByDate'
    })
], OrderByDatePipe);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/order-by-date.pipe.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByLastPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByLastPipe = (function () {
    function SortByLastPipe() {
    }
    SortByLastPipe.prototype.transform = function (value, args) {
        return value.sort(function (a, b) {
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
                return 1;
            }
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
                return -1;
            }
            return 0;
        });
    };
    return SortByLastPipe;
}());
SortByLastPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortByLast'
    })
], SortByLastPipe);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/sort-by-last.pipe.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/environment.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkshopsService = (function () {
    // _url:string = 'http://localhost:3000';
    function WorkshopsService(http) {
        this.http = http;
        this._url = 'http://107.170.76.50';
    }
    WorkshopsService.prototype.getWorkshops = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.get(this._url + '/workshop/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.getWorkshop = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.get(this._url + '/workshop/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.addWorkshop = function (workshop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.post(this._url + '/workshop/', workshop, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.updateWorkshop = function (workshop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/workshop/' + workshop._id, workshop, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.updateWorkshops = function (workshop) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/workshop/' + workshop._id, workshop, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.removeParticipantFromWorkshop = function (id, update) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/workshop/' + id, update, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.deleteWorkshop = function (workshop_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.delete(this._url + '/workshop/' + workshop_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WorkshopsService.prototype.getWorkshopParticipants = function (ids) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.get(this._url + '/participant/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return WorkshopsService;
}());
WorkshopsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], WorkshopsService);

var _a;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/Workshops.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <div class=\"alerts\">\r\n    <flash-messages></flash-messages>\r\n  </div>\r\n  \r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<section id=\"login\">\r\n  <h2 class=\"site-title\">Iberia Parish Library Workshop</h2>\r\n  <form class=\"login-form\" (submit)=\"onLoginSubmit()\" >\r\n    <input class=\"login-form-input form-control\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\">\r\n    <input class=\"login-form-input form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\r\n    <input class=\"login-form-button btn-default\" type=\"submit\" value=\"Submit\">\r\n  </form>\r\n</section>"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "\r\n<nav (window:resize)=\"onResize($event)\" id=\"navbar\" class=\"navbar navbar-default\" *ngIf=\"authService.isLoggedIn()\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggle()\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div *ngIf=\"width >= 768\" class=\" navbar-collapse\"  id=\"bs-example-navbar-collapse-1\">\r\n      <div class=\"container\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/participants']\">Participants</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/workshops']\">Workshops</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/schedule']\">Schedule</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/statistics']\">Statistics</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/settings']\">Settings</a></li>\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/register']\">Register</a></li>\r\n          <li><a class=\"nav-item\" href=\"\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        </ul>\r\n      </div>\r\n    </div><!-- /.navbar-collapse -->\r\n\r\n    <div *ngIf=\"collapse\" class=\" navbar-collapse\"  id=\"bs-example-navbar-collapse-1\">\r\n      <div class=\"container\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/participants']\">Participants</a></li>\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/workshops']\">Workshops</a></li>\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/schedule']\">Schedule</a></li>\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/statistics']\">Statistics</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/settings']\">Settings</a></li>\r\n          <li (click)=\"collapse=!collapse\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/register']\">Register</a></li>\r\n          <li><a class=\"nav-item\" href=\"\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n        </ul>\r\n      </div>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n\r\n<!--<nav class=\"navbar navbar-default\" *ngIf=\"authService.isLoggedIn()\">\r\n  <ul class=\"nav navbar-nav navbar-left nav-group-main\">\r\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/participants']\">Participants</a></li>\r\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/workshops']\">Workshops</a></li>\r\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/schedule']\">Schedule</a></li>\r\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-item\" [routerLink]=\"['/statistics']\">Statistics</a></li>\r\n  </ul>\r\n\r\n  <ul class=\"nav navbar-nav navbar-right nav-group-right\">\r\n    <li><a class=\"nav-item\" href=\"\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n  </ul>\r\n</nav>-->"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"participant\" class=\"controls\">\r\n  <input *ngIf=\"!editing\" (click)=\"goBack()\" class=\"btn btn-default control\" type=\"button\" value=\"Back\">\r\n  <input *ngIf=\"!editing\" (click)=\"editParticipant()\" class=\"btn btn-default control\" type=\"button\" value=\"Edit\">\r\n  <input *ngIf=\"!editing\" (click)=\"deleteParticipant()\" class=\"btn btn-warning control\" type=\"button\" value=\"Delete\">\r\n</div>\r\n\r\n<div class=\"detail-container\" *ngIf=\"participant && !editing\">\r\n  <p>Name: {{participant.firstName}} {{participant.lastName}}</p>\r\n  <p>Age: {{participant.age}}</p>\r\n  <p>Birthday: {{month}}/{{day}}/{{year}}</p>\r\n  <p>Gender: {{participant.gender}}</p>\r\n  <p>Primary Phone Number: {{participant.phoneNumber}}</p>\r\n  <p *ngIf=\"participant.phoneNumberOpt\">Secondary Phone Number: {{participant.phoneNumberOpt}}</p>\r\n  <p>Address:{{participant.address.street}}</p>\r\n  <p *ngIf=\"participant.address.street2 !== null\">{{participant.address.street2}}</p>\r\n  <p>{{participant.address.city}}, {{participant.address.state}}, {{participant.address.zipCode}}</p>\r\n  <p>Additional Info: <span *ngIf=\"participant.additional; else noadditional\">{{participant.additional}}</span></p>\r\n  <ng-template #noadditional>None</ng-template>\r\n  <p *ngIf=\"participant.photographPermission\">Photograph Permission: Yes</p>\r\n  <p *ngIf=\"!participant.photographPermission\">Photograph Permission: No</p>\r\n  \r\n  \r\n  <p>Guardian:  {{participant.guardian.firstName}} {{participant.guardian.lastName}}</p>\r\n  <p>{{participant.guardian.phoneNumber}}</p>\r\n  <p>{{participant.guardian.email}}</p>\r\n\r\n  <p *ngIf=\"participant.selectedWorkshops.length === 0\">Workshops: None</p>\r\n  <div *ngIf=\"participant.selectedWorkshops.length > 0\">\r\n    <p>Workshops: </p>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let shop of participant.selectedWorkshops\">{{shop.title}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <p *ngIf=\"participant.alternateWorkshops.length === 0\">Alternate Workshops: None</p>\r\n  <div *ngIf=\"participant.alternateWorkshops.length > 0\">\r\n    <p>Alternate Workshops:</p>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let shop of participant.alternateWorkshops\">{{shop.title}}</li>\r\n    </ul>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<form (submit)=\"saveParticipant()\" class=\"form-container\" *ngIf=\"editing\">\r\n  <div class=\"controls\">\r\n    <input (click)=\"editing=!editing\" class=\"btn btn-default control\" type=\"button\" value=\"Back\">\r\n    <input (click)=\"saveParticipant()\" class=\"btn btn-success control\" type=\"button\" value=\"Save\">\r\n  </div>\r\n\r\n  <label>First Name</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.firstName\" name=\"participant.firstName\" placeholder=\"First Name\">\r\n\r\n  <label>Last Name</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.lastName\" name=\"participant.lastName\" placeholder=\"Last Name\">\r\n\r\n  <label>Age</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.age\" name=\"participant.age\" placeholder=\"Age\">\r\n\r\n  <label>Birthday</label>\r\n  <input type=\"date\" class=\"form-control\" [(ngModel)]=\"rfcBDay\" name=\"rfcBDay\"/>\r\n\r\n  <label>Gender</label>\r\n  <select class=\"form-control\" [(ngModel)]=\"participant.gender\" name=\"participant.gender\">\r\n    <option selected value=\"Male\">Male</option>\r\n    <option value=\"Female\">Female</option>\r\n  </select>\r\n\r\n  <label>Phone Number 1</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.phoneNumber\" name=\"participant.phoneNumber\" placeholder=\"Phone Number\">\r\n\r\n  <label>Phone Number 2(optional)</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.phoneNumberOpt\" name=\"participant.phoneNumberOpt\">\r\n\r\n  <label>Additional Infomation(optional)</label>\r\n  <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"participant.additional\" name=\"participant.additional\"></textarea><br/>\r\n\r\n\r\n  <label>\r\n    <input type=\"checkbox\" class=\"\" [checked]=\"participant.photographPermission\" (change)=\"participant.photographPermission = !participant.photographPermission\" name=\"participant.photographPermission\" value=true/> Permission to photograph\r\n  </label>\r\n  <hr />\r\n  <h4>Address</h4><br/>\r\n  <label>Street</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.address.street\" name=\"participant.address.street\" placeholder=\"Street\"><br/>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.address.street2\" name=\"participant.address.street2\" placeholder=\"(optional)\">\r\n  <label>City</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.address.city\" name=\"participant.address.city\" placeholder=\"City\">\r\n  <label>State</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.address.state\" name=\"participant.address.state\" placeholder=\"State\">\r\n  <label>Zip Code</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.address.zipCode\" name=\"participant.address.zipCode\" placeholder=\"Zip Code\">\r\n  <hr />\r\n\r\n  <h4>Guardian</h4><br/>\r\n  <label>First Name</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.guardian.firstName\" name=\"participant.guardian.firstName\" placeholder=\"First Name\">\r\n\r\n  <label>Last Name</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.guardian.lastName\" name=\"participant.guardian.lastName\" placeholder=\"Last Name\">\r\n\r\n  <label>Phone Number</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.guardian.phoneNumber\" name=\"participant.guardian.phoneNumber\" placeholder=\"Phone Number\">\r\n\r\n  <label>Email Address</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"participant.guardian.email\" name=\"participant.guardian.email\" placeholder=\"Email Address\">\r\n\r\n  <h4>Preferred Workshops</h4><br/>\r\n  <label>Preference 1</label>\r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p1\" name=\"p1\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span> | Ages: {{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n      <span> | {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n  \r\n  <label>Preference 2</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p2\" name=\"p2\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}\r\n      <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n\r\n  <label>Preference 3</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p3\" name=\"p3\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n\r\n  <label>Preference 4</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p4\" name=\"p4\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n\r\n  <label>Preference 5</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p5\" name=\"p5\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n\r\n  <label>Preference 6</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p6\" name=\"p6\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span>({{workshop.ageMin}}-{{workshop.ageMax}})</span> \r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n\r\n  <label>Preference 7</label>      \r\n  <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"p7\" name=\"p7\">\r\n    <option [ngValue]=\"\">\r\n    <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n      <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span>\r\n      <span>| {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n    </option>\r\n  </select>\r\n</form>\r\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n    <h3 *ngIf=\"!create\" class=\"section-header\">Participants</h3>\r\n    <p *ngIf=\"!create\" class=\"participant-count\">Number of participants: {{participants.length}}</p>\r\n\r\n    <div *ngIf=\"!create\" class=\"controls\">\r\n      <input (click)=\"print()\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Print\">\r\n      <input (click)=\"create=!create\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"New\">\r\n    </div>\r\n\r\n    <div *ngIf=\"!create\" class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Search by Last Name\" (keyup)=\"0\" name=\"searchText\" >\r\n    </div>\r\n    \r\n    <ul class=\"list-group\" *ngIf=\"participants.length > 0 && !create\">\r\n      <li class=\"list-group-item\" *ngFor=\"let participant of participants | filterBy: {lastName: searchText}; trackBy:participant?._id\" (click)='onSelect(participant)'><a class=\"\">{{participant.lastName}}, {{participant.firstName}} <p class=\"list-group-item-details\">Workshops: {{participant.selectedWorkshops.length}} of 2</p></a></li>\r\n    </ul>\r\n\r\n    <div id=\"print-section\">\r\n      <div *ngFor=\"let participant of participants\">\r\n        <div class=\"print-content\">\r\n\r\n          <div class=\"print-body\">\r\n            <div class=\"print-header\">\r\n              <img id=\"logo\" [src]=logoPath />\r\n            </div>\r\n            <div>Dear {{participant.firstName}} {{participant.lastName}},</div><br/>\r\n            <p>Welcome to Iberia Parish Library’s Summer Workshop program! We are happy to celebrate the 34th year of workshops. We hope that you will enjoy the summer activities that we have planned for you. It brings the library much joy to play an active role in our community.</p>\r\n            <p>Your workshop schedule is attached, and you will find all of the information needed to attend the workshops (branch, time, etc.). Remember there are two sections on the form: <strong>registered and alternate</strong>. In the event you want to try to attend a workshop that you are not registered in, please come 30 minutes prior to the workshop and sign up as a standby. It is not necessary that you be an alternate to participate as a standby. Signing up as a standby does not guarantee you admittance into the workshop.</p>\r\n            <p>Due to limited space, parents are not allowed to observe the workshops. Parents may remain in the library should their child become upset.</p>\r\n            <p>Please note that if you are running late to check your child into the workshop that they are registered for, due to traffic or other incidences, please call the library that the workshop is located ahead of the workshop start time to make sure we mark you down as coming. If the workshop begins and you have not called ahead to say you are still coming, that spot will be given to a standby and your spot will be forfeited.</p>\r\n            <p>Please alert the staff of any allergies or medical conditions your child may have.</p>\r\n            <p>Please remember that we follow the library’s basic rules of behavior for the workshops (no abusive language, gum chewing, disruptive behavior) and practice common courtesy to the workshop leaders and staff. Children who do not behave correctly will be asked to leave. </p>\r\n            <p>The workshops are FREE of charge thanks to our very generous Summer Workshop sponsors which include: The New Iberia Optimist Club, Community First Bank, Cox Communications, Friends of the Library and your Iberia Parish Library. We are looking forward to seeing you at the workshops!</p>\r\n            <div class=\"footer\">\r\n              <div class=\"signature\">\r\n                <div>Sincerely,</div>\r\n                <div>Stephanie Lee</div>\r\n                <div>Programming Director</div>\r\n                <div>Iberia Parish Library</div>\r\n                <div>Work: 337.364.7150</div>\r\n                <div>E-Mail: slee@iberialibrary.org</div>\r\n              </div>\r\n              <div class=\"pagebreak footer-address\">445 East Main Street • New Iberia, LA 70560 • Phone:  337-364-7150 • Fax:  337-364-7622</div>\r\n            </div>\r\n            <br/><br/>\r\n            \r\n\r\n            <div class=\"print-header\">\r\n              <img id=\"logo\" [src]=logoPath />\r\n            </div>\r\n            <div>Greetings!</div>\r\n            <br/>\r\n            <div>{{participant.firstName}} {{participant.lastName}} has been registered for:</div>\r\n            <br/>\r\n            <div *ngFor=\"let shop of participant.selectedWorkshops\">\r\n              <div class=\"print-text\">{{shop.title}} | {{shop.date | date:'fullDate'}} | {{shop.startTime}} - {{shop.endTime}} | {{shop.location}}</div>\r\n            </div>\r\n            <br/>\r\n            <div>And is an alternate in: </div>\r\n            <br/>\r\n            <div *ngFor=\"let shop of participant.alternateWorkshops\">\r\n              <div class=\"print-text\">{{shop.title}} | {{shop.date | date:'fullDate'}} | {{shop.startTime}} - {{shop.endTime}} | {{shop.location}}</div>\r\n            </div>\r\n            <br/>\r\n\r\n            <p>If you did not get into the workshops you wanted, don’t be too disheartened! There is always a chance you will be called as an alternate if someone who is registered is unable to attend <strong>OR</strong> you can come the day of the workshop and wait as a standby for a chance to get in, however it is important to remember that coming as a standby does not guarantee you a spot.</p>\r\n            <p>Please note that if you are running late to check your child into the workshop that they are registered for, due to traffic or other incidents, please call the library that workshop is located ahead of the workshop start time to make sure we mark you down as coming. If the workshop begins and you have not called ahead to say you are still coming, that spot will be given to a standby and your spot will be forfeited.</p>\r\n            <p class=\"pagebreak\">Do not forget our other exiciting summer programs! You can sign up for the <strong>Summer Reading Program</strong> at any time. We Have other fantastic performaces, events and activities along with the summer workshops that you may attend! You are bound to have the best summer ever with the Iberia Parish Library. So without further ado: let's have fun!</p>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </div>\r\n    \r\n\r\n    <form class=\"form-container\" *ngIf=\"create\">\r\n      <h3 *ngIf=\"create\" class=\"section-header\">Add Participant</h3><br/>\r\n      <div class=\"controls\">\r\n        <input (click)=\"create=!create\" class=\"btn btn-default control btn-lg\" type=\"button\" value=\"Back\">\r\n        <input (click)=\"addParticipant()\" class=\"btn btn-success control btn-lg\" type=\"button\" value=\"Submit\">\r\n      </div>\r\n      <label>First Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.firstName\" name=\"newParticipant.firstName\" placeholder=\"First Name\" required>\r\n\r\n      <label>Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.lastName\" name=\"newParticipant.lastName\" placeholder=\"Last Name\" required>\r\n\r\n      <label>Age</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.age\" name=\"newParticipant.age\" placeholder=\"Age\" required>\r\n\r\n      <label>Birthday</label>\r\n      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"newParticipant.birthDate\" name=\"newParticipant.birthDate\"/>\r\n\r\n      <label>Gender</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"newParticipant.gender\" name=\"newParticipant.gender\">\r\n        <option value=\"Male\">Male</option>\r\n        <option value=\"Female\">Female</option>\r\n      </select>\r\n\r\n      <label>Phone Number 1</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.phoneNumber\" name=\"newParticipant.phoneNumber\" placeholder=\"Phone Number\" required>\r\n\r\n      <label>Phone Number 2(optional)</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.phoneNumberOpt\" name=\"newParticipant.phoneNumberOpt\">\r\n\r\n      <label>Additional Information(optional)</label>\r\n      <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newParticipant.additional\" name=\"newParticipant.additional\" placeholder=\"Enter additional information\"></textarea><br/>\r\n\r\n\r\n      <label>\r\n        <input type=\"checkbox\" class=\"\" [checked]=\"newParticipant.photographPermission\" (change)=\"newParticipant.photographPermission = !newParticipant.photographPermission\" name=\"newParticipant.photographPermission\" value=true/> Permission to photograph\r\n      </label>\r\n      <hr />\r\n      <h4>Address</h4><br/>\r\n      <label>Street</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.address.street\" name=\"newParticipant.address.street\" placeholder=\"Street\"><br/>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.address.street2\" name=\"newParticipant.address.street2\" placeholder=\"(optional)\">\r\n      <label>City</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.address.city\" name=\"newParticipant.address.city\" placeholder=\"City\">\r\n      <label>State</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.address.state\" name=\"newParticipant.address.state\" placeholder=\"State\">\r\n      <label>Zip Code</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.address.zipCode\" name=\"newParticipant.address.zipCode\" placeholder=\"Zip Code\">\r\n      <hr />\r\n\r\n      <h4>Guardian</h4><br/>\r\n      <label>First Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.guardian.firstName\" name=\"newParticipant.guardian.firstName\" placeholder=\"First Name\" required>\r\n\r\n      <label>Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.guardian.lastName\" name=\"newParticipant.guardian.lastName\" placeholder=\"Last Name\" required>\r\n\r\n      <label>Phone Number</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.guardian.phoneNumber\" name=\"newParticipant.guardian.phoneNumber\" placeholder=\"Phone Number\" required>\r\n\r\n      <label>Email Address</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newParticipant.guardian.email\" name=\"newParticipant.guardian.email\" placeholder=\"Email Address\">\r\n\r\n      <hr />\r\n      <h4>Preferred Workshops</h4><br/>\r\n      <label>Preference 1</label>\r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s1\" name=\"s1\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  \r\n          <span> | Ages: {{workshop.ageMin}}-{{workshop.ageMax}}</span> \r\n          <span> | {{workshop.startTime}}-{{workshop.endTime}}</span>\r\n        </option>\r\n      </select>\r\n      \r\n      <label>Preference 2</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s2\" name=\"s2\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n\r\n      <label>Preference 3</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s3\" name=\"s3\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n\r\n      <label>Preference 4</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s4\" name=\"s4\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n\r\n      <label>Preference 5</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s5\" name=\"s5\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n\r\n      <label>Preference 6</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s6\" name=\"s6\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>({{workshop.ageMin}}-{{workshop.ageMax}})</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n\r\n      <label>Preference 7</label>      \r\n      <select *ngIf=\"workshops\" class=\"form-control\" [(ngModel)]=\"s7\" name=\"s7\">\r\n        <option *ngFor=\"let workshop of workshops\" [ngValue]=\"workshop._id\">{{workshop.title}}  <span>{{workshop.ageMin}}-{{workshop.ageMax}}</span> <span>| {{workshop.startTime}}-{{workshop.endTime}}</span></option>\r\n      </select>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"register\">\r\n  \r\n  <form (submit)=\"onRegisterSubmit()\" class=\"well well-lg\">\r\n    <input (click)=\"goBack()\" class=\"btn btn-default control pull-right register-back\" type=\"button\" value=\"Back\">\r\n    <h3 class=\"form-header\">Register User</h3>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-input form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-input form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Email Address</label>\r\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-input form-control\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-input form-control\">\r\n    </div>\r\n    <br/>\r\n\r\n    <input type=\"submit\" class=\"form-submit btn btn-default btn-lg\" value=\"Submit\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"!changePass\" (click)=\"changePass=!changePass\" class=\"btn btn-default\">Change Password</button>\n<div *ngIf=\"changePass\" class=\"well\">\n    <form class=\"padded-form\" (submit)=\"changePassword()\">\n        <div class=\"row\">\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" [(ngModel)]=\"update.password\" name=\"update.password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <input type=\"password\" [(ngModel)]=\"update.confirm\" name=\"update.confirm\" class=\"form-control\" placeholder=\"Confirm Password\">\n            </div>\n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">\n    </form>\n</div>\n<!--\n<form *ngIf=\"clear\" [formGroup]=\"authForm\" novalidate>\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n        <p>Form value: {{ authForm.value | json }}</p>\n        <p>Form status: {{ authForm.status | json }}</p>\n    </div>\n    \n</form>-->\n\n<button (click)=\"clear = !clear\" class=\"btn btn-warning\">Clear</button>"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<section id=\"statistics\">\r\n  <h3>Statistics</h3>\r\n\r\n  <div>\r\n    <p>Total Number of Participants: {{participants.length}}</p>\r\n    <p>Total Number of Workshops: {{workshops.length}}</p>\r\n  </div>\r\n\r\n  <br/>\r\n  \r\n  <div>\r\n    <h4>Age Counts</h4>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let age_count of age_counts;let i = index\"><p>Number of {{i+5}} year olds: {{age_count}}</p><p class=\"list-group-item-details\">Boys: {{age_genCount[i].male}} <span>| Girls: {{age_genCount[i].female}}</span></p></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div>\r\n    <h2>Gender Count</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Boys: {{male_count}}</li>\r\n      <li class=\"list-group-item\">Girls: {{female_count}}</li>\r\n    </ul>\r\n  </div>\r\n  \r\n</section>"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"workshop\" class=\"controls\">\r\n  <input *ngIf=\"!editing && !adding && !removing\" (click)=\"goBack()\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Back\">\r\n  <input *ngIf=\"!editing && !adding && !removing\" (click)=\"adding = !adding\" class=\"btn btn-default control btn-lg\" type=\"button\" value=\"Add\">\r\n  <input *ngIf=\"!editing && !adding && !removing\" (click)=\"removing = !removing\" class=\"btn btn-default control btn-lg\" type=\"button\" value=\"Remove\">\r\n  <input *ngIf=\"!editing && !adding && !removing\" (click)=\"editWorkshop()\" class=\"btn btn-default control btn-lg\" type=\"button\" value=\"Edit\">\r\n  <input *ngIf=\"!editing && !adding && !removing\" (click)=\"deleteWorkshop()\" class=\"btn btn-warning control btn-lg\" type=\"button\" value=\"Delete\">\r\n  \r\n</div>\r\n\r\n<div class=\"detail-container\" *ngIf=\"(!editing && !adding && !removing) && workshop\">\r\n  <p>Name: {{workshop.title}}</p>\r\n  <p>Ages: {{workshop.ageMin}}-{{workshop.ageMax}}</p>\r\n  <p>Date: {{workshop.date | date:'shortDate'}}</p>\r\n  <p>Time: {{workshop.startTime}} - {{workshop.endTime}}</p>\r\n  <p>Location: {{workshop.location}}</p>\r\n  <p>Instructor: {{workshop.instructor}}</p>\r\n  <p>Enrolled: {{workshop.participants.length}}/{{workshop.capacity}}</p>\r\n  <p *ngIf=\"workshop.participants.length == 0\">Participants: None Assigned</p>\r\n  <div *ngIf=\"workshop.participants.length > 0\">\r\n    <p>Participants: </p>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let participant of workshop.participants\">{{participant.firstName}} {{participant.lastName}} \r\n        <p class=\"list-group-item-details\">\r\n          <span>Phone Number: {{participant.phoneNumber}}</span>\r\n          <span *ngIf=\"participant.phoneNumberOpt\"> | Phone Number(optional): {{participant.phoneNumberOpt}}</span>\r\n          <span> | Guardian: {{participant.guardian.firstName}} {{participant.guardian.lastName}}</span>\r\n          <span> | Photograph Permisson: <span *ngIf=\"participant.photographPermission\">Yes</span><span *ngIf=\"!participant.photographPermission\">No</span></span>\r\n          <span> | Additional: {{participant.additional}}</span>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <p *ngIf=\"workshop.alternates.length == 0\">Alternates: None Assigned</p>\r\n  <div *ngIf=\"workshop.alternates.length > 0\">\r\n    <p>Alternates: </p>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\" *ngFor=\"let alternate of workshop.alternates\">{{alternate.firstName}} {{alternate.lastName}}\r\n        <p class=\"list-group-item-details\">\r\n          <span>Phone Number: {{alternate.phoneNumber}}</span>\r\n          <span *ngIf=\"alternate.phoneNumberOpt\"> | Phone Number(optional): {{alternate.phoneNumberOpt}}</span>\r\n          <span> | Guardian: {{alternate.guardian.firstName}} {{alternate.guardian.lastName}}</span>\r\n          <span> | Photograph Permisson: <span *ngIf=\"alternate.photographPermission\">Yes</span><span *ngIf=\"!alternate.photographPermission\">No</span></span>\r\n          <span> | Additional: {{alternate.additional}}</span>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"adding && participants\" class=\"form-group\">\r\n  <h2>Add</h2>\r\n  <div class=\"controls\">\r\n    <input (click)=\"adding=!adding\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Back\">\r\n  </div>\r\n  <h3>Participant</h3>\r\n  <select class=\"form-control\" [(ngModel)]=\"selectedPart\" name=\"selectedPart\">\r\n    <option value=\"null\"></option>\r\n    <option *ngFor=\"let participant of participants | sortByLast\" [ngValue]=\"participant\">{{participant.firstName}} {{participant.lastName}}</option>\r\n  </select>\r\n  <input (click)=\"addParticipant()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Submit\">\r\n  <h3>Alternate</h3>\r\n  \r\n    <select class=\"form-control\" [(ngModel)]=\"selectedAlt\" name=\"selectedAlt\">\r\n      <option value=\"null\"></option>\r\n      <option *ngFor=\"let participant of participants | sortByLast\" [ngValue]=\"participant\">{{participant.firstName}} {{participant.lastName}}</option>\r\n    </select>\r\n    <input (click)=\"addAlternate()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Submit\">\r\n  \r\n\r\n</div>\r\n\r\n<div *ngIf=\"removing\" class=\"form-group\">\r\n  <h2>Remove</h2>\r\n  <div class=\"controls\">\r\n    <input (click)=\"removing=!removing\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Back\">\r\n  </div>\r\n  <h3>Participant</h3>\r\n  <select class=\"form-control\" [(ngModel)]=\"selectedPart\" name=\"selectedPart\">\r\n    <option value=\"null\"></option>\r\n    <option *ngFor=\"let participant of workshop.participants | sortByLast\" [ngValue]=\"participant\">{{participant.firstName}} {{participant.lastName}}</option>\r\n  </select>\r\n  <input (click)=\"removeParticipant()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Submit\">\r\n  <h3>Alternate</h3>\r\n  <select class=\"form-control\" [(ngModel)]=\"selectedAlt\" name=\"selectedAlt\">\r\n    <option value=\"null\"></option>\r\n    <option *ngFor=\"let participant of workshop.alternates | sortByLast\" [ngValue]=\"participant\">{{participant.firstName}} {{participant.lastName}}</option>\r\n  </select>\r\n  <input (click)=\"removeAlternate()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Submit\">\r\n</div>\r\n\r\n<form class=\"form-container\" *ngIf=\"editing\">\r\n  <div class=\"controls\">\r\n    <input (click)=\"editing=!editing\" class=\"btn btn-default btn-lg control\" type=\"button\" value=\"Back\">\r\n    <input (click)=\"saveWorkshop()\" class=\"btn btn-success btn-lg control\" type=\"button\" value=\"Save\">\r\n  </div>\r\n  \r\n  <label>Title</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.title\" name=\"workshop.title\" ngValue=\"workshop.title\"><br/>\r\n\r\n  <label>Minimum Age</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.ageMin\" name=\"workshop.ageMin\" ngValue=\"workshop.ageMin\"><br/>\r\n\r\n  <label>Maximum Age</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.ageMax\" name=\"workshop.ageMax\" ngValue=\"workshop.ageMax\"><br/>\r\n\r\n  <label>Date</label>\r\n  <input class=\"form-input\" type=\"date\" [(ngModel)]=\"rfcDate\" name=\"rfcDate\" /><br/>\r\n\r\n  <label>Start Time</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.startTime\" name=\"workshop.startTime\" ngValue=\"workshop.startTime\"><br/>\r\n\r\n  <label>End Time</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.endTime\" name=\"workshop.endTime\" ngValue=\"workshop.endTime\"><br/>\r\n\r\n  <label>Location</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.location\" name=\"workshop.location\" ngValue=\"workshop.location\"><br/>\r\n\r\n  <label>Instructor</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.instructor\" name=\"workshop.instructor\" ngValue=\"workshop.instructor\"><br/>\r\n\r\n  <label>Capacity</label>\r\n  <input class=\"form-input\" type=\"text\" [(ngModel)]=\"workshop.capacity\" name=\"workshop.capacity\" ngValue=\"workshop.capacity\">\r\n</form>\r\n"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Validation_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParticipantsService = (function () {
    // _url:string = 'http://localhost:3000';
    function ParticipantsService(http, validationService, flashMessages) {
        this.http = http;
        this.validationService = validationService;
        this.flashMessages = flashMessages;
        this._url = 'http://107.170.76.50';
    }
    ParticipantsService.prototype.getParticipants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.get(this._url + '/participant/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ParticipantsService.prototype.getParticipant = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.get(this._url + '/participant/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ParticipantsService.prototype.addParticipant = function (participant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.post(this._url + '/participant/', participant, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ParticipantsService.prototype.deleteParticipant = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.delete(this._url + '/participant/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ParticipantsService.prototype.updateParticipant = function (participant) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/participant/' + participant._id, participant, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ParticipantsService.prototype.updateParticipants = function (participants) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/participant/many', participants, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ParticipantsService;
}());
ParticipantsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Validation_service__["a" /* ValidationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Validation_service__["a" /* ValidationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ParticipantsService);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/Participants.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateLogin = function (user) {
        if (!user.username || !user.password) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateRegister = function (user) {
        if (!user.name || !user.email || !user.username || !user.password) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationService.prototype.validatePhoneNumber = function (phoneNumber) {
        var re = /^[01]?[- .]?(\([2-9]\d{2}\)|[2-9]\d{2})[- .]?\d{3}[- .]?\d{4}$/;
        return re.test(phoneNumber);
    };
    return ValidationService;
}());
ValidationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidationService);

//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/Validation.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    // _url:string = 'http://localhost:3000';
    function AuthService(http) {
        this.http = http;
        this._url = 'http://107.170.76.50';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._url + '/user/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._url + '/user/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.persistData = function () {
        var token = localStorage.getItem('id_token');
        var user = localStorage.getItem('user');
        return { token: token, user: user };
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.getItem('id_token');
        localStorage.getItem('user');
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/auth.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    // _url:string = 'http://localhost:3000';
    function UserService(http) {
        this.http = http;
        this._url = 'http://107.170.76.50';
    }
    UserService.prototype.updateUser = function (update) {
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        headers.append('Authorization', localStorage.getItem('id_token'));
        return this.http.put(this._url + '/user/' + user.id, update, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=C:/Users/Black Josh/Desktop/work/library-workshop-server/angular-src/src/User.service.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.bundle.js.map