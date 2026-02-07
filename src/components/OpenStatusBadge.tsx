"use client";

import React from "react";
import { getOpeningStatus, formatHour } from "@/lib/utils";
import { cn } from "@/lib/utils";

const OpenStatusBadge = () => {
  const [status, setStatus] = React.useState(getOpeningStatus());

  React.useEffect(() => {
    // Update status every minute to keep it fresh
    const interval = setInterval(() => {
      setStatus(getOpeningStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const { isOpen, closesAt, opensAt } = status;

  const badgeClasses = cn(
    "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center",
    {
      "bg-green-100 text-green-800": isOpen,
      "bg-red-100 text-red-800": !isOpen,
    }
  );

  const dotClasses = cn("w-2 h-2 rounded-full mr-2", {
    "bg-green-500": isOpen,
    "bg-red-500": !isOpen,
  });

  return (
    <div className={badgeClasses}>
      <span className={dotClasses} />
      {isOpen
        ? `Ouvert · Ferme à ${formatHour(closesAt)}`
        : opensAt
        ? `Fermé · Ouvre à ${formatHour(opensAt)}`
        : "Fermé aujourd'hui"}
    </div>
  );
};

export default OpenStatusBadge;
