
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ResponseDisplayProps {
  content: string;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ content }) => {

  return (
    <article className="prose prose-invert max-w-none p-4 sm:p-6 lg:p-10 bg-gray-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-yellow-400 mx-2 sm:mx-0 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 animate-slide-up relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="relative z-10">
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({...props}) => <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-yellow-400 border-b-2 border-yellow-400 pb-2 break-words" {...props} />,
          h2: ({...props}) => <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b border-gray-700 text-white break-words" {...props} />,
          h3: ({...props}) => <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3 text-yellow-300 break-words" {...props} />,
          p: ({...props}) => <p className="leading-relaxed mb-3 sm:mb-4 text-gray-100 text-base sm:text-lg lg:text-xl break-words" {...props} />,
          strong: ({...props}) => <strong className="font-bold text-yellow-400 break-words" {...props} />,
          ul: ({...props}) => <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-2 sm:space-y-3 text-gray-100" {...props} />,
          ol: ({...props}) => <ol className="list-decimal pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-2 sm:space-y-3 text-gray-100" {...props} />,
          li: ({...props}) => <li className="pl-1 sm:pl-2 text-base sm:text-lg lg:text-xl leading-relaxed break-words" {...props} />,
          blockquote: ({...props}) => <blockquote className="border-l-4 border-yellow-400 pl-3 sm:pl-6 italic text-yellow-200 my-4 sm:my-6 bg-gray-800 py-3 sm:py-4 rounded-r-lg text-base sm:text-lg" {...props} />,
          code: ({ className, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
                <div className="bg-black rounded-lg my-4 sm:my-6 border border-gray-700 overflow-hidden">
                  <div className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-gray-800 text-yellow-400 font-mono font-bold">{match[1]}</div>
                  <pre className="p-3 sm:p-4 overflow-x-auto"><code className="font-mono text-xs sm:text-sm lg:text-base text-green-400 break-all" {...props} /></pre>
                </div>
            ) : (
              <code className="bg-gray-800 text-yellow-400 font-mono rounded px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold text-sm sm:text-base break-all" {...props} />
            );
          },
          table: ({...props}) => (
            <div className="overflow-x-auto my-4 sm:my-6">
              <table className="min-w-full border border-gray-700 rounded-lg" {...props} />
            </div>
          ),
          th: ({...props}) => <th className="border border-gray-700 px-3 sm:px-4 py-2 bg-gray-800 text-yellow-400 font-bold text-sm sm:text-base" {...props} />,
          td: ({...props}) => <td className="border border-gray-700 px-3 sm:px-4 py-2 text-gray-100 text-sm sm:text-base break-words" {...props} />,
        }}
      >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ResponseDisplay;
