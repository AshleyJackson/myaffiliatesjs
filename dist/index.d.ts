declare function decode_token(token: string): Promise<Token>;
interface Token {
    prefix: string;
    user_id: string;
    setup_id: string;
    media_id: string;
    banner_id: string;
    campaign_id: string;
    authcode: string;
    referring_url: string;
    ip_address: string;
    country: string;
    time_stamp: Date;
    user?: TokenUser;
    setup?: TokenSetup;
}
interface TokenUser {
    user_name: string;
    status: string;
}
interface TokenSetup {
    site_id: string;
    site_name: string;
    site_url: string;
    operation_id: string;
    plan_id: string;
    object_id: string;
    object_description: string;
    object_url: string;
}

declare function get_user(date_from: Date, date_to: Date): Promise<User>;
interface User {
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

declare function validate_email(email: string): Promise<string>;

declare const _default: {
    decode_token: typeof decode_token;
    get_user: typeof get_user;
    validate_email: typeof validate_email;
};

export { _default as default };
