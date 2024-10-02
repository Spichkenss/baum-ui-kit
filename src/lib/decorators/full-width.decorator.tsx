import {Decorator} from "@storybook/react";

export const FullWidthDecorator: Decorator = (Story) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Story />
        </div>
    );
};