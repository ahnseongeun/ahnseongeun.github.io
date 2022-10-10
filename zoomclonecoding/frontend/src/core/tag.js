import { Node } from "../types/node.js";

const tag = (HTMLElementTagNameMap) => 
    (props = {}, children = {}) => {
        return { type, props: props || {}, children };
    };

export const div = tag("div");
export const p = tag("p");
export const span = tag("span");
export const button = tag("button");
export const input = tag("input");