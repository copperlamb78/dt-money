import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumaryContainer, SummaryCard } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {

    const {transactions} = useContext(TransactionsContext)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price;
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price;
                acc.total -= transaction.price
            }
            
            return acc;
        },
        {
            income: 0,
            outcome: 0, 
            total: 0
        }
    )

     return (
        <SumaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SumaryContainer>
     )
}