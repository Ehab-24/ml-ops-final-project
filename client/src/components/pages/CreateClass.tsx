import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClass } from "@/api/class";

const classSchema = z.object({
  name: z.string().min(1, "Class name is required"),
  section: z.string().optional(),
  subject: z.string().optional(),
});

export type ClassPayload = z.infer<typeof classSchema>;

export default function CreateClassPage() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof classSchema>>({
    resolver: zodResolver(classSchema),
    defaultValues: {
      name: "",
      section: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof classSchema>) {
    const result = await createClass(values);
    if (result.ok) {
      toast("Class created successfully!");
      navigate("/");
    } else {
      toast.error(result.error);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Class</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Class Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Math 101" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="section"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Section</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. A" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Algebra" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" variant="secondary">
            Create Class
          </Button>
        </form>
      </Form>
    </div>
  );
}
