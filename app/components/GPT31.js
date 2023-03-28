import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import axios from 'axios';

const API_KEY= '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';
const GPT31 = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a request to the OpenAI API with the user's message
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      prompt: `Recommend me a book based on my twitter account: @ "${inputText}". Please just mention the name of the book and nothing else.`,
      max_tokens: 50,
      n: 1,
      stop: '.',
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    // Update the response text with the OpenAI API's response
    setResponseText(response.data.choices[0].text);
  };

  return (
    <div className='h-screen flex justify-center items-start pt-12'>
<Tabs.Root
    className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab1"
      >
        Twitter
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab2"
      >
        Result
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <form onSubmit={handleSubmit}>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">
          Twitter Username
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="username"
          placeholder="@username"
          value={inputText} 
          onChange={handleInputChange}
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-violet4 text-violet11 hover:bg-violet5 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default" type='submit'>
          Do magic!
        </button>
      </div>
      </form>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
      {responseText}
      </p>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-violet4 text-violet11 hover:bg-violet5 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default">
          Go Back!
        </button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
);
}
export default GPT31;