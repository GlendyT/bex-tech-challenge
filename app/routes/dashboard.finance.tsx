import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { DollarSign, Home, Eye } from "lucide-react"
import { Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"

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

export default function DashboardFinance() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Finanzas</h3>
                <p className="text-sm text-muted-foreground">
                    Resumen financiero y métricas clave.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {/* Total Sales Card */}
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total de Ventas
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1.2M</div>
                        <p className="text-xs text-muted-foreground mb-4">
                            +20.1% desde el mes pasado
                        </p>
                        <div className="h-[80px]">
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <AreaChart data={dataSales}>
                                    <defs>
                                        <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        dataKey="value"
                                        type="natural"
                                        fill="url(#fillSales)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-chart-1)"
                                        strokeWidth={2}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                </AreaChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Units Sold Card */}
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Unidades Vendidas
                        </CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">15</div>
                        <p className="text-xs text-muted-foreground mb-4">
                            +4 nuevas esta semana
                        </p>
                        <div className="h-[80px]">
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <AreaChart data={dataUnits}>
                                    <defs>
                                        <linearGradient id="fillUnits" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        dataKey="value"
                                        type="step"
                                        fill="url(#fillUnits)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-chart-2)"
                                        strokeWidth={2}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                </AreaChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Web Views Card */}
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Vistas Web
                        </CardTitle>
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-muted-foreground mb-4">
                            +12% incremento en tráfico
                        </p>
                        <div className="h-[80px]">
                            <ChartContainer config={chartConfig} className="h-full w-full">
                                <AreaChart data={dataViews}>
                                    <defs>
                                        <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--color-chart-3)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--color-chart-3)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        dataKey="value"
                                        type="monotone"
                                        fill="url(#fillViews)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-chart-3)"
                                        strokeWidth={2}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                </AreaChart>
                            </ChartContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
