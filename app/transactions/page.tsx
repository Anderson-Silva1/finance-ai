import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_colunms";

const TransactionsPage = async () => {
  // Acessar meu banco de dados
  const transactions = await db.transaction.findMany({});

  //   console.log(transactions);

  return (
    <div className="space-y-6 p-6">
      {/* TItulo */}
      <header className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação <ArrowDownUpIcon />
        </Button>
      </header>

      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
