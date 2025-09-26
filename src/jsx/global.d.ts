//@ts-ignore
declare var JSON: {
    stringify(object: object): string;
    parse(string: string): object;
};

interface ActionDescriptor {
    count: number;
}
