import { ActionFn, Context, Event, BlockEvent } from "@tenderly/actions";

export const blockHelloWorldFn: ActionFn = async (
	context: Context,
	event: Event
) => {
	let blockEvent = event as BlockEvent;
	console.log("Block number is: ", blockEvent.blockNumber);
};
