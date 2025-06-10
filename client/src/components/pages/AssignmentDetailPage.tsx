import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Assignment } from "@/types"
import { getAssignment } from "@/api/assignments"
import { toast } from "sonner"
import { useAuth } from "@/lib/AuthContext"


export default function AssignmentDetailsPage() {
    const { assignmentId, classId } = useParams()
    const [assignment, setAssignment] = useState<Assignment | null>(null);
    const [files, setFiles] = useState<FileList | null>(null)

    const { auth } = useAuth()

    useEffect(() => {
        getAssignment(Number(assignmentId || "-1"), Number(classId || "-1")).then(result => {
            if (result.ok)
                setAssignment(result.value)
            else
                toast('Unable to load assignment!')
        })
    }, [assignmentId]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitted files:", files)
        // TODO: upload logic
    }

    function getFilenameFromUrl(url: string): string {
        return url.split('/').pop() ?? url;
    }

    if (!assignment)
        return (
            <div className="grid place-items-center min-w-full min-h-full">
                Loading...
            </div>
        )

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>{assignment.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Deadline: {assignment.deadline}
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>{assignment.description}</p>
                    <div className="flex flex-col">
                        {auth.role == "teacher" && (<>
                            <Label>Solution File</Label>
                            <a href={assignment.solution_file} className="text-blue-600 underline mb-4" target="_blank" rel="noopener noreferrer">
                                {getFilenameFromUrl(assignment.solution_file)}
                            </a>
                        </>)}

                        <Label>Task Files</Label>
                        <a href={assignment.task_file} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                            {getFilenameFromUrl(assignment.task_file)}
                        </a>
                    </div>
                </CardContent>
            </Card>

            {auth.role == "student" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="solution">Upload Your Solution</Label>
                    <Input
                        id="solution"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                    />
                    <Button type="submit" variant="secondary">Submit Solution</Button>
                </form>
            )}
        </div>
    )
}

