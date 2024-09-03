import React from 'react'
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage } from './ui/avatar'

const Quote = () => {
    return (
        <div className='px-[18rem] w-full bg-[#F9F7F4] py-24'>

            <Card className='w-full border-none shadow-xl rounded-3xl py-6 px-10'>
                <CardHeader>
                    <CardTitle className="text-2xl text-center font-medium">
                        "It's not just doing the compliance — it's actually like, making me sleep. You're like, fixing my sleep, that's what you're doing."
                    </CardTitle>
                </CardHeader>
                <CardContent className='flex justify-center space-x-4 mt-2'>
                    <Avatar className='w-14 h-14'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/1403241?v=4" />
                    </Avatar>
                    <div className="">
                        <p className="font-sans">
                            Christoper Mjeld
                        </p>
                        <p className='font-sans text-gray-500'>
                            Co-founder
                        </p>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-center text-2xl font-sans font-semibold'>
                    verdn
                </CardFooter>
            </Card>
        </div>
    )
}

export default Quote