import PlanShower from "@/components/plan-shower"
import ReturnButton from "@/components/return-button"

export default async function CareerPlanningPage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const plans: {
    period: string
    description: string
  }[] = [
    {
      period: "大一",
      description: "了解自己的兴趣和职业倾向，参加职业规划讲座。",
    },
    {
      period: "大二",
      description: "参与实习和社会实践，积累工作经验。",
    },
    {
      period: "大三",
      description: "开始准备考研或找工作，提升自己的专业技能。",
    },
    {
      period: "大四",
      description: "完成毕业设计，积极投递简历，参加面试。",
    },
  ]

  return (
    <div className='space-y-6'>
      <ReturnButton href={`/planning/result/${type}`} />

      <PlanShower plans={plans} />
    </div>
  )
}
