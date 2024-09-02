import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { pricing } from "@/lib/data"


export default function Component() {
    return (
        <div className="bg-[#F9F7F4] py-16 w-full px-[18rem]">
            <div className="">
                <div className="text-center space-y-5 mb-16">
                    <Badge variant="outline" className='text-sm font-sans font-normal text-muted-foreground rounded-full ' >Features</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium mb-7">
                        One price. No hidden fees
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((plan, index: number) => (
                        <Card key={index} className={`${plan.popular ? 'border-indigo-100 bg-indigo-50' : 'bg-white'} shadow-lg`}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-2xl font-bold mb-1">{plan.title}</CardTitle>
                                        <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                                    </div>
                                    {plan.popular && (
                                        <Badge className="bg-indigo-100 text-indigo-800 px-2 py-1 text-xs font-semibold">
                                            Popular
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-lg font-semibold mt-4">{plan.price}</p>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    className={`w-full ${plan.popular
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                        : 'bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600'
                                        }`}
                                >
                                    Enquire
                                </Button>
                                <div className="mt-6">
                                    <p className="font-semibold mb-4">
                                        {index === 0 ? 'Benefits' : `Everything in ${index === 1 ? 'Lite' : 'Autopilot'}, plus`}
                                    </p>
                                    <ul className="space-y-3">
                                        {plan.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}