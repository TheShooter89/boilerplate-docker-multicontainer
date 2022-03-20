declare interface Note {
    id: string | number;
    title: string;
    tags: Tag[];
    body: string;
}

declare interface Tag {
    id: string | number;
    name: string;
}
