export interface Channels {
    data: Data[];
}

interface Data {
    id: string;
    type: string;
    attributes: Attributes;
}

interface Attributes {
    title: string;
    isPrivate: boolean;
    isSubaffiliateChannel: boolean;
    billingDisplay: string;
    isDefaultChannel: boolean;
    isVisible: boolean;
    defaultSetupId: number;
    decommissionedDate: null;
}


