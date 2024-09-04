"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { pricing } from "@/lib/data"
import { CircleCheck } from "lucide-react"
import useActiveSectionView from "@/hooks/useActiveSectionView"


export default function Component() {
    const { ref } = useActiveSectionView("pricing");

    return (
        <div className="scroll-mt-32 bg-[#F9F7F4] py-16 w-full px-[16rem]" id="pricing" ref={ref}>
            <div className="">
                <div className="text-center space-y-5 mb-16">
                    <Badge variant="outline" className='text-sm font-sans font-normal text-muted-foreground rounded-full ' >Plans</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium mb-7">
                        One price. No hidden fees
                    </h2>
                </div>

                <div className="flex gap-8 font-sans justify-center">
                    {pricing.map((plan, index: number) => (
                        <Card key={index} className={`${plan.popular ? 'border-purple-200 ' : 'bg-white'} rounded-2xl border-4 p-4`}>
                            <CardHeader>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mb-1">
                                        <CardTitle className="text-4xl font-[450] mb-1 font-serif">{plan.title}</CardTitle>
                                        {plan.popular && (
                                            <Badge className="bg-indigo-100 text-indigo-800 px-2 text-base font-sans font-medium shadow-none rounded-full">
                                                Popular
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-gray-500 font-light">{plan.subtitle}</p>
                                </div>
                                <p className="text-lg font-light pt-5">{plan.price}</p>
                            </CardHeader>

                            <CardContent className="space-y-12">
                                <Button size="lg"
                                    className={`w-full h-12 ${plan.popular
                                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                        : 'bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600'
                                        }`}
                                >
                                    Enquire
                                </Button>


                                <div className="mt-6">
                                    <p className="font-semibold mb-6">
                                        {index === 0 ? 'Benefits' : `Everything in ${index === 1 ? 'Lite' : 'Autopilot'}, plus`}
                                    </p>
                                    <ul className="space-y-3 text-gray-500 font-light text-base">
                                        {plan.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start">
                                                <CircleCheck className="mr-3 text-indigo-600" />
                                                <span>{benefit}</span>
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