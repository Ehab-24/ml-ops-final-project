import { useEffect, useState } from "react"
import type { Class } from "@/types"
import { getClasses, joinClass } from "@/api/class"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { useAuth } from "@/lib/AuthContext"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Form, FormControl, FormLabel, FormField, FormItem, FormMessage, FormDescription } from "@/components/ui/form";
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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

            <div className="flex flex-col gap-2">
                <JoinClass />
                <Button variant="outline" onClick={() => logout()}>
                    Logout
                </Button>
            </div>
        </aside>
    )
}



const joinClassSchema = z.object({
    invite_code: z.string().length(7)
})
type JoinClassFormValues = z.infer<typeof joinClassSchema>;

function JoinClass() {

    const [open, setOpen] = useState(false)

    const form = useForm<JoinClassFormValues>({
        resolver: zodResolver(joinClassSchema),
        defaultValues: {
            invite_code: "",
        },
    });

    function onSubmit(values: JoinClassFormValues) {
        joinClass(values).then(result => {
            if (result.ok) {
                toast('Class joined successfully!')
                setOpen(false)
            }
            else
                toast.error(result.error)
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline">
                    Join Class
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Enter classroom invite_code</DialogTitle>
                </DialogHeader>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="invite_code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Class Code</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the 7-character class invite code provided by your instructor.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button variant="outline" type="submit">Join Class</Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
