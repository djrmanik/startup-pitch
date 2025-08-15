'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const StartupForm = () => {

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [pitch, setPitch] = useState("");

    const isPending = false;

    return (
        <form action={() => {}} className="max-w-2xl mx-auto bg-white my-10 space-y-8 px-6">
            
            <div>
                <label htmlFor="title" className="font-bold text-[18px] text-black uppercase">Title</label>
                <Input
                    id="title"
                    name="title"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]"
                    placeholder="Startup title"
                />
                {errors.title && <p className="text-red-500 mt-2 ml-5">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="font-bold text-[18px] text-black uppercase">Description</label>
                <Textarea
                    id="description"
                    name="description"
                    className="border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-[#7D8087]"
                    required
                    placeholder="Startup Description"
                />
                {errors.description && <p className="text-red-500 mt-2 ml-5">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="category" className="font-bold text-[18px] text-black uppercase">Category</label>
                <Input
                    id="category"
                    name="category"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]"
                    placeholder="Startup Category (Tech, Health, etc.)"
                />
                {errors.category && <p className="text-red-500 mt-2 ml-5">{errors.category}</p>}
            </div>

            <div>
                <label htmlFor="link" className="font-bold text-[18px] text-black uppercase">Image URL</label>
                <Input
                    id="link"
                    name="link"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-[#7D8087]"
                    placeholder="Startup Image URL"
                />
                {errors.link && <p className="text-red-500 mt-2 ml-5">{errors.link}</p>}
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className="font-bold text-[18px] text-black uppercase">Pitch</label>

                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: 'hidden' }}
                    textareaProps={{
                        placeholder: "Briefly describe your startup idea and what problem it solves",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"], 
                    }}
                />

                {errors.pitch && <p className="text-red-500 mt-2 ml-5">{errors.pitch}</p>}
            </div>

            <Button 
                type="submit" 
                className="bg-[#EE2B69] border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] text-white"
                disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Your Startup"}
                <Send className="size-6-ml-2"/>
            </Button>

        </form>
    )
}

export default StartupForm