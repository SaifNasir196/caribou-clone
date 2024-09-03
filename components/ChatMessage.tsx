import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface ChatMessageProps {
  sender: {
    name: string;
    avatarUrl: string;
  };
  recipient?: {
    name: string;
  };
  message: string;
  isReply?: boolean;
  textsm?: boolean;
}

export default function ChatMessage({ sender, recipient, message, isReply = false, textsm = false }: ChatMessageProps) {
  return (
    <div className={`flex items-start mb-4 ${isReply && 'ml-16'}  bg-white rounded-2xl border shadow-md relative font-sans`}>
      <Badge className={`text-base font-normal bg-white rounded-full p-1 h-8 absolute -top-4 ${textsm && 'text-sm'} ${isReply ? 'right-4' : 'left-4'}`}>
        <Avatar className="h-6 w-6">
          <AvatarImage src={sender.avatarUrl} />
        </Avatar>
        <span className="text-indigo-600 px-3">{sender.name}</span>
      </Badge>
      <div className={`${textsm ? 'p-3 pt-5' : 'p-4 pt-6'}`}>
        <span className={`${textsm ? 'text-sm' : 'text-lg'}  text-gray-800`}>{isReply ? 'Hi ' : 'Hey '}</span>
        {recipient && (
          <Badge className={`${textsm ? 'text-sm py-0 px-1 ' : "text-base py-0 px-2"} font-light  bg-indigo-50 text-blue-500 rounded-full`}>
            @{recipient.name}
          </Badge>
        )}
        <span className={`${textsm ? 'text-sm' : 'text-lg'}  text-gray-800`}> {message}</span>
      </div>
    </div>
  );
}