import { useState } from 'react';
import axios from 'axios';
const API_KEY= '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';
const GPT3 = () => {
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

<div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div className="relative py-3 sm:w-96 mx-auto text-center">
    <div className="mt-4 bg-white shadow-sm rounded-lg text-left">
      <div className="h-2 bg-purple-400 rounded-t-md"></div>
      <div className="px-8 py-6 bg-white rounded-b-md">
      {responseText && (
          <div className="p-8 bg-white text-center">
            <p className='text-gray-400 bg-white text-sm font-regular'>I recommend u this book:</p>
            <p className='text-purple-400 bg-white text-lg font-bold'>{responseText}</p>
          </div>
        )}
        <form className='bg-white' onSubmit={handleSubmit}>
          <input type="text" value={inputText} onChange={handleInputChange} placeholder="Twitter Username" className=" bg-white border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
          <div className="flex justify-end mt-4 bg-white">
            <button type="submit" className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Next</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
);
}
export default GPT3;