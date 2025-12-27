import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"

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
    {
        name: "Plaza Central",
        location: "San Benito",
        status: "Renta",
        price: "$5,000/mo",
    },
    {
        name: "Altos del Mar",
        location: "La Libertad",
        status: "Venta",
        price: "$450,000",
    },
]

export default function DashboardProjects() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Proyectos Inmobiliarios</h3>
                <p className="text-sm text-muted-foreground">
                    Gestión de proyectos activos.
                </p>
            </div>
            <div className="rounded-md border">
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
                            <TableRow key={project.name}>
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
        </div>
    )
}
