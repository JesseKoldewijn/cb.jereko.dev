export interface CB_Currency {
  id: string;
  name: string;
  min_size: string;
  status: string;
  message: string;
  max_precision: string;
  convertible_to: string[];
  details: {
    type: string;
    symbol: string | null;
    network_confirmations: number;
    sort_order: number;
    crypto_address_link: string;
    crypto_transaction_link: string;
    push_payment_methods: string[];
    group_types: string[];
    display_name: string | null;
    processing_time_seconds: number | null;
    min_withdrawal_amount: number;
    max_withdrawal_amount: number;
  };
  default_network: string;
  supported_networks: {
    id: string;
    name: string;
    status: string;
    contract_address: string;
    crypto_address_link: string;
    crypto_transaction_link: string;
    min_withdrawal_amount: number;
    max_withdrawal_amount: number;
    network_confirmations: number;
    processing_time_seconds: number | null;
  }[];
  display_name: string;
}

export const cbPlaceholder: CB_Currency = {
  id: "placeholder",
  name: "placeholder",
  min_size: "placeholder",
  status: "placeholder",
  message: "placeholder",
  max_precision: "placeholder",
  convertible_to: ["placeholder"],
  details: {
    type: "placeholder",
    symbol: "placeholder",
    network_confirmations: -69,
    sort_order: -69,
    crypto_address_link: "placeholder",
    crypto_transaction_link: "placeholder",
    push_payment_methods: ["placeholder"],
    group_types: ["placeholder"],
    display_name: "placeholder",
    processing_time_seconds: -69,
    min_withdrawal_amount: -69,
    max_withdrawal_amount: -69,
  },
  default_network: "placeholder",
  supported_networks: [
    {
      id: "placeholder",
      name: "placeholder",
      status: "placeholder",
      contract_address: "placeholder",
      crypto_address_link: "placeholder",
      crypto_transaction_link: "placeholder",
      min_withdrawal_amount: -69,
      max_withdrawal_amount: -69,
      network_confirmations: -69,
      processing_time_seconds: -69,
    },
  ],
  display_name: "placeholder",
};
