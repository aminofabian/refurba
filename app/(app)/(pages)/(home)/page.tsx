"use client"

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
    const categories = useQuery(trpc.categories.getMany.queryOptions());
    return (
        <div>
          <p>is loading: {categories.isLoading ? "true" : "false"}</p>
            {JSON.stringify(categories.data, null, 2)}
        </div>
    )
}








// import { getQueryClient, trpc } from "@/trpc/server";


//  export default async function Home() {

//   const queryClient = getQueryClient();
//   const categories = await queryClient.fetchQuery(trpc.categories.getMany.queryOptions());

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <pre>{JSON.stringify(categories)}</pre>
//     </div>
//   )
// }

