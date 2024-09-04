"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText } from "lucide-react"
import ChatMessage from "@/components/ChatMessage"
import { Badge } from "./ui/badge"
import useActiveSectionView from "@/hooks/useActiveSectionView"

export default function Hero() {
    const { ref } = useActiveSectionView("Home");
    return (
        <div className=" w-full bg-[#F9F7F4] flex flex-col gap-4 lg:flex-row items-start justify-center pb-12 pt-24 px-[17rem]" id="home" ref={ref}>
            {/* Left Column */}
            <div className=" lg:w-[52%] py-20">
                <p className=" w-fit rounded-lg py-1 text-sm text-muted-foreground font-sans">
                    Backed by <span className="bg-orange-600 px-2 py-1 my-3 mx-1 text-white rounded-sm text-sm">Y</span>
                    <span className="text-orange-600">Combinator</span>
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-[3.05rem] font-bold md:leading-relaxed lg:leading-snug mt-12 mb-5">
                    Intragroup agreements, covered from day one
                </h1>
                <p className=" text-[1.35rem] text-muted-foreground font-sans font-light w-3/4 max-w-md ">
                    A new way for multi-entity companies to request intragroup agreements, transfer pricing policies, and benchmarking.
                </p>
                <div className="flex flex-row mt-12 font-sans items-center justify-start">
                    <Input type="email" placeholder="Enter your email" className=" max-w-sm rounded-2xl rounded-tr-none rounded-br-none bg-white p-5 text-sm" />
                    <Button className="p-[1.3rem] rounded-2xl rounded-tl-none rounded-bl-none text-base">
                        Enquire
                        <ArrowRight className="ml-2" />
                    </Button>
                </div>
                <p className="text-[0.8rem] text-muted-foreground ml-3 mt-3">Don't worry, an enquiry is commitment-free!</p>
            </div>


            {/* Right Column */}
            <div className="lg:w-[48%] space-y-16 font-sans pt-12">
                <div className=" w-2/4 space-y-6">
                    <div className="mr-10">
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
                    </div>
                    <div className=" w-[120%]">
                        <ChatMessage
                            sender={{
                                name: "James",
                                avatarUrl: "https://avatars.githubusercontent.com/u/1403241?v=4"
                            }}
                            recipient={{
                                name: "Philip Fry"
                            }}
                            message="Great news! You’ll see we’ve updated your entity structure."
                            isReply
                            textsm
                        />
                    </div>
                </div>



                <Card className="bg-white shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] rounded-lg w-5/6 overflow-hidden border border-indigo-400 border-opacity-50">
                    <div className=" p-6 bg-[#fbfaf9]">
                        <CardTitle className="font-medium"> 2 agreements are ready </CardTitle>
                    </div>
                    <CardContent className=" p-4 space-y-6">
                        <div className="">
                            <h4 className="text-sm mb-1">Sign Loan Agreement</h4>
                            <p className="text-[11px] text-slate-500"> Clicking 'Open & Sign' will take you to PandaDoc where you can sign this document</p>
                        </div>
                        <div className="flex items-center space-x-2 mb-2 p-4 border rounded-xl ">
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