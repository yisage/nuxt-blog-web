export type UnPromise<T> = T extends Promise<infer R> ? R : T
export type UnRetutnPromiseType<T extends (...args: any) => any> = UnPromise<ReturnType<T>> 