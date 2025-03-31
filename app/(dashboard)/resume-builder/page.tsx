import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ResumeBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          返回上一步
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary-100 rounded-xl p-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="item1" className="data-[state=checked]:bg-primary-500" />
              <label
                htmlFor="item1"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1. 目标院校(target_school)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item2" />
              <label
                htmlFor="item2"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                2. 学业排名(rank)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item3" />
              <label
                htmlFor="item3"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                3. 专业(major)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item4" />
              <label
                htmlFor="item4"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                4. 年级(grade)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item5" />
              <label
                htmlFor="item5"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                5. 英语水平(English)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item6" />
              <label
                htmlFor="item6"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                6. 本科院校(school)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item7" />
              <label
                htmlFor="item7"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                7. 科研经历(academic)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item8" />
              <label
                htmlFor="item8"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                8. 竞赛经历(competition)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item9" />
              <label
                htmlFor="item9"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                9. 个人兴趣(interest)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item10" />
              <label
                htmlFor="item10"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                10. 未来发展区域(furture)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item11" />
              <label
                htmlFor="item11"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                11. 个人技能(skills)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item12" />
              <label
                htmlFor="item12"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                12. 荣誉称号与奖学金(awards)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="item13" />
              <label
                htmlFor="item13"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                13. 其它补充
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-white text-primary-500 hover:bg-gray-100">自动优化选中内容</Button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-2">姓名</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">联系方式</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">教育经历</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">实习经历</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">项目经历</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">个人技能</h3>
              <div className="h-10 border-b border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-primary-500 hover:bg-primary-600 px-8">
          下一步 <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

