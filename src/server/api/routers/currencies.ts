import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { type CB_Currency } from "~/types/cb";

export const currenciesRouter = createTRPCRouter({
  getCurrencies: publicProcedure.query(async () => {
    const response = await fetch(
      "https://api.exchange.coinbase.com/currencies",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = (await response.json()) as CB_Currency[];

    return {
      data,
    };
  }),
});
