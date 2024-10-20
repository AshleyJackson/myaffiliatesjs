declare enum transaction_type {
    manual = 11,
    administrative = 4
}
declare enum transaction_status {
    pending = "Pending",
    approved = "Approved",
    paid = "Paid",
    denied = "Denied",
    dead = "Dead",
    rejected = "Rejected"
}
type create_transaction_output = {
    transaction_id: number;
} | {
    errors: string;
};
export declare function create_transaction(user_id: string, transaction_type: transaction_type, transaction_date: string, display_date: string, amount: number, converted_amount: number, visbility: boolean, status: transaction_status, assignee?: number, wallet?: string, reference?: string, notes?: string, comment?: string): Promise<create_transaction_output>;
export {};
