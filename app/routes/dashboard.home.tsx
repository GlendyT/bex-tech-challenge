import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { DollarSign, Home, Eye } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"
import { Link } from "react-router"
import { Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"

const projects = [
    {
        name: "Torre Futura",
        location: "San Salvador",
        status: "Venta",
        price: "$1,200,000",
    },
    {
        name: "Residencial Los Sueños",
        location: "Santa Tecla",
        status: "Renta",
        price: "$2,500/mo",
    },
    {
        name: "Edificio Vista Hermosa",
        location: "Antiguo Cuscatlán",
        status: "Venta",
        price: "$850,000",
    },
]

const dataSales = [
    { month: "Jan", value: 1000 },
    { month: "Feb", value: 1500 },
    { month: "Mar", value: 1200 },
    { month: "Apr", value: 1800 },
    { month: "May", value: 2200 },
    { month: "Jun", value: 2000 },
]

const dataUnits = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 8 },
    { month: "Mar", value: 6 },
    { month: "Apr", value: 10 },
    { month: "May", value: 12 },
    { month: "Jun", value: 15 },
]

const dataViews = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 220 },
    { month: "Mar", value: 300 },
    { month: "Apr", value: 350 },
    { month: "May", value: 400 },
    { month: "Jun", value: 450 },
]

const chartConfig = {
    sales: {
        label: "Ventas",
        color: "var(--color-chart-1)",
    },
    units: {
        label: "Unidades",
        color: "var(--color-chart-2)",
    },
    views: {
        label: "Vistas",
        color: "var(--color-chart-3)",
    },
}

export default function DashboardHome() {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
            <div>
                <h2 className="text-xl font-semibold tracking-tight">Bienvenido de nuevo</h2>
                <p className="text-muted-foreground text-sm">Aquí tienes un resumen de la actividad reciente.</p>
            </div>

            {/* Finance Summary */}
            <div className="grid gap-4">
                <Link to="/dashboard/finanzas" className="hover:underline underline-offset-4 decoration-primary w-fit">
                    <h3 className="text-lg font-medium">Resumen de Finanzas</h3>
                </Link>
                <div className="grid gap-4 md:grid-cols-3">
                    <Link to="/dashboard/finanzas">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Ventas</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$1.2M</div>
                                <div className="h-[40px] mt-2">
                                    <ChartContainer config={chartConfig} className="h-full w-full">
                                        <AreaChart data={dataSales}>
                                            <Area
                                                dataKey="value"
                                                type="natural"
                                                fill="var(--color-chart-1)"
                                                fillOpacity={0.2}
                                                stroke="var(--color-chart-1)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ChartContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/dashboard/finanzas">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Unidades</CardTitle>
                                <Home className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">15</div>
                                <div className="h-[40px] mt-2">
                                    <ChartContainer config={chartConfig} className="h-full w-full">
                                        <AreaChart data={dataUnits}>
                                            <Area
                                                dataKey="value"
                                                type="step"
                                                fill="var(--color-chart-2)"
                                                fillOpacity={0.2}
                                                stroke="var(--color-chart-2)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ChartContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/dashboard/finanzas">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Vistas</CardTitle>
                                <Eye className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">450</div>
                                <div className="h-[40px] mt-2">
                                    <ChartContainer config={chartConfig} className="h-full w-full">
                                        <AreaChart data={dataViews}>
                                            <Area
                                                dataKey="value"
                                                type="monotone"
                                                fill="var(--color-chart-3)"
                                                fillOpacity={0.2}
                                                stroke="var(--color-chart-3)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ChartContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>

            {/* Projects Preview */}
            <div className="grid gap-4">
                <Link to="/dashboard/proyectos" className="hover:underline underline-offset-4 decoration-primary w-fit">
                    <h3 className="text-lg font-medium">Resumen de Proyectos</h3>
                </Link>
                <Link to="/dashboard/proyectos">
                    <div className="rounded-md border hover:border-sidebar-primary/50 transition-colors cursor-pointer">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-black hover:bg-black/90">
                                    <TableHead className="text-white">Nombre</TableHead>
                                    <TableHead className="text-white">Ubicación</TableHead>
                                    <TableHead className="text-white">Estado</TableHead>
                                    <TableHead className="text-white text-right">Precio</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow key={project.name} className="hover:bg-muted/50">
                                        <TableCell className="font-medium">{project.name}</TableCell>
                                        <TableCell>{project.location}</TableCell>
                                        <TableCell>
                                            <Badge variant={project.status === "Venta" ? "default" : "secondary"}>
                                                {project.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{project.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Link>
            </div>
        </div>
    )
}
