"use client";
import { Avatar, AvatarBorderVariants, AvatarVariants} from "@/components/ui/avatar";
import { Select, SelectContent,SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateUsers } from "@/lib/data";
import { useState } from "react";

const users = generateUsers(50);

export default function Home() {
  const [size,setSize] = useState<AvatarVariants["size"]>('default')
  const [border,setBorder] = useState<AvatarBorderVariants["border"]>('default')

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-10 bg-purple-500">
      <div className="my-24 flex gap-12 w-full">
        <Select onValueChange={(size)=>setSize(size as AvatarVariants["size"])}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Size"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="lg">Larger</SelectItem>
            <SelectItem value="xl">Xstra</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(border)=>setBorder(border as  AvatarBorderVariants["border"])}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Border"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="nome">None</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex flex-wrap [&>div]:-ml-2 ml-2 [&>div]:mt-2 -mt-2">
        {users.map((user,i)=>(
          <Avatar 
            key={i}
            imgUrl={user.imgUrl}
            userName={user.userName}
            defaultText={user.defaultText}
            size={size}
            border={border}
          />

        ))}
      </div>
      
      
      

    </main>
  );
}
