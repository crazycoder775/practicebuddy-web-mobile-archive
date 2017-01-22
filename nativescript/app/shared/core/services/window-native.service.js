"use strict";
var dialogs = require("ui/dialogs");
var WindowNative = (function () {
    function WindowNative() {
    }
    Object.defineProperty(WindowNative.prototype, "navigator", {
        get: function () {
            return {
                language: 'en-US',
                userAgent: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowNative.prototype, "location", {
        get: function () {
            return {
                host: 'nativescript'
            };
        },
        enumerable: true,
        configurable: true
    });
    WindowNative.prototype.alert = function (msg) {
        return dialogs.alert(msg);
    };
    WindowNative.prototype.confirm = function (msg) {
        return dialogs.confirm(msg);
    };
    return WindowNative;
}());
exports.WindowNative = WindowNative;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LW5hdGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2luZG93LW5hdGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBc0M7QUFLdEM7SUFBQTtJQWtCQSxDQUFDO0lBakJDLHNCQUFXLG1DQUFTO2FBQXBCO1lBQ0UsTUFBTSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsY0FBYzthQUMxQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyxrQ0FBUTthQUFuQjtZQUNFLE1BQU0sQ0FBQztnQkFDTCxJQUFJLEVBQUUsY0FBYzthQUNyQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFDTSw0QkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ00sOEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcblxuLy8gYXBwXG5pbXBvcnQgeyBJV2luZG93IH0gZnJvbSAnLi4vLi4vLi4vYXBwL2ZyYW1ld29ya3MvY29yZS9pbnRlcmZhY2VzL2l3aW5kb3cnO1xuXG5leHBvcnQgY2xhc3MgV2luZG93TmF0aXZlIGltcGxlbWVudHMgSVdpbmRvdyB7XG4gIHB1YmxpYyBnZXQgbmF2aWdhdG9yKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhbmd1YWdlOiAnZW4tVVMnLFxuICAgICAgdXNlckFnZW50OiAnbmF0aXZlc2NyaXB0J1xuICAgIH07XG4gIH1cbiAgcHVibGljIGdldCBsb2NhdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBob3N0OiAnbmF0aXZlc2NyaXB0J1xuICAgIH07XG4gIH1cbiAgcHVibGljIGFsZXJ0KG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5hbGVydChtc2cpO1xuICB9XG4gIHB1YmxpYyBjb25maXJtKG1zZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZGlhbG9ncy5jb25maXJtKG1zZyk7XG4gIH1cbn1cbiJdfQ==