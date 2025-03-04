// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import NavBar from "../_components/navbar";
// import SummaryCards from "./_components/summary-cards";
// import TimeSelect from "./_components/time-select";

// export default async function Home({ searchParams: { month } }) {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/login");
//   }

//   return (
//     <>
//       <NavBar />
//       <div className="space-y-6 p-6">
//         <div className="flex justify-between">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <TimeSelect />
//         </div>
//         <SummaryCards month={month} />
//       </div>
//     </>
//   );
// }

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";

export default async function Home({ searchParams: { month } }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <SummaryCards month={month} />
      </div>
    </>
  );
}
