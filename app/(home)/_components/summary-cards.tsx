// import {
//   PiggyBankIcon,
//   TrendingDownIcon,
//   TrendingUpIcon,
//   WalletIcon,
// } from "lucide-react";
// import SummeryCard from "./Summery-card";
// import { db } from "@/app/_lib/prisma";

// // interface SummaryCardsProps {
// //   month: string;
// // }

// const SummaryCards = async () => {
//   // const where = {
//   //   date: {
//   //     gte: new Date(`2024-${month}-01`),
//   //     lt: new Date(`2024-${month}-31`),
//   //   },
//   // };

//   const depositsTotal = Number(
//     (
//       await db.transaction.aggregate({
//         where: { type: "DEPOSIT" },
//         _sum: { amount: true },
//       })
//     )._sum?.amount,
//   );
//   const investimentsTotal = Number(
//     (
//       await db.transaction.aggregate({
//         where: { type: "INVESTMENT" },
//         _sum: { amount: true },
//       })
//     )._sum?.amount,
//   );
//   const expensesTotal = Number(
//     (
//       await db.transaction.aggregate({
//         where: { type: "EXPENSE" },
//         _sum: { amount: true },
//       })
//     )._sum?.amount,
//   );
//   const balance = depositsTotal - investimentsTotal - expensesTotal;

//   return (
//     <div className="space-y-6">
//       <SummeryCard
//         icon={<WalletIcon size={16} />}
//         amount={balance}
//         title="Saldo"
//         size="large"
//       />

//       <div className="grid grid-cols-3 gap-6">
//         <SummeryCard
//           amount={investimentsTotal}
//           icon={<PiggyBankIcon size={14} />}
//           title="Investido"
//         />
//         <SummeryCard
//           amount={depositsTotal}
//           icon={<TrendingUpIcon size={14} className="text-primary" />}
//           title="Receita"
//         />
//         <SummeryCard
//           amount={expensesTotal}
//           icon={<TrendingDownIcon size={14} className="text-red-500" />}
//           title="Despesa"
//         />
//       </div>
//     </div>
//   );
// };

// export default SummaryCards;

import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummeryCard from "./Summery-card";
import { db } from "@/app/_lib/prisma";

const SummaryCards = async () => {
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const investimentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const balance = depositsTotal - investimentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummeryCard
        icon={<WalletIcon size={16} />}
        amount={balance}
        title="Saldo"
        size="large"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <SummeryCard
          amount={investimentsTotal}
          icon={<PiggyBankIcon size={14} />}
          title="Investido"
        />
        <SummeryCard
          amount={depositsTotal}
          icon={<TrendingUpIcon size={14} className="text-primary" />}
          title="Receita"
        />
        <SummeryCard
          amount={expensesTotal}
          icon={<TrendingDownIcon size={14} className="text-red-500" />}
          title="Despesa"
        />
      </div>
    </div>
  );
};

export default SummaryCards;
