"use strict";
var auth_guard_service_1 = require("../../services/auth-guard.service");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU1BLHdFQUE4RDtBQUVqRCxRQUFBLGFBQWEsR0FBRztJQUMzQiw4QkFBUztDQUNWLENBQUM7QUFFVyxRQUFBLE1BQU0sR0FBRztJQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ3JELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltcG9ydCB7TG9naW5Sb3V0ZXN9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9naW4vbG9naW4ucm91dGVzJztcbmltcG9ydCB7SG9tZVJvdXRlc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lL2hvbWUucm91dGVzJztcbmV4cG9ydCBjb25zdCByb3V0ZXM6IEFycmF5PGFueT4gPSBbXG4gIC4uLkxvZ2luUm91dGVzLFxuICAuLi5Ib21lUm91dGVzXG5dKi9cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhQcm92aWRlcnMgPSBbXG4gIEF1dGhHdWFyZFxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfVxuXTtcblxuXG4iXX0=