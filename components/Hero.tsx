import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, FileText } from "lucide-react"
import Image from "next/image"
import ChatMessage from "@/components/ChatMessage"
import { Badge } from "./ui/badge"

export default function Hero() {
    return (
        <div className=" w-full bg-[#F9F7F4] flex flex-col lg:flex-row items-start justify-center py-4 px-[17rem]">
            {/* Left Column */}
            <div className=" lg:w-[52%]  py-20">
                <span className="border border-orange-500 text-muted-foreground">Backed by Y Combinator</span>

                <h1 className="text-3xl md:text-4xl lg:text-[3.05rem] font-bold md:leading-relaxed lg:leading-snug mt-12 mb-5">
                    Intragroup agreements, covered from day one
                </h1>
                <p className=" text-[1.35rem] text-muted-foreground font-sans font-light w-3/4 max-w-md ">
                    A new way for multi-entity companies to request intragroup agreements, transfer pricing policies, and benchmarking.
                </p>
                <div className="flex flex-row mt-12">
                    <Input type="email" placeholder="Enter your email" className="max-w-sm rounded-2xl rounded-tr-none rounded-br-none p-5" />
                    <Button className="px-10 py-5 rounded-2xl rounded-tl-none rounded-bl-none">Enquire</Button>
                </div>
                <p className="text-[0.8rem] text-muted-foreground ml-3 mt-3">Don't worry, an enquiry is commitment-free!</p>
            </div>


            {/* Right Column */}
            <div className="lg:w-[45%] space-y-16 font-sans pt-12">
                <div className=" w-2/3 space-y-6 space-x-0">
                    <ChatMessage
                        sender={{
                            name: "Philip Fry",
                            avatarUrl: "https://avatars.githubusercontent.com/u/1403241?v=4"
                        }}
                        recipient={{
                            name: "James"
                        }}
                        message="Our new entity in Italy is open and operating! ✨"
                        textsm
                    />
                    <ChatMessage
                        sender={{
                            name: "James",
                            avatarUrl: "https://avatars.githubusercontent.com/u/1403241?v=4"
                        }}
                        recipient={{
                            name: "Philip Fry"
                        }}
                        message="Great news! You’ll see we’ve updated your entity structure. Agreements are on the way"
                        isReply
                        textsm
                    />
                </div>


                <Card className="bg-white shadow-lg rounded-xl w-4/5">
                    <div className="mb-5 p-6 bg-[#fbfaf9]">
                        <CardTitle className="font-medium"> 2 agreements are ready </CardTitle>
                    </div>
                    <CardContent className="p-6 space-y-5">

                        <h4 className="font-medium text-lg mb-2">Sign Loan Agreement</h4>
                        <div className="flex items-center space-x-2 mb-2 px-5 py-4 border rounded-xl ">
                            <FileText className="text-red-500 mr-2" />
                            <span className="text-sm">Acme Inc. Loan agreement</span>
                        </div>
                        <div className="flex gap-6">
                            <Button size="lg" className="bg-blue-600 text-white">Open & Sign</Button>
                            <span className="text-sm text-gray-500 text-wrap w-64">Must be signed by
                                <Badge className="text-sm font-light py-0 px-2 ml-2 bg-indigo-50 text-blue-500 rounded-full"> Jerome Bell </Badge>
                            </span>

                        </div>
                    </CardContent>
                    <CardFooter className="mt-3 p-3 bg-[#fbfaf9] text-sm text-gray-500">
                        <p> Review and approve Service Agreement </p>

                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}