function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var fonticon_pipe_1 = require("../pipe/fonticon.pipe");
var fonticon_service_1 = require("./fonticon.service");
// for manual imports
__export(require("../pipe/fonticon.pipe"));
__export(require("./fonticon.service"));
var PIPES = [
    fonticon_pipe_1.TNSFontIconPipe,
    fonticon_pipe_1.TNSFontIconPurePipe
];
function provideService(providedConfig) {
    return [fonticon_service_1.TNSFontIconService,
        { provide: fonticon_service_1.TNS_FONT_ICON_CONFIG, multi: false, useValue: providedConfig }
    ];
}
exports.provideService = provideService;
var TNSFontIconModule = TNSFontIconModule_1 = (function () {
    function TNSFontIconModule() {
    }
    TNSFontIconModule.forRoot = function (providedConfig) {
        return {
            ngModule: TNSFontIconModule_1,
            providers: [provideService(providedConfig)]
        };
    };
    return TNSFontIconModule;
}());
TNSFontIconModule = TNSFontIconModule_1 = __decorate([
    core_1.NgModule({
        declarations: PIPES,
        exports: PIPES
    })
], TNSFontIconModule);
exports.TNSFontIconModule = TNSFontIconModule;
var TNSFontIconModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udGljb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9udGljb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE4RDtBQUM5RCx1REFBNkU7QUFDN0UsdURBQThFO0FBRTlFLHFCQUFxQjtBQUNyQiwyQ0FBc0M7QUFDdEMsd0NBQW1DO0FBRW5DLElBQU0sS0FBSyxHQUFlO0lBQ3RCLCtCQUFlO0lBQ2YsbUNBQW1CO0NBQ3RCLENBQUM7QUFFRix3QkFBK0IsY0FBbUI7SUFDOUMsTUFBTSxDQUFDLENBQUMscUNBQWtCO1FBQ3RCLEVBQUUsT0FBTyxFQUFFLHVDQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTtLQUM1RSxDQUFDO0FBQ04sQ0FBQztBQUpELHdDQUlDO0FBTUQsSUFBYSxpQkFBaUI7SUFBOUI7SUFPQSxDQUFDO0lBTlUseUJBQU8sR0FBZCxVQUFlLGNBQW1CO1FBQzlCLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxtQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzlDLENBQUM7SUFDTixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGlCQUFpQjtJQUo3QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDO0dBQ1csaUJBQWlCLENBTzdCO0FBUFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFROU0ZvbnRJY29uUGlwZSwgVE5TRm9udEljb25QdXJlUGlwZSB9IGZyb20gJy4uL3BpcGUvZm9udGljb24ucGlwZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UsIFROU19GT05UX0lDT05fQ09ORklHIH0gZnJvbSAnLi9mb250aWNvbi5zZXJ2aWNlJztcblxuLy8gZm9yIG1hbnVhbCBpbXBvcnRzXG5leHBvcnQgKiBmcm9tICcuLi9waXBlL2ZvbnRpY29uLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb250aWNvbi5zZXJ2aWNlJztcblxuY29uc3QgUElQRVM6IEFycmF5PGFueT4gPSBbXG4gICAgVE5TRm9udEljb25QaXBlLFxuICAgIFROU0ZvbnRJY29uUHVyZVBpcGVcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlU2VydmljZShwcm92aWRlZENvbmZpZzogYW55KTogYW55IHtcbiAgICByZXR1cm4gW1ROU0ZvbnRJY29uU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBUTlNfRk9OVF9JQ09OX0NPTkZJRywgbXVsdGk6IGZhbHNlLCB1c2VWYWx1ZTogcHJvdmlkZWRDb25maWcgfVxuICAgIF07XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBQSVBFUyxcbiAgICBleHBvcnRzOiBQSVBFU1xufSlcbmV4cG9ydCBjbGFzcyBUTlNGb250SWNvbk1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QocHJvdmlkZWRDb25maWc6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFROU0ZvbnRJY29uTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZVNlcnZpY2UocHJvdmlkZWRDb25maWcpXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==