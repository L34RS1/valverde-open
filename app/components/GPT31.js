import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { MagicWandIcon, ArrowLeftIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import axios from 'axios';
import Anim from './Animation';

  const API_KEY= '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';

  const GPT31 = () => {

  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [isTabEnabled, setIsTabEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  let TextTab=['', 'Result'];

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTabs = () =>{
    if(responseText===''){
    setIsTabEnabled(prevState => !prevState);
    }
  }

  const handleBack = () =>{
    setActiveTab('tab1');
    setResponseText('');
    setInputText('');
    setIsTabEnabled(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputText){
      console.log('empty');
    }
    else{
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
    handleTabs();
    setActiveTab('tab2');
  }
  };

  return (
    <div className='flex justify-center items-start pt-12 '>
<Tabs.Root
    className="rounded-xl flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    value={activeTab}
    onValueChange={(value) => setActiveTab(value)}
  >
    <Tabs.Content
      className="grow p-5 bg-white rounded-xl outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <form onSubmit={handleSubmit}>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] font-semibold leading-none mb-2.5 text-violet11 block" htmlFor="username">
          Twitter Username
        </label>
        <TwitterLogoIcon className='absolute text-violet-600 translate-y-[34px] translate-x-[10px]'/>
        <input
          className=" pl-8 grow shrink-0 rounded px-2.5 text-[16px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="username"
          placeholder="@username"
          value={inputText} 
          onChange={handleInputChange}
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-violet11 text-white hover:bg-violet12 focus:shadow-[0_0_0_2px] focus:shadow-violet11 outline-none cursor-default" type='submit'>
        <p className='pr-2'>Do magic! </p><MagicWandIcon/>
        </button>
      </div>
      </form>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-xl outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p className="mb-2 font-semibold text-violet11 text-[15px] leading-normal text-center">
      {responseText}
      </p>
      <Anim/>
      <div className="flex w-full justify-between mt-5">
      <button onClick={handleBack} className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-violet4 text-violet11 hover:bg-violet5 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default">
      <ArrowLeftIcon/><p className='pl-2'>Back</p>
        </button>
        <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-violet11 text-white hover:bg-violet12 focus:shadow-[0_0_0_2px] focus:shadow-violet11 outline-none cursor-default">
          <p className='pr-2'>Try again</p><MagicWandIcon/>
        </button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
  </div>
);
}
export default GPT31;