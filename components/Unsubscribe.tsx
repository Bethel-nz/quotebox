"use client"

import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { removeUserFromMailList } from "@/lib/actions";
import { Loader } from "lucide-react";

const Unsubscribe = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleUnsubscribe = async () => {
    setLoading(true);
    try {
      await removeUserFromMailList(token || "");
      toast({
        variant: "successful",
        title: "Successful.",
        description: "You have been removed from the mail list.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <p className="font-bold text-base">
        Are you sure you want to unsubscribe?
      </p>

      <Button
        type="submit"
        onClick={handleUnsubscribe}
        className="font-semibold w-full md:w-2/5"
      >
        {loading && <Loader color="black" className="animate-spin mr-2" />}
        {loading ? "Unsubscribing..." : "Yes, Unsubscribe me"}
      </Button>

      <Button
        type="submit"
        variant="outline"
        className="w-full md:w-2/5"
        onClick={redirect("/")}
      >
        No, Keep me subscribed
      </Button>
    </div>
  );
};

export default Unsubscribe;
