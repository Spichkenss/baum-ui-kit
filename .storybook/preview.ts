import type {Preview} from "@storybook/react";
import "../src/styles/index.scss"

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                {name: 'Dark', value: '#1b1c1d'},
                {name: 'Light', value: '#FFF'},
            ],
            default: 'Dark',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
