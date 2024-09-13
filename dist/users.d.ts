export declare function get_user(date_from: Date, date_to: Date): Promise<User>;
export interface User {
    id: string;
    username: string;
    parent_id: string;
    parent_username: string;
    admin_id?: string;
    admin_username?: string;
    email: string;
    country?: string;
    status: string;
    join_date: Date;
    currency: string;
    balance: string;
    payment_type: string;
    minimum_payment: string;
    language: string;
    user_comments?: {
        comment: string;
        date: Date;
    };
    user_tags?: string;
    subscription_variables: {
        name: string;
        value: string;
        plan_id: string;
        customer_group: string;
        date: Date;
    }[];
}
