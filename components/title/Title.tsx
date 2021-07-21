import React, { memo } from 'react';

const Title = memo(({ context }: { context: string }) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="main-title text-5xl text-gray-100 mb-1 mt-6 mr-6">
        🐈 {context}
      </h1>
      <h5 className="text-blue-300 mb-8 font-bold italic">With Next.js</h5>
    </div>
  );
});

Title.displayName = 'Title';

export default Title;
