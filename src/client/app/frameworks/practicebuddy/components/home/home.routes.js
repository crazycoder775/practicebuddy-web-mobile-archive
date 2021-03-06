"use strict";
var home_component_1 = require("./home.component");
var auth_guard_service_1 = require("../../services/auth-guard.service");
exports.HomeRoutes = [
    { path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbURBQWlEO0FBQ2pELHdFQUE4RDtBQUVqRCxRQUFBLFVBQVUsR0FBVztJQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFdBQVcsRUFBRSxDQUFDLDhCQUFTLENBQUM7S0FDekI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgSG9tZVJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9ICBcbl07XG4iXX0=