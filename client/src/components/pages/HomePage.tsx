import { getClasses } from "@/api/class"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Class } from "@/types"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { toast } from "sonner"

export default function ClassesPage() {

    const [classes, setClasses] = useState<Class[]>([])

    useEffect(() => {
        getClasses().then(result => {
            if (result.ok)
                setClasses(result.value)
            else
                toast.error('Unable to load classes!')
        })
    }, [])

    return (
        <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((cls) => (
                <Link key={cls.id} to={`/classes/${cls.id}`}>
                    <Card className="hover:shadow-lg transition cursor-pointer">
                        <CardHeader className="bg-blue-600 text-white p-4 rounded-t">
                            <CardTitle>{cls.name}</CardTitle>
                            <p className="text-sm">{cls.section}</p>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="capitalize text-gray-600">{cls.subject}</p>
                            <p className="text-sm text-gray-500 mt-2">Teacher: {cls.teacher.username || cls.teacher.email}</p>
                            <p className="text-sm mt-4">{cls.student_count} enrolled</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

