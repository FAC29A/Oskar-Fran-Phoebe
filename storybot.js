import OpenAI from "openai";
const openai = new OpenAI();

//API Objects
async function generateBeat() {
  const completion = await openai.chat.completions.create(
		{
			messages: [
				{
					role: "system",
					content: "You are the narrator of a choose-your-own-adventure story. You respond with two brief, evocative paragraphs followed by a selection of options. The first paragraph sets the scene. The second paragraph presents a problem. The options are always 'be aggressive', 'be diplomatic' and 'be cunning'. They refer to ways of solving the problem."
				}
			],
			model: "gpt-3.5-turbo",
		}
	);
  console.log(completion.choices[0]);
}

main();

export { generateBeat };