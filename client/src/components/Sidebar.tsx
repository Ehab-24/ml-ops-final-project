import { useEffect, useState } from "react"
import type { Class } from "@/types"
import { getClasses } from "@/api/class"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { useAuth } from "@/lib/AuthContext"

export function Sidebar() {
    const [classes, setClasses] = useState<Class[]>([])

    const { logout } = useAuth()

    useEffect(() => {
        getClasses().then((result) => {
            if (result.ok)
                setClasses(result.value)
            else
                toast('Unable to load classes!')
        })
    }, [])

    return (
        <aside className="w-64 border-r h-screen p-4 bg-white flex flex-col justify-between">
            <div className="flex flex-col">
                <NavigationMenu orientation="vertical" className="bg-orange-200 w-full min-w-full mb-8">
                    <NavigationMenuList className="flex flex-col gap-2 w-full bg-purple-200">
                        <NavigationMenuItem className="min-w-full bg-green-200">
                            <NavigationMenuLink href="/" className="min-w-full block p-2 rounded hover:bg-gray-100 transition">
                                <div className="font-medium">Home</div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <h2 className="text-lg font-bold mb-4">Your Classes</h2>
                <NavigationMenu orientation="vertical" className="bg-orange-200 w-full min-w-full">
                    <NavigationMenuList className="flex flex-col gap-2 w-full bg-purple-200">
                        {classes.map((cls) => (
                            <NavigationMenuItem key={cls.id} className="min-w-full bg-green-200">
                                <NavigationMenuLink href={`/classes/${cls.id}`} className="min-w-full block p-2 rounded hover:bg-gray-100 transition">
                                    <div className="font-medium">{cls.name}</div>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex flex-col">
                <Button variant="outline" onClick={() => logout()}>
                    Logout
                </Button>
            </div>
        </aside>
    )
}
