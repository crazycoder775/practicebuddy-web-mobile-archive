"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WindowMock = (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    WindowMock.prototype.alert = function (msg) {
        return;
    };
    WindowMock.prototype.confirm = function (msg) {
        return;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
var WindowMockFrench = (function (_super) {
    __extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93Lm1vY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQUFBO1FBQ1MsY0FBUyxHQUFRO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFDSyxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBTzVCLENBQUM7SUFOUSwwQkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ00sNEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxnQ0FBVTtBQWN2QjtJQUFzQyxvQ0FBVTtJQUM5QztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs7SUFDcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXNDLFVBQVUsR0FLL0M7QUFMWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2luZG93TW9jayB7XG4gIHB1YmxpYyBuYXZpZ2F0b3I6IGFueSA9IHtcbiAgICBsYW5ndWFnZTogJ2VuLVVTJyxcbiAgICB1c2VyQWdlbnQ6ICd0ZXN0aW5nJ1xuICB9O1xuICBwdWJsaWMgbG9jYXRpb246IGFueSA9IHt9O1xuICBwdWJsaWMgYWxlcnQobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGNvbmZpcm0obXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd01vY2tGcmVuY2ggZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9ICdmci1VUyc7XG4gIH1cbn1cbiJdfQ==