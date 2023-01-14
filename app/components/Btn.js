'use client'
import React, { useState } from 'react';

function Btn() {
  const [likes, setLikes] = useState(0);

  return (
    <button className='flex px-9 py-1 justify-center w-24 border-b-4 rounded-md bg-gray-400 text-gray-200 border-gray-500 hover:scale-95' onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
}

export default Btn;