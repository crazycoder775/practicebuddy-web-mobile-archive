"use strict";
var core_1 = require('@angular/core');
var index_1 = require('../index');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvZGVjb3JhdG9ycy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBR25FLHNCQUEyQixVQUFVLENBQUMsQ0FBQTtBQUd0QyxJQUFNLFFBQVEsR0FBUSxPQUFPLENBQUM7QUFFOUI7SUFBQTtJQXFEQSxDQUFDO0lBcERlLDBCQUFXLEdBQXpCLFVBQTBCLFFBQWtCLEVBQUUsdUJBQTZCO1FBQWpELHdCQUFrQixHQUFsQixhQUFrQjtRQU0xQyxJQUFJLFVBQVUsR0FBZSxFQUFFLENBQUM7UUFHaEMsRUFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxJQUFJLE9BQWYsVUFBVSxFQUFTLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDSCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFekIsUUFBUSxDQUFDLFdBQVcsR0FBRyxrQkFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRXZCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsa0JBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRCxRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBRWhHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFTixRQUFRLENBQUMsZUFBZSxHQUFHLDhCQUF1QixDQUFDLE1BQU0sQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDM0IsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ2xELENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVhLGdDQUFpQixHQUEvQixVQUFnQyxHQUFRLEVBQUUsUUFBa0IsRUFBRSx1QkFBNkI7UUFBakQsd0JBQWtCLEdBQWxCLGFBQWtCO1FBQzFELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxxQkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksc0JBQWMsaUJBcUQxQixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL2NvcmUvZGVjb3JhdG9ycy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBWaWV3QnJva2VyIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5jb25zdCBfcmVmbGVjdDogYW55ID0gUmVmbGVjdDtcblxuZXhwb3J0IGNsYXNzIERlY29yYXRvclV0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBnZXRNZXRhZGF0YShtZXRhZGF0YTogYW55ID0ge30sIGN1c3RvbURlY29yYXRvck1ldGFkYXRhPzogYW55KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGZvbGxvd2luZyBhbGxvd3MgZGVmYXVsdCBjb21wb25lbnQgbWV0YWRhdGEgdG8gYmUgY29uZmlndXJlZFxuICAgICAqIEZvciBpbnN0YW5jZSwgaGVyZSB3ZSBtYWtlIGBUcmFuc2xhdGVQaXBlYCBhdmFpbGFibGUgZm9yIGFsbCBvdXIgY29tcG9uZW50c1xuICAgICAqL1xuICAgIC8vIGRlZmF1bHQgZGlyZWN0aXZlc1xuICAgIGxldCBESVJFQ1RJVkVTOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICAvLyBjdXN0b20gZGVjb3JhdG9yIG9wdGlvbnNcbiAgICBpZiAoY3VzdG9tRGVjb3JhdG9yTWV0YWRhdGEpIHtcbiAgICAgIGlmIChjdXN0b21EZWNvcmF0b3JNZXRhZGF0YS5kaXJlY3RpdmVzKSB7XG4gICAgICAgIERJUkVDVElWRVMucHVzaCguLi5jdXN0b21EZWNvcmF0b3JNZXRhZGF0YS5kaXJlY3RpdmVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YWRhdGEudGVtcGxhdGVVcmwpIHtcbiAgICAgIC8vIGNvcnJlY3QgdmlldyBmb3IgcGxhdGZvcm0gdGFyZ2V0XG4gICAgICBtZXRhZGF0YS50ZW1wbGF0ZVVybCA9IFZpZXdCcm9rZXIuVEVNUExBVEVfVVJMKG1ldGFkYXRhLnRlbXBsYXRlVXJsKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YWRhdGEuc3R5bGVVcmxzKSB7XG4gICAgICAvLyBjb3JyZWN0IHN0eWxlIGZvciBwbGF0Zm9ybSB0YXJnZXRcbiAgICAgIG1ldGFkYXRhLnN0eWxlVXJscyA9IFZpZXdCcm9rZXIuU1RZTEVfVVJMUyhtZXRhZGF0YS5zdHlsZVVybHMpO1xuICAgIH1cblxuICAgIG1ldGFkYXRhLmRpcmVjdGl2ZXMgPSBtZXRhZGF0YS5kaXJlY3RpdmVzID8gbWV0YWRhdGEuZGlyZWN0aXZlcy5jb25jYXQoRElSRUNUSVZFUykgOiBESVJFQ1RJVkVTO1xuXG4gICAgaWYgKG1ldGFkYXRhLmNoYW5nZURldGVjdGlvbikge1xuICAgICAgbWV0YWRhdGEuY2hhbmdlRGV0ZWN0aW9uID0gbWV0YWRhdGEuY2hhbmdlRGV0ZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IE9uUHVzaFxuICAgICAgbWV0YWRhdGEuY2hhbmdlRGV0ZWN0aW9uID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoO1xuICAgIH1cblxuICAgIGlmIChtZXRhZGF0YS5lbmNhcHN1bGF0aW9uKSB7XG4gICAgICBtZXRhZGF0YS5lbmNhcHN1bGF0aW9uID0gbWV0YWRhdGEuZW5jYXBzdWxhdGlvbjtcbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXplIGFueXRoaW5nXG4gICAgaWYgKG1ldGFkYXRhLmluaXQpIHtcbiAgICAgIG1ldGFkYXRhLmluaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFubm90YXRlQ29tcG9uZW50KGNsczogYW55LCBtZXRhZGF0YTogYW55ID0ge30sIGN1c3RvbURlY29yYXRvck1ldGFkYXRhPzogYW55KSB7XG4gICAgbGV0IGFubm90YXRpb25zID0gX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Fubm90YXRpb25zJywgY2xzKSB8fCBbXTtcbiAgICBhbm5vdGF0aW9ucy5wdXNoKG5ldyBDb21wb25lbnQoRGVjb3JhdG9yVXRpbHMuZ2V0TWV0YWRhdGEobWV0YWRhdGEsIGN1c3RvbURlY29yYXRvck1ldGFkYXRhKSkpO1xuICAgIF9yZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIGFubm90YXRpb25zLCBjbHMpO1xuICAgIHJldHVybiBjbHM7XG4gIH1cbn1cbiJdfQ==