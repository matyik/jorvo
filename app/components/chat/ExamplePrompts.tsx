import React from 'react';

const EXAMPLE_PROMPTS = [
  {
    text: "Create a 30-second promotional video with bold, animated text saying 'Unleash Your Creativity' on a vibrant, colorful background. Use smooth transitions and upbeat music.",
  },
  {
    text: "Generate a 15-second video featuring the quote 'Believe in yourself' with cinematic text effects, calming background music, and a looping video of a sunrise behind the text.",
  },
  {
    text: "Make a 20-second video ad for a new fitness app. Show text highlights like 'Track Your Progress' and 'Achieve Your Goals' with energetic music and quick transitions.",
  },
  {
    text: 'Produce a 45-second explainer video introducing a virtual credit card app. Include animated text, icons, and voice-over narration explaining key features.',
  },
  {
    text: "Create a 10-second countdown timer video with futuristic digital numbers, a pulse effect for each second, and a dramatic sound effect at '0'.",
  },
];

// export function ExamplePrompts(sendMessage?: { (event: React.UIEvent, messageInput?: string): void | undefined }) {
//   return (
//     <div id="examples" className="relative flex flex-col gap-9 w-full max-w-3xl mx-auto flex justify-center mt-6">
//       <div
//         className="flex flex-wrap justify-center gap-2"
//         style={{
//           animation: '.25s ease-out 0s 1 _fade-and-move-in_g2ptj_1 forwards',
//         }}
//       >
//         {EXAMPLE_PROMPTS.map((examplePrompt, index: number) => {
//           return (
//             <button
//               key={index}
//               onClick={(event) => {
//                 sendMessage?.(event, examplePrompt.text);
//               }}
//               className="border border-bolt-elements-borderColor rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary px-3 py-1 text-xs transition-theme"
//             >
//               {examplePrompt.text}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

interface ExamplePromptsProps {
  sendMessage?: (event: React.UIEvent, messageInput?: string) => void;
}

export function ExamplePrompts({ sendMessage }: ExamplePromptsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % EXAMPLE_PROMPTS.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="examples" className="relative flex flex-col gap-9 w-full max-w-3xl mx-auto justify-center mt-6">
      <div className="flex flex-wrap justify-center gap-2 items-center">
        <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
          <button
            onClick={(event) => sendMessage?.(event, EXAMPLE_PROMPTS[currentIndex].text)}
            className="flex items-center gap-3 border border-bolt-elements-borderColor rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary p-3 pr-5 text-xs transition-theme"
          >
            <span>{EXAMPLE_PROMPTS[currentIndex].text}</span>
            <span className="text-bolt-elements-textSecondary text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
