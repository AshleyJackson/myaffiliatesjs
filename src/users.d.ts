export interface Users {
    USERS: USERSClass;
}

interface USERSClass {
    children: User[];
}

interface User {
    USER_HASH_ID:           string;
    USERNAME:               string;
    PARENT_ID:              string;
    PARENT_USERNAME:        string;
    ADMIN_ID:               string;
    ADMIN_USERNAME:         string;
    EMAIL:                  string;
    COUNTRY:                string;
    STATUS:                 "Accepted" | "Denied" | "New" | "Verified";
    JOIN_DATE:              Date;
    CURRENCY:               string;
    BALANCE:                string;
    PAYMENT_TYPE:           string;
    MINIMUM_PAYMENT:        string;
    LANGUAGE:               string;
    USER_COMMENTS:          string;
    USER_TAGS:              string;
    USER_CAMPAIGNS:         string;
    USER_VARIABLES:         string;
    USER_DETAILS:           string;
    SUBSCRIPTIONS:          string;
    SUBSCRIPTION_VARIABLES: string;
    USER_PAYMENT_DETAILS:   string;
    _ID:                    string;
}
