"use client";

import { ZUser } from "@/model/user";
import Logo from "@/ui/components/logo";
import { Input } from "@/ui/shadcn/input";
import { Label } from "@/ui/shadcn/label";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

export default function Page() {

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const formRef = useRef<null | HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formElement = (formRef.current as HTMLFormElement);
    const form = {
      name: formElement["sname"].value,
      email: formElement["semail"].value,
      password: formElement["spass"].value
    }

    const parseResult = ZUser.safeParse(form);
    if (!parseResult.success) {
      const newErrors = {...errors};
      const errorKeys: ("name" | "email" | "password")[] = ["name", "email", "password"];
      const zodErrors = parseResult.error.issues.map(zerr => {
        return {
          key: zerr.path[0],
          message: zerr.message
        }
      });
      for(const error of errorKeys){
        newErrors[error] = zodErrors.find(element => element.key === error)?.message || ""
      }
      setErrors(newErrors);
    } else {
      formElement.reset();
      setErrors({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  const removeError = (key: "name" | "email" | "password") => {
    const newErrors = {...errors};
    newErrors[key] = "";
    setErrors(newErrors);
  }

  console.log(errors);
  return (
    <>
      <main className="flex bg-nl-100 w-screen h-screen justify-center items-center dark:bg-nd-900">
        <form onSubmit={handleSubmit} ref={formRef} noValidate className="bg-neutral py-10 px-8 h-fit rounded-xl w-full max-w-112 mx-4 shadow-modal dark:border dark:border-nd-500 dark:bg-nd-800">
          <Logo />
          <h1 className="text-nl-900 text-2xl/[1.4] font-bold mt-8 dark:text-neutral">Create your Account</h1>
          <p className="text-nl-800 text-sm/[1.5] tracking-[0.14px] font-medium mt-1.5 dark:text-nd-100">Join us and start saving your favorite links — organized, searchable, and always within reach.</p>
          <Label htmlFor="sname" className="mt-8">Full name<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="sname" name="sname" className={`mt-1.5 ${!!!errors["name"].length ? "" : "border-red-800 dark:border-red-800"}`} type="text" onFocus={() => removeError("name")} />
          <p className="mt-1.5 text-sm/[1.5] font-medium text-red-800">{`${errors["name"].length ? errors["name"] : ""}`}</p>
          <Label htmlFor="semail" className="mt-4">Email Address<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="semail" name="semail" className={`mt-1.5 ${!!!errors["email"].length ? "" : "border-red-800 dark:border-red-800"}`} type="email" onFocus={() => removeError("email")} />
          <p className="mt-1.5 text-sm/[1.5] font-medium text-red-800">{`${errors["email"].length ? errors["email"] : ""}`}</p>
          <Label htmlFor="spass" className="mt-4">Password<span className="text-teal-700 dark:text-nd-100">&nbsp;*</span></Label>
          <Input id="spass" name="spass" className={`mt-1.5 ${!!!errors["password"].length ? "" : "border-red-800 dark:border-red-800"}`} type="password" onFocus={() => removeError("password")} />
          <p className="mt-1.5 text-sm/[1.5] font-medium text-red-800">{`${errors["password"].length ? errors["password"] : ""}`}</p>
          <button className="w-full mt-4 px-4 py-3 border-2 bg-teal-700 text-neutral text-base/[1.4] font-semibold rounded-lg cursor-pointer hover:bg-teal-800 focus:shadow-inputl dark:focus:shadow-inputd">Create Account</button>
          <p className="text-nl-800 mt-8 text-center text-sm font-medium dark:text-nd-100">Already have an account? <Link href={"/login"} className="font-semibold leading-[1.4] text-nl-900 hover:text-teal-700 dark:text-neutral">Log In</Link></p>
        </form>
      </main>
    </>
  );
}