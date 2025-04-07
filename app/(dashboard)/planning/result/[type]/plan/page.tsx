import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit } from "lucide-react"

export default function CareerPlanningPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回上一步
        </Button>
      </div>

      <div className="bg-primary-500 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">欢迎回来，李华同学!</h2>
          <p className="text-white/80">以梦为马，不负韶华</p>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="relative py-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-300"></div>

        <div className="grid grid-cols-1 gap-8">
          {/* Timeline Points */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white z-10">
                <span className="text-xs font-bold">1</span>
              </div>
            </div>
            <div className="ml-[calc(50%+20px)] pl-4">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg inline-block font-medium">大一</div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white z-10">
                <span className="text-xs font-bold">2</span>
              </div>
            </div>
            <div className="mr-[calc(50%+20px)] pr-4 text-right">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg inline-block font-medium">大二</div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white z-10">
                <span className="text-xs font-bold">3</span>
              </div>
            </div>
            <div className="ml-[calc(50%+20px)] pl-4">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg inline-block font-medium">大三</div>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white z-10">
                <span className="text-xs font-bold">4</span>
              </div>
            </div>
            <div className="mr-[calc(50%+20px)] pr-4 text-right">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg inline-block font-medium">大四</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Editor */}
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex justify-end mb-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            编辑内容
          </Button>
        </div>

        <div className="min-h-[300px] border rounded-lg p-4">
          {/* This would be a rich text editor in a real implementation */}
          <p className="text-gray-500">在这里编辑你的职业规划内容...</p>
        </div>

        <div className="flex justify-end mt-8">
          <Button className="bg-primary-500 hover:bg-primary-600">保存</Button>
        </div>
      </div>
    </div>
  )
}

