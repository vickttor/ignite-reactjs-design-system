import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@vickttorugo-ignite-ui/react";
import { ArrowRight } from "@phosphor-icons/react";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: (
      <>
        <span>Next Step</span>
        <ArrowRight />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    disabled: true,
  },
};
