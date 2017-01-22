"use strict";
var core_1 = require("@angular/core");
var index_1 = require("../index");
var _reflect = Reflect;
var DecoratorUtils = (function () {
    function DecoratorUtils() {
    }
    DecoratorUtils.getMetadata = function (metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var DIRECTIVES = [];
        if (customDecoratorMetadata) {
            if (customDecoratorMetadata.directives) {
                DIRECTIVES.push.apply(DIRECTIVES, customDecoratorMetadata.directives);
            }
        }
        if (metadata.templateUrl) {
            metadata.templateUrl = index_1.ViewBroker.TEMPLATE_URL(metadata.templateUrl);
        }
        if (metadata.styleUrls) {
            metadata.styleUrls = index_1.ViewBroker.STYLE_URLS(metadata.styleUrls);
        }
        metadata.directives = metadata.directives ? metadata.directives.concat(DIRECTIVES) : DIRECTIVES;
        if (metadata.changeDetection) {
            metadata.changeDetection = metadata.changeDetection;
        }
        else {
            metadata.changeDetection = core_1.ChangeDetectionStrategy.OnPush;
        }
        if (metadata.encapsulation) {
            metadata.encapsulation = metadata.encapsulation;
        }
        if (metadata.init) {
            metadata.init();
        }
        return metadata;
    };
    DecoratorUtils.annotateComponent = function (cls, metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new core_1.Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
    return DecoratorUtils;
}());
exports.DecoratorUtils = DecoratorUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQW1FO0FBR25FLGtDQUFzQztBQUd0QyxJQUFNLFFBQVEsR0FBUSxPQUFPLENBQUM7QUFFOUI7SUFBQTtJQXFEQSxDQUFDO0lBcERlLDBCQUFXLEdBQXpCLFVBQTBCLFFBQWtCLEVBQUUsdUJBQTZCO1FBQWpELHlCQUFBLEVBQUEsYUFBa0I7UUFNMUMsSUFBSSxVQUFVLEdBQWUsRUFBRSxDQUFDO1FBR2hDLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsRUFBUyx1QkFBdUIsQ0FBQyxVQUFVLEVBQUU7WUFDekQsQ0FBQztRQUNILENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUV6QixRQUFRLENBQUMsV0FBVyxHQUFHLGtCQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFdkIsUUFBUSxDQUFDLFNBQVMsR0FBRyxrQkFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVELFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUM7UUFFaEcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVOLFFBQVEsQ0FBQyxlQUFlLEdBQUcsOEJBQXVCLENBQUMsTUFBTSxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQixRQUFRLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDbEQsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRWEsZ0NBQWlCLEdBQS9CLFVBQWdDLEdBQVEsRUFBRSxRQUFrQixFQUFFLHVCQUE2QjtRQUFqRCx5QkFBQSxFQUFBLGFBQWtCO1FBQzFELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgVmlld0Jyb2tlciB9IGZyb20gJy4uL2luZGV4JztcblxuZGVjbGFyZSB2YXIgUmVmbGVjdDogYW55O1xuY29uc3QgX3JlZmxlY3Q6IGFueSA9IFJlZmxlY3Q7XG5cbmV4cG9ydCBjbGFzcyBEZWNvcmF0b3JVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWV0YWRhdGEobWV0YWRhdGE6IGFueSA9IHt9LCBjdXN0b21EZWNvcmF0b3JNZXRhZGF0YT86IGFueSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgYWxsb3dzIGRlZmF1bHQgY29tcG9uZW50IG1ldGFkYXRhIHRvIGJlIGNvbmZpZ3VyZWRcbiAgICAgKiBGb3IgaW5zdGFuY2UsIGhlcmUgd2UgbWFrZSBgVHJhbnNsYXRlUGlwZWAgYXZhaWxhYmxlIGZvciBhbGwgb3VyIGNvbXBvbmVudHNcbiAgICAgKi9cbiAgICAvLyBkZWZhdWx0IGRpcmVjdGl2ZXNcbiAgICBsZXQgRElSRUNUSVZFUzogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgLy8gY3VzdG9tIGRlY29yYXRvciBvcHRpb25zXG4gICAgaWYgKGN1c3RvbURlY29yYXRvck1ldGFkYXRhKSB7XG4gICAgICBpZiAoY3VzdG9tRGVjb3JhdG9yTWV0YWRhdGEuZGlyZWN0aXZlcykge1xuICAgICAgICBESVJFQ1RJVkVTLnB1c2goLi4uY3VzdG9tRGVjb3JhdG9yTWV0YWRhdGEuZGlyZWN0aXZlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFkYXRhLnRlbXBsYXRlVXJsKSB7XG4gICAgICAvLyBjb3JyZWN0IHZpZXcgZm9yIHBsYXRmb3JtIHRhcmdldFxuICAgICAgbWV0YWRhdGEudGVtcGxhdGVVcmwgPSBWaWV3QnJva2VyLlRFTVBMQVRFX1VSTChtZXRhZGF0YS50ZW1wbGF0ZVVybCk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGFkYXRhLnN0eWxlVXJscykge1xuICAgICAgLy8gY29ycmVjdCBzdHlsZSBmb3IgcGxhdGZvcm0gdGFyZ2V0XG4gICAgICBtZXRhZGF0YS5zdHlsZVVybHMgPSBWaWV3QnJva2VyLlNUWUxFX1VSTFMobWV0YWRhdGEuc3R5bGVVcmxzKTtcbiAgICB9XG5cbiAgICBtZXRhZGF0YS5kaXJlY3RpdmVzID0gbWV0YWRhdGEuZGlyZWN0aXZlcyA/IG1ldGFkYXRhLmRpcmVjdGl2ZXMuY29uY2F0KERJUkVDVElWRVMpIDogRElSRUNUSVZFUztcblxuICAgIGlmIChtZXRhZGF0YS5jaGFuZ2VEZXRlY3Rpb24pIHtcbiAgICAgIG1ldGFkYXRhLmNoYW5nZURldGVjdGlvbiA9IG1ldGFkYXRhLmNoYW5nZURldGVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdCBPblB1c2hcbiAgICAgIG1ldGFkYXRhLmNoYW5nZURldGVjdGlvbiA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaDtcbiAgICB9XG5cbiAgICBpZiAobWV0YWRhdGEuZW5jYXBzdWxhdGlvbikge1xuICAgICAgbWV0YWRhdGEuZW5jYXBzdWxhdGlvbiA9IG1ldGFkYXRhLmVuY2Fwc3VsYXRpb247XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSBhbnl0aGluZ1xuICAgIGlmIChtZXRhZGF0YS5pbml0KSB7XG4gICAgICBtZXRhZGF0YS5pbml0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhbm5vdGF0ZUNvbXBvbmVudChjbHM6IGFueSwgbWV0YWRhdGE6IGFueSA9IHt9LCBjdXN0b21EZWNvcmF0b3JNZXRhZGF0YT86IGFueSkge1xuICAgIGxldCBhbm5vdGF0aW9ucyA9IF9yZWZsZWN0LmdldE1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIGNscykgfHwgW107XG4gICAgYW5ub3RhdGlvbnMucHVzaChuZXcgQ29tcG9uZW50KERlY29yYXRvclV0aWxzLmdldE1ldGFkYXRhKG1ldGFkYXRhLCBjdXN0b21EZWNvcmF0b3JNZXRhZGF0YSkpKTtcbiAgICBfcmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnYW5ub3RhdGlvbnMnLCBhbm5vdGF0aW9ucywgY2xzKTtcbiAgICByZXR1cm4gY2xzO1xuICB9XG59XG4iXX0=