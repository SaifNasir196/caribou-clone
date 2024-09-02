import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Check, FileText } from "lucide-react"
import Image from "next/image"

export default function Hero() {
    return (
        <div className=" w-full bg-[#F9F7F4] flex flex-col lg:flex-row items-center justify-center py-20 px-[18rem]">

            <div className="max-w-2xl lg:w-[55%] space-y-8 lg:pr-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-16 border-orange-500 ">
                    <span>Backed by Y Combinator</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-[3.05rem] font-bold md:leading-relaxed lg:leading-snug">
                    Intragroup agreements, covered from day one
                </h1>
                <p className="text-xl text-muted-foreground font-sans w-3/4">
                    A new way for multi-entity companies to request intragroup agreements, transfer pricing policies, and benchmarking.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
                    <Input type="email" placeholder="Enter your email" className="max-w-sm rounded-2xl rounded-tr-none rounded-br-none" />
                    <Button className="px-8 rounded-2xl rounded-tl-none rounded-bl-none">Enquire</Button>
                </div>
                <p className="text-[0.8rem] text-muted-foreground">Don't worry, an enquiry is commitment-free!</p>
            </div>

            <div className="lg:w-[45%] mt-8 lg:mt-0 space-y-4">
                <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <Image src="/placeholder.svg" alt="Profile" width={24} height={24} className="rounded-full" />
                                <span className="font-semibold">Philip Fry</span>
                            </div>
                            <span className="text-sm text-muted-foreground">Entity structure updated</span>
                        </div>
                        <p className="mb-4">Hey <span className="text-blue-600">@James</span> Our new entity in Italy is open and operating! 🎉</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Image src="/placeholder.svg" alt="Profile" width={24} height={24} className="rounded-full" />
                            <span>James</span>
                        </div>
                        <p className="mt-2">Great news! You'll see we've updated your entity structure. Agreements are on the way</p>
                    </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">2 agreements are ready</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <FileText className="text-red-500" size={20} />
                                    <span>Sign Loan Agreement</span>
                                </div>
                                <Button variant="outline" size="sm">Open & Sign</Button>
                            </div>
                            <p className="text-sm text-muted-foreground">Clicking 'Open & Sign' will take you to PandaDoc where you can sign this document.</p>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Check className="text-green-500" size={16} />
                                <span>Must be signed by</span>
                                <Image src="/placeholder.svg" alt="Profile" width={20} height={20} className="rounded-full" />
                                <span>Philip Fry</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}