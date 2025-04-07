"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

type Props = {
  data: { [key: string]: string | number }[]
  axisDataKey: string
  radarDataKey: string
}

export default function CustomeRadarChart({ data, axisDataKey, radarDataKey }: Props) {
  return (
    <Card className='outline-none border-none shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]'>
      <CardContent className='pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px] w-full'>
          <RadarChart data={data}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey={axisDataKey} />
            <PolarGrid />
            <Radar dataKey={radarDataKey} fill='var(--color-desktop)' fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
