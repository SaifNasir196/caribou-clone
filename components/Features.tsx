import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, MessageCircle, PieChart, FileSpreadsheet, Users } from "lucide-react"

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

                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-12">
                    <Card className="bg-[#e8e5e2] border-none shadow-none">
                        <CardContent className="p-12">
                            <div className="flex items-start space-x-4 mb-4">
                                <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-semibold">Anik</p>
                                    <p className="text-sm text-gray-500">Hey <span className="text-blue-500">@James</span> Can you please review this change to our parent and subsidiary structure in the US?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 ml-14">
                                <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="font-semibold">James</p>
                                    <p className="text-sm text-gray-500">Hi <span className="text-blue-500">@Anik</span> Sure thing, I can see you've already uploaded files for me - thanks!</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#F9F7F4] border-none shadow-none">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold">Always-on support</h3>
                            <p className="text-gray-500">Get 24/7 access to international tax expertise, without the pay-per-hour headaches. We set up a Slack (or Teams) channel with you for simple, always-on support.</p>
                            <p className="text-gray-500">We have email support as well, obviously.</p>
                            <div className="flex space-x-4">
                                <img src="/placeholder.svg?height=24&width=24" alt="Slack" className="w-6 h-6" />
                                <img src="/placeholder.svg?height=24&width=24" alt="Microsoft Teams" className="w-6 h-6" />
                                <img src="/placeholder.svg?height=24&width=24" alt="Gmail" className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e8e5e2] border-none shadow-none">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold">Activity feed</h3>
                            <p className="text-gray-500">A simple timeline to give you clear instructions on what matters, like who signs, what, and when, minus the chaos.</p>
                            <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Sign Loan Agreement</h4>
                                <div className="flex items-center space-x-2 mb-2">
                                    <FileText className="text-red-500" />
                                    <span className="text-sm">Acme Inc. Loan agreement</span>
                                </div>
                                <Button className="bg-blue-600 text-white">Open & Sign</Button>
                                <p className="text-sm text-gray-500 mt-2">Must be signed by Jerome Bell</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e8e5e2] border-none shadow-none">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold">Entity Monitoring</h3>
                            <p className="text-gray-500">Go from firefighting to real-time international tax monitoring as your entities grow. We ensure your solution is implemented the right way.</p>
                            <div className="space-y-2">
                                <Card>
                                    <CardContent className="p-4 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">Acme Inc</p>
                                            <p className="text-sm text-gray-500">🇬🇧 United Kingdom</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">Acme Industries</p>
                                            <p className="text-sm text-gray-500">🇪🇸 Spain</p>
                                        </div>
                                        <Badge className="bg-orange-100 text-orange-800">New entity</Badge>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="p-4 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">Acme US L</p>
                                            <p className="text-sm text-gray-500">🇺🇸 United States</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e8e5e2] border-none shadow-none">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold">Automatic document parsing</h3>
                            <p className="text-gray-500">We work fast by having you upload a document instead of answering a ton of questions, and we let our system do the work of extracting the correct information.</p>
                            <div className="bg-white p-4 rounded-lg">
                                <FileSpreadsheet className="text-green-500 w-12 h-12 mb-4" />
                                <div className="space-y-2">
                                    {['Supplier Invoices', 'Entity Structure', 'Marco McEnroy', 'Frank Abbot'].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e8e5e2] border-none shadow-none">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold">Simple multi-entity admin</h3>
                            <p className="text-gray-500">Request transfer pricing documents and intragroup agreements, monitor work across teams, and learn how to structure your entities in a few clicks.</p>
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
                </div>
            </div>
        </div >
    )
}