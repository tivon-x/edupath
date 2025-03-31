import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, GraduationCap, FileText } from "lucide-react"

export default function AcademicPlanningPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回上一步
        </Button>
      </div>

      <div className="bg-primary-500 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Step.1</h1>
        <h2 className="text-2xl font-bold mb-4">请选择你的学业/职业规划之路</h2>
        <p className="text-white/80">有时，选择比努力更重要</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="bg-primary-100 w-full h-32 rounded-lg flex items-center justify-center mb-8">
              <GraduationCap className="h-16 w-16 text-primary-500" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">升学</h3>
            <p className="text-center text-gray-500 mb-8">保研、考研</p>

            <Button className="w-full">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="bg-blue-100 w-full h-32 rounded-lg flex items-center justify-center mb-8">
              <FileText className="h-16 w-16 text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">就业</h3>
            <p className="text-center text-gray-500 mb-8">工作</p>

            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-gray-500 mt-8">这次选择之后还有机会进行再次选择滴~</p>
    </div>
  )
}

