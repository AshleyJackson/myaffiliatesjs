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

declare function decode_token(baseUrl: string, token: string, username: string, password: string): Promise<TOKENSChild[]>;

export { decode_token };
