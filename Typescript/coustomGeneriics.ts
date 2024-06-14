interface customInterface<T1, T2> {
    properties: T1,
    moreProperties: T2
}

const obj: customInterface<number, string> = {
    properties: 10,
    moreProperties: "10"
}