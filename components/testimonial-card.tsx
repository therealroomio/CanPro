import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  image: string
}

export function TestimonialCard({ name, role, company, content, image }: TestimonialProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-6">
        <div className="space-y-4">
          <p className="text-gray-600">{content}</p>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-sm text-gray-500">{role}, {company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

