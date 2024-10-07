type media = {
    id: number;
    media_type_id: number;
    media_type_name: string;
    title: string;
    creative: string;
    active: string;
    media_source: string;
    preview_image: string;
    description: string;
    created_on: string;
    last_accessed: string;
    properties: {
        width: number;
        height: number;
    };
    tags: {
        tag: {
            id: number;
            name: string;
            type: string;
        };
    }[];
};
export declare function get_media(id: number): Promise<media>;
export {};
