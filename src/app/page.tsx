import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-300 h-screen ">
      
      <div className="flex bg-cyan-400 p-4">
        <ul className="hidden md:flex items-center text-xl text-black gap-16 mx-auto">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">Help</li>
          <li className="hover:underline">Career</li>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden ml-auto mr-4">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <ul className="md:flex flex-col gap-4 text-xl text-black p-4">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Contact</li>
              <li className="hover:underline">Help</li>
              <li className="hover:underline">Career</li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <div className="text-center text-xl p-8">
        <h1 className="font-bold text-3xl">HELLO WORLD!</h1>
        <p className="mt-4 font-bold text-blue-700">Practicing Shadcn Components</p>
        <p className="mt-7 hover:underline">
          The <strong>Button</strong> component is a reusable and customizable element
          that can be styled and used across your application for various actions.
        </p>
        <p className="mt-7 hover:underline">
          The <strong>Sheet</strong> component is a sliding panel that is great for creating sidebars
          or menus in your application, ensuring a clean and modern design.
        </p>
        <Button className="mt-6">Submit</Button>
        <div className="mt-8 text-gray-500">.........</div>
      </div>
    </div>
  );
}
