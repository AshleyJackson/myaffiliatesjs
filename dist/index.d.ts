interface TOKENSChild {
    TOKEN: Token;
}

interface Token {
    PREFIX: string;
    USER_ID: string;
    SETUP_ID: string;
    PLAN_ID: string;
    MEDIA_ID: string;
    BANNER_ID: string;
    CAMPAIGN_ID: string;
    AUTHCODE: string;
    REFERRING_URL: string;
    IP_ADDRESS: string;
    COUNTRY: string;
    TIME_STAMP: Date;
    children: TOKENChild[];
}

interface TOKENChild {
    // USER?: User
    SETUP?: Setup;
}

interface Setup {
    SITE_ID: string;
    SITE_NAME: string;
    SITE_URL: string;
    OPERATION_ID: string;
    PLAN_ID: string;
    OBJECT_ID: string;
    OBJECT_DESCRIPTION: string;
    children: SETUPChild[];
}

interface SETUPChild {
    OBJECT_DATA: ObjectData;
}

interface ObjectData {
    children: OBJECTDATAChild[];
}

interface OBJECTDATAChild {
    DATA: Data;
}

interface Data {
    VALUE: string;
}

interface UserStatus {
  user: any;
}

/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 *
 * @description This allows you to specify a token and decode them and output the details pertaining to the details within the token.
 * @param baseUrl
 * @param token
 * @param username
 * @param password
 * @returns <TOKENSChild[]>
 */
declare function decode_token(baseUrl: string, token: string, username: string, password: string): Promise<TOKENSChild[]>;
/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const token = "";
 *
 * @description This feed outputs the status of a selected list of users. It can also optionally update the status of those users.
 * @param baseUrl
 * @param token
 * @param username
 * @param password
 * @returns <UserStatus>
 */
declare function get_user_status(baseUrl: string, username: string, password: string, user_id: number): Promise<UserStatus>;
/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the campaigns that were created within that date range.
 * @param baseUrl
 * @param username
 * @param password
 * @param date_from
 * @param date_to
 * @returns <any>
 */
declare function view_campaigns(baseUrl: string, username: string, password: string, date_from: Date, date_to: Date): Promise<any>;
/**
 * @example
 * const baseUrl = "";
 * const username = "";
 * const password = "";
 * const USER_ID = "";
 * const date_from = new Date(2022, 0, 1);
 * const date_to = new Date(2022, 11, 31);
 *
 * @description This allows you to specify a date range and get all the affiliate earnings that were generated within that date range.
 * @param baseUrl
 * @param username
 * @param password
 * @param USER_ID
 * @param date_from
 * @param date_to
 * @returns Promise<any>
 */
declare function get_affiliate_earnings(baseUrl: string, username: string, password: string, USER_ID: number, date_from: Date, date_to: Date): Promise<any>;

export { decode_token, get_affiliate_earnings, get_user_status, view_campaigns };
