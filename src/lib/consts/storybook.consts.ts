import {ArgTypes} from "@storybook/react";
import {PrimitiveProps} from "../../components/PrimitiveComponent";

export const disabledArg = {
    table: {
        disable: true,
    }
}

export const primitiveArgs: ArgTypes<PrimitiveProps> = {
    fullWidth: {
        control: 'boolean',
    }
}