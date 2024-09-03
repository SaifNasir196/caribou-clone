import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import CompanyStructureDiagram from "./Diagram"
import OrganizationChart from "./OrganizationChart"
import { employees, arrowPaths } from "@/lib/data"
import ChatMessage from "./ChatMessage"


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

                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-12 font-sans font-light tracking-wide">
                    <div className="flex flex-col">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="py-20 px-[3.5rem] space-y-10 h-full">

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
                                {/* <div className="flex items-start mb-4 bg-white rounded-2xl border shadow-md relative">
                                    <Badge className="text-base font-normal bg-white rounded-full p-1 h-8 absolute -top-4 left-4">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/1403241?v=4" />
                                        </Avatar>
                                        <span className="text-indigo-600 px-3">Andi</span>
                                    </Badge>
                                    <div className="p-4 pt-6">
                                        <span className="text-lg text-gray-800 ">Hey </span>
                                        <Badge className="text-base font-light py-0 px-2 bg-indigo-50 text-blue-500 rounded-full">@James</Badge>
                                        <span className="text-lg text-gray-800 "> Can you please review this change to our parent and subsidiary structure in the US?</span>
                                    </div>
                                </div> */}

                                {/* <div className="flex items-start mb-4 ml-16 bg-white rounded-2xl border shadow-md relative">
                                    <Badge className="text-base font-normal bg-white rounded-full p-1 h-8 absolute -top-4 right-4">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/1403241?v=4" />
                                        </Avatar>
                                        <span className="text-indigo-600 px-3">James</span>
                                    </Badge>
                                    <div className="p-4 pt-6">
                                        <span className="text-lg text-gray-800">Hi </span>
                                        <Badge className="text-base font-light py-0 px-2 bg-indigo-50 text-blue-500 rounded-full">@Andi</Badge>
                                        <span className="text-lg text-gray-800"> Sure thing. I can see you’ve already uploaded files for me - thanks!</span>
                                    </div>
                                </div> */}
                            </CardContent>
                        </Card>
                    </div>


                    <div className="flex flex-col">
                        <Card className="bg-[#F9F7F4] border-none shadow-none h-[25rem] p-0">
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


                    <div className="flex flex-col gap-3">
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
                        <h3 className="text-2xl font-medium">Activity feed</h3>
                        <p className="text-gray-500">A simple timeline to give you clear instructions on what matters, like who signs, what, and when, minus the chaos.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="p-6 space-y-4 h-full">
                                <CompanyStructureDiagram />

                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium">Entity Monitoring</h3>
                        <p className="text-gray-500">Go from firefighting to real-time international tax monitoring as your entities grow. We ensure your solution is implemented the right way.</p>

                    </div>


                    <div className="flex flex-col gap-3">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="p-6 space-y-4 overflow-hidden">
                                <OrganizationChart
                                    employees={employees}
                                    arrowPaths={arrowPaths}
                                />
                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium">Automatic document parsing</h3>
                        <p className="text-gray-500">We work fast by having you upload a document instead of answering a ton of questions, and we let our system do the work of extracting the correct information.</p>

                    </div>

                    <div className="flex flex-col gap-3">
                        <Card className="bg-[#e8e5e2] border-none shadow-none h-[25rem]">
                            <CardContent className="p-6 space-y-4">
                                <div className="bg-white p-4 rounded-lg space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Users className="text-blue-500" />
                                        <span className="font-semibold">Select any entities owned by Acme Inc</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Select the entities Acme Inc owns, and then input the percentage ownership.</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-blue-500" />
                                                <span>Acme Pty Ltd</span>
                                            </div>
                                            <input type="text" className="w-16 p-1 border rounded" placeholder="50" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded text-blue-500" checked />
                                                <span>Acme Corp</span>
                                            </div>
                                            <input type="text" className="w-16 p-1 border rounded" value="100" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <h3 className="text-2xl font-medium">Simple multi-entity admin</h3>
                        <p className="text-gray-500">Request transfer pricing documents and intragroup agreements, monitor work across teams, and learn how to structure your entities in a few clicks.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}