import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function BasicInfoPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回上一步
        </Button>
      </div>

      <div className="bg-primary-500 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Step.2 请填写你的基本信息</h1>
        <p className="text-white/80">了解你，才能帮助你</p>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <ol className="list-decimal pl-6 space-y-4">
          <li className="text-lg">目标院校(target_school)</li>
          <li className="text-lg">学业排名(rank)</li>
          <li className="text-lg">专业(major)</li>
          <li className="text-lg">年级(grade)</li>
          <li className="text-lg">英语水平(English)</li>
          <li className="text-lg">本科院校(school)</li>
          <li className="text-lg">科研经历(academic)</li>
          <li className="text-lg">竞赛经历(competition)</li>
          <li className="text-lg">个人兴趣(interest)</li>
          <li className="text-lg">未来发展区域(furture)</li>
          <li className="text-lg">个人技能(skills)</li>
          <li className="text-lg">荣誉称号与奖学金(awards)</li>
          <li className="text-lg">其它补充</li>
        </ol>

        <div className="flex justify-end mt-8">
          <Button className="bg-primary-500 hover:bg-primary-600">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

