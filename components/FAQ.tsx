import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQData } from '@/lib/data'



const FAQ = () => {
    return (
        <div className="bg-[#F9F7F4] py-[7.75rem] w-full px-[18rem]">

            <div className="text-center space-y-2 mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium">
                    Frequently asked questions
                </h2>
            </div>

            <div className="px-[13rem] text-lg">
                <Accordion type='single' collapsible className=''>
                    {FAQData.map((faq, index) => (
                        <AccordionItem value={`${index}`}>
                            <AccordionTrigger>
                                <h3 className="font-sans text-lg font-light my-2">{faq.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="font-sans text-muted-foreground text-md">
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))

                    }
                </Accordion>



            </div>
        </div>
    )
}

export default FAQ