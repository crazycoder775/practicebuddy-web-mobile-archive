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
        _super.call(this);
        this.navigator.language = 'fr-US';
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmFtZXdvcmtzL2NvcmUvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQUFBO1FBQ1MsY0FBUyxHQUFRO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFDSyxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBTzVCLENBQUM7SUFOUSwwQkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ00sNEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxrQkFBVSxhQVl0QixDQUFBO0FBRUQ7SUFBc0Msb0NBQVU7SUFDOUM7UUFDRSxpQkFBTyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFDSCx1QkFBQztBQUFELENBTEEsQUFLQyxDQUxxQyxVQUFVLEdBSy9DO0FBTFksd0JBQWdCLG1CQUs1QixDQUFBIiwiZmlsZSI6ImFwcC9mcmFtZXdvcmtzL2NvcmUvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXaW5kb3dNb2NrIHtcbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge1xuICAgIGxhbmd1YWdlOiAnZW4tVVMnLFxuICAgIHVzZXJBZ2VudDogJ3Rlc3RpbmcnXG4gIH07XG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gIHB1YmxpYyBhbGVydChtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgY29uZmlybShtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luZG93TW9ja0ZyZW5jaCBleHRlbmRzIFdpbmRvd01vY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmF2aWdhdG9yLmxhbmd1YWdlID0gJ2ZyLVVTJztcbiAgfVxufVxuIl19
