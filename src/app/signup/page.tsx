import Logo from "@/ui/components/logo";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import Link from "next/link";

export default function Page(){
  return (
    <>
      <main className="flex bg-nl-100 w-screen h-screen justify-center items-center dark:bg-nd-900">
        <form action="" className="bg-neutral py-10 px-8 h-fit rounded-xl w-full max-w-112 mx-4 shadow-modal dark:border dark:border-nd-500 dark:bg-nd-800">
          <Logo />
          <h1 className="text-nl-900 text-2xl/[1.4] font-bold mt-8 dark:text-neutral">Create your Account</h1>
          <p className="text-nl-800 text-sm/[1.5] tracking-[0.14px] font-medium mt-1.5 dark:text-nd-100">Join us and start saving your favorite links — organized, searchable, and always within reach.</p>
          <Label htmlFor="sname" className="mt-8">Full name<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="sname" className="mt-1.5"/>
          <Label htmlFor="semail" className="mt-4">Email Address<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="semail" className="mt-1.5"/>
          <Label htmlFor="spass" className="mt-4">Password<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="spass" className="mt-1.5"/>
          <button className="w-full mt-4 px-4 py-3 border-2 bg-teal-700 text-neutral text-base/[1.4] font-semibold rounded-lg cursor-pointer hover:bg-teal-800 focus:shadow-inputl dark:focus:shadow-inputd">Create Account</button>
          <p className="text-nl-800 mt-8 text-center text-sm font-medium">Already have an account? <Link href={"/login"} className="font-semibold leading-[1.4] text-nl-900 hover:text-teal-700 dark:text-neutral">Log In</Link></p>
        </form>
      </main>
    </>
  );
}