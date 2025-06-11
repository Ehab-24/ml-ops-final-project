import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import { getClass } from "@/api/class"
import { toast } from "sonner"
import type { ClassDetails } from "@/types"
import { useAuth } from "@/lib/AuthContext"

export default function ClassDetailPage() {

    const { classId } = useParams()
    const [classDetails, setClassData] = useState<ClassDetails | null>(null)

    const { auth } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!classId || !Number(classId)) return
        getClass(Number(classId)).then((result) => {
            if (result.ok)
                setClassData(result.value)
            else
                toast.error('Unable to load class!')
        })
    }, [classId])


    if (!classDetails)
        return (
            <div className="w-full h-full min-h-full min-w-full grid place-items-center">
                <p>Loading...</p>
            </div>
        )

    return (
        <div className="p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{classDetails.name}</CardTitle>
                    <CardDescription>{classDetails.subject} • {classDetails.section}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">Invitation Code: {classDetails.invite_code}</p>
                    <p className="text-sm text-gray-500">Teacher: {classDetails.teacher.username || classDetails.teacher.email}</p>
                    <p className="text-sm">{classDetails.student_count} enrolled</p>
                </CardContent>
            </Card>

            <div className="w-full flex justify-between items-center">
                <h2 className="text-xl font-semibold">Assignments</h2>
                {auth.role == "teacher" && (
                    <Button asChild variant="secondary">
                        <Link to={`/classes/${classId}/assignments/create/`}>Create New</Link>
                    </Button>
                )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {classDetails.assignments.map(a => (
                    <Card
                        key={a.id}
                        className="flex flex-col justify-between cursor-pointer hover:shadow-black/10 shadow-2xl shadow-black/0 transition-all"
                        onClick={() => navigate(`/classes/${classId}/assignments/${a.id}/`)}
                    >
                        <CardHeader>
                            <CardTitle className="text-lg">{a.name}</CardTitle>
                            <CardDescription>{format(new Date(a.deadline), "PPP p")}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                            <p>{a.description}</p>
                            <div className="flex items-center min-w-full justify-between">
                                <div className="flex gap-2 items-center">
                                    <Button asChild variant="outline" size="sm">
                                        <a href={a.task_file} target="_blank">Task</a>
                                    </Button>
                                    {auth.role === "teacher" && !!a.solution_file && (
                                        <Button asChild variant="outline" size="sm">
                                            <a href={a.solution_file} target="_blank">Solution</a>
                                        </Button>
                                    )}
                                </div>

                                {auth.role === "teacher" ? (
                                    <p>
                                        {a.submission_count} submitted
                                    </p>
                                ) : a.submitted ? (
                                    <p>
                                        submitted
                                    </p>
                                ) : new Date(a.deadline) < new Date() ? (
                                    <p>
                                        missed
                                    </p>
                                ) : (
                                    <p>
                                        pending
                                    </p>
                                )
                                }
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

