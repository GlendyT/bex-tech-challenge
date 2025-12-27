import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("dashboard", "routes/dashboard.tsx", [
        index("routes/dashboard.home.tsx"), // Default dashboard view
        route("proyectos", "routes/dashboard.projects.tsx"),
        route("finanzas", "routes/dashboard.finance.tsx"),
    ]),
] satisfies RouteConfig;
