"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/context/AuthContext";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email."),
  resume: z.any(),
});

export default function ResumeUploadForm() {
  const { user } = useAuth();
  const [fileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      resume: null,
    },
  });

  const onDrop = (acceptedFiles) => {
    setFileName(acceptedFiles[0].name);
    form.setValue("resume", acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
    },
    maxFiles: 1,
  });

  const onSubmit = async (values) => {
    if (!values.resume) return;
    setLoading(true);
    setResponseMessage("");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("resume", values.resume);

      // Send to backend
      const res = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Backend response:", data);

      //Example : data from VAPI agent
      setResponseMessage("Resume uploaded and processed successfully!");
      form.reset();
      setFileName(null);
    } catch (error) {
      console.error("Error uploading resume:", error);
      setResponseMessage("Failed to upload resume. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-10 border rounded-xl shadow-md w-full max-w-lg"
        >
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...field}
                    className="w-full border rounded px-3 py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    {...field}
                    className="w-full border rounded px-3 py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resume Upload */}
          <FormField
            control={form.control}
            name="resume"
            render={() => (
              <FormItem>
                <FormLabel>Upload Resume</FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-6 cursor-pointer text-center transition ${isDragActive
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-300"
                      }`}
                  >
                    <input {...getInputProps()} />
                    {fileName ? (
                      <p className="text-sm font-medium text-green-600">
                        {fileName}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Drag & drop your resume here, or{" "}
                        <span className="text-yellow-600 font-semibold">
                          click to browse
                        </span>
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            disabled={!fileName || loading}
            className="w-full hover:scale-105 transition"
          >
            {loading ? "Uploading..." : "Let’s Begin the Interview ✨"}
          </Button>

          {/* Response Message */}
          {responseMessage && (
            <p className="text-center mt-2 text-green-600">{responseMessage}</p>
          )}
        </form>
      </Form>
    </div>
  );
}
