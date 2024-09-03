import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import CompanyStructureDiagram from "./Diagram"
import OrganizationChart from "./OrganizationChart"
import { employees, arrowPaths } from "@/lib/data"
import ChatMessage from "./ChatMessage"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "./ui/checkbox"



export default function Component() {
    return (
        <div className="bg-[#F9F7F4] py-16  px-[18rem]">
            <div className="max-w-7xl">
                <div className="text-center space-y-5 mb-16">
                    <Badge variant="outline" className='text-sm font-sans font-normal text-muted-foreground rounded-full ' >Features</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium mb-7">
                        We put the effort in, so you don't need to
                    </h2>
                    <p className="text-xl text-gray-500">
                        Our features are made to remove tax & legal admin from your day-to-day work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-x-12 gap-y-6 font-sans font-light tracking-wide">
                    <div className="flex flex-col items-end justify-end">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem] mb-10">
                            <CardContent className="py-20 px-[3.5rem] space-y-10 h-full ">

                                <ChatMessage
                                    sender={{
                                        name: "Andi",
                                        avatarUrl: "https://avatars.githubusercontent.com/u/1403241?v=4"
                                    }}
                                    recipient={{
                                        name: "James"
                                    }}
                                    message="Can you please review this change to our parent and subsidiary structure in the US?"
                                />
                                <ChatMessage
                                    sender={{
                                        name: "James",
                                        avatarUrl: "https://avatars.githubusercontent.com/u/1403241?v=4"
                                    }}
                                    recipient={{
                                        name: "Andi"
                                    }}
                                    message="Sure thing. I can see you’ve already uploaded files for me - thanks!"
                                    isReply
                                />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-col justify-end">
                        <Card className="bg-[#F9F7F4] border-none shadow-none h-[25rem] p-0 mb-10">
                            <CardContent className="flex flex-col justify-end gap-4 h-full p-1 pb-2 ">
                                <div className="flex space-x-4">
                                    <img src="/placeholder.svg?height=24&width=24" alt="Slack" className="w-6 h-6" />
                                    <img src="/placeholder.svg?height=24&width=24" alt="Microsoft Teams" className="w-6 h-6" />
                                    <img src="/placeholder.svg?height=24&width=24" alt="Gmail" className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-semibold">Always-on support</h3>
                                <p className=" text-gray-500 tracking-wider">Get 24/7 access to international tax expertise, without the pay-per-hour headaches. We set up a Slack (or Teams) channel with you for simple, always-on support.</p>
                                <p className="text-gray-500 tracking-wider">We have email support as well, obviously.</p>
                            </CardContent>
                        </Card>
                    </div>


                    <div className="flex flex-col gap-2">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem] ">
                            <CardContent className="p-6 space-y-4 h-full">
                                <div className="relative flex flex-col items-end justify-start h-full m-7">


                                    <div className="bg-white p-8 rounded-lg relative z-10 w-[90%] space-y-8 border-indigo-400 border">
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
                                    </div>

                                    <div className="bg-white p-8 rounded-lg -left-0 bottom-14 z-0 w-[90%] space-y-8 border-indigo-400 border absolute">
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
                                    </div>


                                </div>
                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium mt-5">Activity feed</h3>
                        <p className="text-gray-600">A simple timeline to give you clear instructions on what matters, like who signs, what, and when, minus the chaos.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="p-6 space-y-4 h-full">
                                <CompanyStructureDiagram />

                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium mt-5">Entity Monitoring</h3>
                        <p className="text-gray-600">Go from firefighting to real-time international tax monitoring as your entities grow. We ensure your solution is implemented the right way.</p>

                    </div>


                    <div className="flex flex-col gap-2">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="p-6 space-y-4 overflow-hidden">
                                <OrganizationChart
                                    employees={employees}
                                    arrowPaths={arrowPaths}
                                />
                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium mt-5">Automatic document parsing</h3>
                        <p className="text-gray-600">We work fast by having you upload a document instead of answering a ton of questions, and we let our system do the work of extracting the correct information.</p>

                    </div>

                    <div className="flex flex-col gap-2">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem] ">
                            <CardContent className="p-11 relative flex h-full overflow-hidden ">
                                {/* cursor*/}
                                <div className="h-full pl-3 pr-8">
                                    {/* straight vertical dashed line */}
                                    <div className="absolute h-full w-[0.15rem] bg-gray-300 top-0"></div>
                                </div>

                                {/* card */}
                                <div className="bg-white p-6 rounded-lg space-y-9 h-96">
                                    <div className="flex flex-col items-start gap-1">
                                        <span className="font-normal">Select any entities owned by Acme Inc</span>
                                        <p className="text-sm text-gray-500">Select the entities Acme Inc owns, and then input the percentage ownership.</p>
                                    </div>

                                    {/* switch */}
                                    <div className="space-y-4">
                                        <div className="flex gap-2 ">
                                            <Switch /> <span className="text-sm text-slate-700 font-medium">Acme Inc does not own any entities</span>
                                        </div>
                                        <div className="flex items-center justify-between border-[2.5px] border-indigo-500 my-3 p-3 rounded-xl">
                                            <div className="flex items-center space-x-4">
                                                <Checkbox checked className="w-5 h-5 rounded-md" />
                                                <Badge variant="outline" className="px-3 mx-4 text-sm text-slate-800 font-normal">Acme Pty Ltd</Badge>
                                            </div>
                                            <div className="flex justify-center">
                                                <span className=" text-gray-600 border border-gray-300 border-r-0 p-2 px-3 mr-0 rounded-md rounded-tr-none rounded-br-none">%</span>
                                                <span className=" text-gray-800 border border-gray-300 py-2  pl-3 pr-5  ml-0 rounded-md rounded-tl-none rounded-bl-none">50</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between border-[2.5px] border-indigo-500 my-3 p-3 rounded-xl">
                                            <div className="flex items-center space-x-4">
                                                <Checkbox checked className="w-5 h-5 rounded-md" />
                                                <Badge variant="outline" className="px-3 mx-4 text-sm text-slate-800 font-normal">Acme Corp</Badge>
                                            </div>
                                            <div className="flex justify-center">
                                                <span className=" text-gray-600 border border-gray-300 border-r-0 p-2 px-3 mr-0 rounded-md rounded-tr-none rounded-br-none">%</span>
                                                <span className=" text-gray-800 border border-gray-300 py-2 pl-3 pr-5 ml-0 rounded-md rounded-tl-none rounded-bl-none">100</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium mt-5">Simple multi-entity admin</h3>
                        <p className="text-gray-600">Request transfer pricing documents and intragroup agreements, monitor work across teams, and learn how to structure your entities in a few clicks.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}