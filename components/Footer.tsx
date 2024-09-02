import React from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const Footer = () => {
    return (
        <footer className="bg-[#F9F7F4] py-24 px-[18rem] w-full flex flex-col gap-6 ">
            <div className="flex justify-between items-start gap-32">
                <div>
                    <h2 className="text-2xl font-extrabold">CARIBOU</h2>
                    <p className="text text-[#475467] mt-6 font-sans font-light">
                        Set up intragroup agreements, transfer pricing policies, and benchmarking in a few clicks.
                    </p>
                </div>

                <div className="flex space-x-16 text-sm font-sans">
                    <div>
                        <h3 className="text-sm mb-2 text-gray-500">Company</h3>
                        <ul>
                            <li>
                                <Button variant="link" className="p-0 h-auto text-blue-600 hover:underline text-base">
                                    Careers <Badge className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">2</Badge>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-500 mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><Button variant="link" className="p-0 h-auto text-blue-600 hover:underline text-base">Blog</Button></li>
                            <li><Button variant="link" className="p-0 h-auto text-blue-600 hover:underline text-base">Finance guide</Button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-500 mb-2">Partnerships</h3>
                        <ul>
                            <li><Button variant="link" className="p-0 h-auto text-blue-600 hover:underline text-base">Partners</Button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-500 mb-2">Socials</h3>
                        <ul>
                            <li>
                                <Button variant="ghost" size="icon" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                                    <Linkedin size={20} />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Separator />

            <div className="flex justify-between items-end font-sans font-light text-gray-500">

                <div className="">
                    <p>© 2024 Rebank Technologies Limited (Company No. 09695886)</p>
                    <p>Address: 81 Rivington Street, London, EC2A 3AY</p>
                </div>

                <div className="flex space-x-4 ">
                    <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-gray-900">Terms of service</Button>
                    <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-gray-900">Privacy policy</Button>
                    <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-gray-900">Cookie policy</Button>
                    <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-gray-900">Contact us</Button>
                </div>
            </div>

        </footer>
    );
};

export default Footer;