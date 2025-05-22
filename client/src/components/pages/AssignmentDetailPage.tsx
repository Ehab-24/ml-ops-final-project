import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Assignment } from "@/types"
import { getAssignment } from "@/api/assignments"
import { toast } from "sonner"


const mockAssignment: Assignment = {
    id: 1,
    name: "Math Assignment 1",
    description: "Solve the attached calculus problems.",
    deadline: "2025-06-01",
    taskFiles: ["calculus.pdf", "problems.docx"]
}

export default function AssignmentDetailsPage() {
    const { assignmentId } = useParams()
    const [assignment, setAssignment] = useState<Assignment | null>(null);
    const [files, setFiles] = useState<FileList | null>(null)

    useEffect(() => {
        getAssignment(Number(assignmentId || "-1")).then(result => {
            if (result.ok)
                setAssignment(result.value.assignment)
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

    if (!assignment)
        return <></>

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>{mockAssignment.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Deadline: {mockAssignment.deadline}
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>{mockAssignment.description}</p>
                    <div>
                        <Label>Task Files</Label>
                        <ul className="list-disc list-inside">
                            {mockAssignment.taskFiles.map((file, idx) => (
                                <li key={idx}>
                                    <a href={`/${file}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                                        {file}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>

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
        </div>
    )
}

