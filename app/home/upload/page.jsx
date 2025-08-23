"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email."),
  resume: z.any()
})

export default function ResumeUploadForm() {
  const [fileName, setFileName] = useState(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      resume: null,
    },
  })

  const onDrop = (acceptedFiles) => {
    setFileName(acceptedFiles[0].name)
    form.setValue("resume", acceptedFiles[0])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
    },
    maxFiles: 1,
  })

  function onSubmit(values) {
    console.log(values) // send to backend
  }

  return (
    <div className="p-30">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-40 border rounded-xl shadow-md">


          {/* Resume Upload with Drag & Drop */}
          <FormField
            control={form.control}
            name="resume"
            render={() => (
              <FormItem>
                <FormLabel>Upload Resume</FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-6 cursor-pointer text-center transition 
                    ${isDragActive ? "border-yellow-500 bg-yellow-50" : "border-gray-300"}
                  `}
                  >
                    <input {...getInputProps()} />
                    {fileName ? (
                      <p className="text-sm font-medium text-green-600">{fileName}</p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Drag & drop your resume here, or <span className="text-yellow-600 font-semibold">click to browse</span>
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          {!fileName ?
            <Button disabled type="submit" className="w-full hover:scale-105 transition">
              Let’s Begin the Interview ✨
            </Button> :
            <Button type="submit" className="w-full hover:scale-105 transition">
              Let’s Begin the Interview ✨
            </Button>
          }
        </form>
      </Form>
    </div>
  )
}