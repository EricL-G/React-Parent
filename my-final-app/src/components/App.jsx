import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function App() {
    const handleClick = () => {
    alert("Submitted!");
  };
  return (
    <form className="flex max-w-md flex-col gap-4 justify-center items-center text-center m-8 ml-30 p-8 border-2 border-gray-300 rounded-lg shadow-lg">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button 
      type="button" 
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded border-2 border-red-700 transition-all duration-300 hover:scale-105 transition-transform duration-300"
      onClick={handleClick}>
        Submit
      </Button>
    </form>
  );
}