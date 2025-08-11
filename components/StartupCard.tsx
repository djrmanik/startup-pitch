import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from "lucide-react"
import Link from 'next/link'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    return (
        <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[28px] shadow-200 hover:border-[#EE2B69] transition-all duration-200 hover:shadow-[#7D8087] hover:bg-[#EE2B69">
            <div className="flex-between">
                <p className="font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full group-hover:bg-white">
                    {formatDate(post._createdAt)}
                </p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{post.views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${post.author?._id}`}>
                        <p className="font-medium text-[16px] line-clamp-1">
                            {post.author?.name}
                        </p>
                    </Link>

                </div>
            </div>

        </li>
    )
}

export default StartupCard