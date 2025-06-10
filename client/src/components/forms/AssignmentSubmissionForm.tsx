import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { submitAssignment } from "@/api/assignments";

const assignmentSchema = z.object({
    submitted_files: z
        .any()
        .refine((submitted_files) => submitted_files?.length > 0, "At least one file is required."),
    isHandWritten: z.boolean(),
});

export type AssignmentFormValues = z.infer<typeof assignmentSchema>;

type Props = { id: number, classId: number };

export default function AssignmentSubmissionForm({ id }: Props) {
    const [filePreviews, setFilePreviews] = useState<File[]>([]);

    const form = useForm<AssignmentFormValues>({
        resolver: zodResolver(assignmentSchema),
        defaultValues: {
            submitted_files: undefined,
            isHandWritten: false,
        },
    });

    const onSubmit = (values: AssignmentFormValues) => {
        const formData = new FormData();

        if (values.submitted_files.length > 0)
            formData.append("submitted_file", values.submitted_files[0])
        // TODO: handle multiple files
        //for (let i = 0; i < values.submitted_files.length; i++) {
        //    formData.append("submitted_files", values.submitted_files[i]);
        //}

        formData.append("isHandWritten", values.isHandWritten.toString());
        console.log("Form data:", formData);

        submitAssignment(id, formData).then(result => {
            if (result.ok) {
                console.log(result.value)
                form.reset()
                setFilePreviews([])
                toast('Assignment submitted successfully!');
            } else
                toast.error(result.error)
        })

    };

    return (
        <div className="max-w-xl p-6">
            <h1 className="text-2xl font-bold mb-4">Submit Assignment</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="submitted_files"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Your Solution</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        multiple
                                        onChange={(e) => {
                                            const submitted_files = e.target.files;
                                            field.onChange(submitted_files);
                                            setFilePreviews(submitted_files ? Array.from(submitted_files) : []);
                                        }}
                                    />
                                </FormControl>
                                {filePreviews.length > 0 && (
                                    <div className="space-y-1 mt-2">
                                        {filePreviews.map((file, index) => (
                                            <p key={index} className="text-sm text-muted-foreground">
                                                📄 {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                            </p>
                                        ))}
                                    </div>
                                )}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isHandWritten"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Check if your solution is hand-written</FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant="secondary">
                        Submit Solution
                    </Button>
                </form>
            </Form>
        </div>
    );
}
