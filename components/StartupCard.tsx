import React from 'react'
import { formatDate } from '@/lib/utils'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    return (
        <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[28px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
            <div className="flex-between">
                <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                    {formatDate(post._createdAt)}
                </p>

                <div className="flex gap-1.5">

                </div>
            </div>

        </li>
    )
}

export default StartupCard