"use strict";
var index_1 = require("../states/index");
var actions = require("../actions/name-list.action");
function reducer(state, action) {
    if (state === void 0) { state = index_1.initialState; }
    switch (action.type) {
        case actions.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case actions.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1saXN0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYW1lLWxpc3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUNBQTZEO0FBQzdELHFEQUF1RDtBQUV2RCxpQkFDSSxLQUFrQyxFQUNsQyxNQUF1QjtJQUR2QixzQkFBQSxFQUFBLDRCQUFrQztJQUdwQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVztZQUNsQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDdEIsQ0FBQyxDQUFDO1FBRUwsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDakMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFNLEtBQUssQ0FBQyxLQUFLLFNBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQzthQUN4QyxDQUFDLENBQUM7UUFFTDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFsQkQsMEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNhbXBsZVN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgICBzdGF0ZTogSVNhbXBsZVN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9ucy5BY3Rpb25zXG4pOiBJU2FtcGxlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLkFjdGlvblR5cGVzLklOSVRJQUxJWkVEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuYW1lczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBhY3Rpb25zLkFjdGlvblR5cGVzLk5BTUVfQURERUQ6XG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWVzOiBbLi4uc3RhdGUubmFtZXMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=