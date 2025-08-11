import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    // destructure the post object
    const { _createdAt, views, author: {_id: authorId, name }, title, category, _id, image, description } = post;

    return (
        <li className="hover:bg-[#f59bb69c] bg-white border-[5px] border-black py-6 px-5 rounded-[28px] shadow-[2px_2px_0px_0px_#141413] hover:border-[#EE2B69] transition-all duration-200 hover:shadow-[#1d222c] ">
            <div className="flex justify-between items-center">
                <p className="font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full group-hover:bg-white">
                    {formatDate(_createdAt)}
                </p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-[#ee2b69ba]" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="font-medium text-[16px] line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='font-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>

                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full"/>
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">{description}</p>
                <img src={image} alt="placeholder" className="w-full h-[164px] rounded-[10px] object-cover" />
            </Link>

            <div className="flex justify-between items-center gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="font-medium text-[16px] text-black">{category}</p>            
                </Link>

                <Button className="rounded-full bg-[#141413] font-medium text-[16px] text-white px-5 py-3">
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>  

            </div>
        </li>
    )
}

export default StartupCard