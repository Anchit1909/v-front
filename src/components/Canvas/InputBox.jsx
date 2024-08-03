import React from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";

function InputBox({ label, type = "text", className = "", ...props }) {
  const isFile = type.toLocaleLowerCase() === "file";
  console.log(isFile);

  return (
    <div className="w-full">
      {label && <Label>{label}</Label>}
      {isFile ? <Input type={type}></Input> : <Input {...props}></Input>}
    </div>
  );
}

export default InputBox;
