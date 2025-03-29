"use client";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

const LogOutButton = () => {
  return (
    <>
      <Button
        className="btn-disconnect px-6 py-3"
        variant="destructive"
        size="lg"
        onClick={() => signOut()}
      >
        <LogOut size={24} />
        Logout
      </Button>
    </>
  );
};

export default LogOutButton;
