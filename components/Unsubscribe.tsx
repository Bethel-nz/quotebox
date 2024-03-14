"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { removeUserFromMailList } from "@/lib/actions";
import { Loader } from "lucide-react";
import Link from "next/link";

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
    <div className="flex flex-col space-y-6 items-center justify-center min-w-fit">
      <p className="font-bold text-base">
        Are you sure you want to unsubscribe?
      </p>

      <Button
        type="submit"
        onClick={handleUnsubscribe}
        className="font-semibold w-full"
      >
        {loading && <Loader color="black" className="animate-spin mr-2" />}
        {loading ? "Unsubscribing..." : "Yes, Unsubscribe me"}
      </Button>

      <Button variant="outline" className="w-full">
        <Link href="/">No, Keep me subscribed</Link>
      </Button>
    </div>
  );
};

export default Unsubscribe;
