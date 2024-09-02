'use client'


import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"
import { useCases } from '@/lib/data'

export default function UseCases() {
    const [activeTab, setActiveTab] = useState("fintechs")

    return (
        <div className="bg-[#F9F7F4] flex flex-col items-center justify-center py-10 px-[20rem]">
            <div className="w-full space-y-16">
                <div className="text-center space-y-8">
                    <Badge variant="outline" className='text-sm font-sans font-normal text-muted-foreground rounded-full ' >Use cases</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium">
                        Treat every jurisdiction like a local one.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-14">
                    <div className="space-y-6">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.id}
                                className={`h-40 pl-4 cursor-pointer transition-all duration-300 ${activeTab === useCase.id
                                    ? "border-l-4 border-blue-600"
                                    : "border-l-4 border-transparent hover:border-gray-300"
                                    }`}
                                onClick={() => setActiveTab(useCase.id)}
                            >
                                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                                <p className={`text-muted-foreground `}>
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 h-fit">

                        {useCases.find(uc => uc.id === activeTab)?.diagram.map((entity, index, arr) => (
                            <div key={entity.name}>
                                <Card>
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold">{entity.name}</span>
                                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm">{entity.country}</span>
                                            {entity.regulated && <Badge variant="secondary">Regulated</Badge>}
                                        </div>
                                    </CardContent>
                                </Card>
                                {index < arr.length - 1 && (
                                    <div className="h-8 border-l-2 border-dashed border-gray-300 ml-6"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}