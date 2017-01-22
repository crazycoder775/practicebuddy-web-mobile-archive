"use strict";
var multilingual_state_1 = require("../states/multilingual.state");
var multilingual_action_1 = require("../actions/multilingual.action");
function reducer(state, action) {
    if (state === void 0) { state = multilingual_state_1.initialState; }
    switch (action.type) {
        case multilingual_action_1.ActionTypes.LANG_CHANGED:
            return Object.assign({}, state, {
                lang: action.payload
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5ndWFsLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWxpbmd1YWwucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUVBQWdGO0FBQ2hGLHNFQUFzRTtBQUV0RSxpQkFDSSxLQUF3QyxFQUN4QyxNQUFlO0lBRGYsc0JBQUEsRUFBQSx5Q0FBd0M7SUFHMUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxpQ0FBVyxDQUFDLFlBQVk7WUFDM0IsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3JCLENBQUMsQ0FBQztRQUVMO1lBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQWJELDBCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kdWxlXG5pbXBvcnQgeyBJTXVsdGlsaW5ndWFsU3RhdGUsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9tdWx0aWxpbmd1YWwuc3RhdGUnO1xuaW1wb3J0IHsgQWN0aW9ucywgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgICBzdGF0ZTogSU11bHRpbGluZ3VhbFN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjogQWN0aW9uc1xuKTogSU11bHRpbGluZ3VhbFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZXMuTEFOR19DSEFOR0VEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsYW5nOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=