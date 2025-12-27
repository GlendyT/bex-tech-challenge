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
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Ventas</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$1.2M</div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/dashboard/finanzas">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Unidades</CardTitle>
                                <Home className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">15</div>
                            </CardContent>
                        </Card>
                    </Link>
                    <Link to="/dashboard/finanzas">
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Vistas</CardTitle>
                                <Eye className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">450</div>
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
