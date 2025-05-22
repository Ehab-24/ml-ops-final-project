import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useParams } from "react-router"
import { createAssignment } from "@/api/assignments"
import { toast } from "sonner"

const assignmentSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    deadline: z.string().min(1, "Deadline is required"),
    taskFile: z
        .any()
        .refine((file) => file?.length === 1, "Task document is required"),
    solutionFile: z
        .any()
        .refine((file) => file?.length === 1, "Solution file is required")
})

export default function CreateAssignmentPage() {

    const { classId } = useParams()

    const form = useForm<z.infer<typeof assignmentSchema>>({
        resolver: zodResolver(assignmentSchema),
        defaultValues: {
            title: "",
            description: "",
            deadline: "",
            taskFile: undefined,
            solutionFile: undefined
        }
    })

    const [taskPreview, setTaskPreview] = useState<File | null>(null)
    const [solutionPreview, setSolutionPreview] = useState<File | null>(null)

    function onSubmit(values: z.infer<typeof assignmentSchema>) {
        if (!classId) return
        const formData = new FormData()
        formData.append("name", values.title)
        formData.append("description", values.description || "")
        formData.append("deadline", values.deadline)
        formData.append("task_file", values.taskFile[0])
        formData.append("solution_file", values.solutionFile[0])
        formData.append("classroom", classId)
        createAssignment(formData).then(result => {
            if (result.ok)
                toast('Assignment created successfully!')
            else
                toast.error(result.error);
        })
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create Assignment</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Assignment title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Add instructions or details" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="deadline"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deadline</FormLabel>
                                <FormControl>
                                    <Input type="datetime-local" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="taskFile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Task Document</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            field.onChange(e.target.files)
                                            setTaskPreview(file || null)
                                        }}
                                    />
                                </FormControl>
                                {taskPreview && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        📄 {taskPreview.name} ({(taskPreview.size / 1024).toFixed(1)} KB)
                                    </p>
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="solutionFile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Solution File</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            field.onChange(e.target.files)
                                            setSolutionPreview(file || null)
                                        }}
                                    />
                                </FormControl>
                                {solutionPreview && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        📄 {solutionPreview.name} ({(solutionPreview.size / 1024).toFixed(1)} KB)
                                    </p>
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant="secondary">Create Assignment</Button>
                </form>
            </Form>
        </div>
    )
}

