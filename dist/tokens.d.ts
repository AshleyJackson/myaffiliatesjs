export declare function decode_token(token: string): Promise<Token>;
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
export {};
