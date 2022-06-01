"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var styleclass_1 = require("primeng/styleclass");
var accordion_1 = require("primeng/accordion");
var autocomplete_1 = require("primeng/autocomplete");
var avatar_1 = require("primeng/avatar");
var avatargroup_1 = require("primeng/avatargroup");
var badge_1 = require("primeng/badge");
var breadcrumb_1 = require("primeng/breadcrumb");
var button_1 = require("primeng/button");
var calendar_1 = require("primeng/calendar");
var card_1 = require("primeng/card");
var carousel_1 = require("primeng/carousel");
var cascadeselect_1 = require("primeng/cascadeselect");
var chart_1 = require("primeng/chart");
var checkbox_1 = require("primeng/checkbox");
var chip_1 = require("primeng/chip");
var chips_1 = require("primeng/chips");
var codehighlighter_1 = require("primeng/codehighlighter");
var confirmdialog_1 = require("primeng/confirmdialog");
var confirmpopup_1 = require("primeng/confirmpopup");
var colorpicker_1 = require("primeng/colorpicker");
var contextmenu_1 = require("primeng/contextmenu");
var dataview_1 = require("primeng/dataview");
var dialog_1 = require("primeng/dialog");
var divider_1 = require("primeng/divider");
var dropdown_1 = require("primeng/dropdown");
var fieldset_1 = require("primeng/fieldset");
var fileupload_1 = require("primeng/fileupload");
var galleria_1 = require("primeng/galleria");
var image_1 = require("primeng/image");
var inplace_1 = require("primeng/inplace");
var inputnumber_1 = require("primeng/inputnumber");
var inputmask_1 = require("primeng/inputmask");
var inputswitch_1 = require("primeng/inputswitch");
var inputtext_1 = require("primeng/inputtext");
var inputtextarea_1 = require("primeng/inputtextarea");
var knob_1 = require("primeng/knob");
var lightbox_1 = require("primeng/lightbox");
var listbox_1 = require("primeng/listbox");
var megamenu_1 = require("primeng/megamenu");
var menu_1 = require("primeng/menu");
var menubar_1 = require("primeng/menubar");
var messages_1 = require("primeng/messages");
var message_1 = require("primeng/message");
var multiselect_1 = require("primeng/multiselect");
var orderlist_1 = require("primeng/orderlist");
var organizationchart_1 = require("primeng/organizationchart");
var overlaypanel_1 = require("primeng/overlaypanel");
var paginator_1 = require("primeng/paginator");
var panel_1 = require("primeng/panel");
var panelmenu_1 = require("primeng/panelmenu");
var password_1 = require("primeng/password");
var picklist_1 = require("primeng/picklist");
var progressbar_1 = require("primeng/progressbar");
var radiobutton_1 = require("primeng/radiobutton");
var rating_1 = require("primeng/rating");
var ripple_1 = require("primeng/ripple");
var scrollpanel_1 = require("primeng/scrollpanel");
var scrolltop_1 = require("primeng/scrolltop");
var selectbutton_1 = require("primeng/selectbutton");
var sidebar_1 = require("primeng/sidebar");
var skeleton_1 = require("primeng/skeleton");
var slidemenu_1 = require("primeng/slidemenu");
var slider_1 = require("primeng/slider");
var splitbutton_1 = require("primeng/splitbutton");
var splitter_1 = require("primeng/splitter");
var steps_1 = require("primeng/steps");
var tabmenu_1 = require("primeng/tabmenu");
var table_1 = require("primeng/table");
var tabview_1 = require("primeng/tabview");
var tag_1 = require("primeng/tag");
var terminal_1 = require("primeng/terminal");
var tieredmenu_1 = require("primeng/tieredmenu");
var timeline_1 = require("primeng/timeline");
var toast_1 = require("primeng/toast");
var togglebutton_1 = require("primeng/togglebutton");
var toolbar_1 = require("primeng/toolbar");
var tooltip_1 = require("primeng/tooltip");
var tree_1 = require("primeng/tree");
var treeselect_1 = require("primeng/treeselect");
var treetable_1 = require("primeng/treetable");
var virtualscroller_1 = require("primeng/virtualscroller");
var blockviewer_component_1 = require("./components/blockviewer/blockviewer.component");
var app_code_component_1 = require("./components/app-code/app.code.component");
var app_component_1 = require("./app.component");
var app_main_component_1 = require("./app.main.component");
var app_topbar_component_1 = require("./app.topbar.component");
var app_footer_component_1 = require("./app.footer.component");
var app_config_component_1 = require("./app.config.component");
var app_menu_component_1 = require("./app.menu.component");
var app_menuitem_component_1 = require("./app.menuitem.component");
var app_menu_service_1 = require("./service/app.menu.service");
var app_config_service_1 = require("./service/app.config.service");
var diabetes_component_1 = require("./diabetes/diabetes.component");
var diabetesservice_1 = require("./diabetes/diabetesservice");
var requestinterceptor_1 = require("./utils/requestinterceptor");
var kidney_component_1 = require("./kidney/kidney.component");
var kidneyservice_1 = require("./kidney/kidneyservice");
var maternal_component_1 = require("./maternal/maternal.component");
var maternalservice_1 = require("./maternal/maternalservice");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                accordion_1.AccordionModule,
                autocomplete_1.AutoCompleteModule,
                avatar_1.AvatarModule,
                avatargroup_1.AvatarGroupModule,
                badge_1.BadgeModule,
                breadcrumb_1.BreadcrumbModule,
                button_1.ButtonModule,
                calendar_1.CalendarModule,
                card_1.CardModule,
                carousel_1.CarouselModule,
                cascadeselect_1.CascadeSelectModule,
                chart_1.ChartModule,
                checkbox_1.CheckboxModule,
                chips_1.ChipsModule,
                chip_1.ChipModule,
                codehighlighter_1.CodeHighlighterModule,
                confirmdialog_1.ConfirmDialogModule,
                confirmpopup_1.ConfirmPopupModule,
                colorpicker_1.ColorPickerModule,
                contextmenu_1.ContextMenuModule,
                dataview_1.DataViewModule,
                dialog_1.DialogModule,
                divider_1.DividerModule,
                dropdown_1.DropdownModule,
                fieldset_1.FieldsetModule,
                fileupload_1.FileUploadModule,
                galleria_1.GalleriaModule,
                image_1.ImageModule,
                inplace_1.InplaceModule,
                inputnumber_1.InputNumberModule,
                inputmask_1.InputMaskModule,
                inputswitch_1.InputSwitchModule,
                inputtext_1.InputTextModule,
                inputtextarea_1.InputTextareaModule,
                knob_1.KnobModule,
                lightbox_1.LightboxModule,
                listbox_1.ListboxModule,
                megamenu_1.MegaMenuModule,
                menu_1.MenuModule,
                menubar_1.MenubarModule,
                message_1.MessageModule,
                messages_1.MessagesModule,
                multiselect_1.MultiSelectModule,
                orderlist_1.OrderListModule,
                organizationchart_1.OrganizationChartModule,
                overlaypanel_1.OverlayPanelModule,
                paginator_1.PaginatorModule,
                panel_1.PanelModule,
                panelmenu_1.PanelMenuModule,
                password_1.PasswordModule,
                picklist_1.PickListModule,
                progressbar_1.ProgressBarModule,
                radiobutton_1.RadioButtonModule,
                rating_1.RatingModule,
                ripple_1.RippleModule,
                scrollpanel_1.ScrollPanelModule,
                scrolltop_1.ScrollTopModule,
                selectbutton_1.SelectButtonModule,
                sidebar_1.SidebarModule,
                skeleton_1.SkeletonModule,
                slidemenu_1.SlideMenuModule,
                slider_1.SliderModule,
                splitbutton_1.SplitButtonModule,
                splitter_1.SplitterModule,
                steps_1.StepsModule,
                tag_1.TagModule,
                table_1.TableModule,
                tabmenu_1.TabMenuModule,
                tabview_1.TabViewModule,
                terminal_1.TerminalModule,
                tieredmenu_1.TieredMenuModule,
                timeline_1.TimelineModule,
                toast_1.ToastModule,
                togglebutton_1.ToggleButtonModule,
                toolbar_1.ToolbarModule,
                tooltip_1.TooltipModule,
                tree_1.TreeModule,
                treeselect_1.TreeSelectModule,
                treetable_1.TreeTableModule,
                virtualscroller_1.VirtualScrollerModule,
                app_code_component_1.AppCodeModule,
                styleclass_1.StyleClassModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                app_main_component_1.AppMainComponent,
                app_topbar_component_1.AppTopBarComponent,
                app_footer_component_1.AppFooterComponent,
                app_config_component_1.AppConfigComponent,
                app_menu_component_1.AppMenuComponent,
                app_menuitem_component_1.AppMenuitemComponent,
                blockviewer_component_1.BlockViewer,
                diabetes_component_1.DiabetesComponent,
                kidney_component_1.KidneyComponent,
                maternal_component_1.MaternalComponent,
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: requestinterceptor_1.RequestInterceptor, multi: true },
                app_menu_service_1.MenuService, app_config_service_1.ConfigService, diabetesservice_1.DiabetesService, kidneyservice_1.KidneyService, maternalservice_1.MaternalService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
