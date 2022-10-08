import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import { feedbackTypes } from "..";

import {
	FeedbackContentStep,
	FeedbackContentStepProps,
} from "./FeedbackContentStep";

export default {
	title: "Widget UI/FeedbackContentStep",
	component: FeedbackContentStep,
	args: {
		feedbackType: "BUG",
	},
	parameters: {
		msw: {
			handlers: [rest.post("/feedbacks", (req, res) => res())],
		},
	},
	argTypes: {
		feedbackType: {
			options: Object.keys(feedbackTypes),
			control: "inline-radio",
		},
	},
	decorators: [
		(Story) => {
			return (
				<Popover>
					<div className="bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96">
						<Popover.Panel static>{Story()}</Popover.Panel>
					</div>
				</Popover>
			);
		},
	],
} as Meta<FeedbackContentStepProps>;

export const Bug: StoryObj<FeedbackContentStepProps> = {
	args: {
		feedbackType: "BUG",
	},
};

export const Idea: StoryObj<FeedbackContentStepProps> = {
	args: {
		feedbackType: "IDEA",
	},
};

export const Other: StoryObj<FeedbackContentStepProps> = {
	args: {
		feedbackType: "OTHER",
	},
};
