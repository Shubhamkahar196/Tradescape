import { Card, CardContent } from "@/components/ui/card"
// import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  iconClassName?: string
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
  description,
  iconClassName = "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
}: StatsCardProps) => {
  return (
    <Card className="w-full border shadow-sm transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Text Content */}
          <div className="min-w-0 flex-1 space-y-1">
            <p className="truncate text-xs font-medium text-muted-foreground sm:text-sm">
              {title}
            </p>
            <h2 className="truncate text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
              {value}
            </h2>
            {description && (
              <p className="truncate text-[11px] text-muted-foreground sm:text-xs">
                {description}
              </p>
            )}
          </div>

          {/* Icon Badge */}
          <div className={`shrink-0 rounded-full p-2.5 sm:p-3 ${iconClassName}`}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

        </div>
      </CardContent>
    </Card>
  )
}

export default StatsCard