import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
    return (
        <div className="bg-[#F9F7F4] py-16 w-full px-[18rem]">
            <Card className='border-none shadow-lg py-4 w-full rounded-2xl'>
                <CardContent className='flex flex-col justify-center items-center font-sans border-none '>
                    <CardTitle className="text-xl 3xl:text-4xl font-medium mb-2 mt-4 tracking-wider">
                        Interested in speaking with us?
                    </CardTitle>

                    <p className='text-gray-500'>
                        We’re ready to chat no matter where you are on your journey.
                    </p>

                    <div className="flex justify-center items-center mt-8 w-full">
                        <Input placeholder="Enter your email" className='w-[20rem] rounded-xl rounded-tr-none rounded-br-none py-5' />
                        <Button className='rounded-xl rounded-tl-none rounded-bl-none p-5'>
                            Enquire <ArrowRight className='ml-2' />
                        </Button>

                    </div>



                </CardContent>


            </Card>
        </div>
    )
}

export default Contact