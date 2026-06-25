import { Bot, MessageCircle, Send, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { sendAiMessage } from "../../services/ai.service";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hello! I'm Jawad AI assistant. I can help you learn about his work, projects, and services. How can I assist you today?",
  },
];

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[82%] items-center gap-2 rounded-2xl rounded-bl-sm bg-[#111820] px-4 py-3 text-[#E5E7EB]">
        <span className="text-[13px] font-semibold sm:text-[14px]">
          Thinking
        </span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9D22F2] [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9D22F2] [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9D22F2]" />
        </span>
      </div>
    </div>
  );
}

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messageIdRef = useRef(2);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const createMessage = (role: ChatMessage["role"], text: string) => {
    const message: ChatMessage = {
      id: messageIdRef.current,
      role,
      text,
    };

    messageIdRef.current += 1;

    return message;
  };

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanMessage = inputValue.trim();

    if (!cleanMessage || isLoading) {
      return;
    }

    const userMessage = createMessage("user", cleanMessage);

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiReply = await sendAiMessage(cleanMessage);
      const assistantMessage = createMessage("assistant", aiReply);

      setMessages((currentMessages) => [...currentMessages, assistantMessage]);
    } catch (error) {
      const errorMessage = createMessage(
        "assistant",
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setMessages((currentMessages) => [...currentMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-[#05070B]/60 backdrop-blur-[7px]"
            onClick={handleCloseChat}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-5 right-4 z-[70] w-[calc(100vw-32px)] max-w-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#17202A] shadow-[0_28px_85px_rgba(0,0,0,0.58)] sm:bottom-8 sm:right-8"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#7C1FE8] via-[#A020F0] to-[#9D22F2] px-4 py-4 text-white">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              <div className="relative flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                    <Bot size={24} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[17px] font-extrabold leading-none text-white">
                      Jawad&apos;s Assistant
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      <p className="truncate text-[12px] font-bold leading-none text-white/90">
                        Online • Ask me anything!
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCloseChat}
                  aria-label="Close AI assistant"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/15"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="custom-ai-scrollbar h-[345px] space-y-4 overflow-y-auto bg-[#17202A] px-4 py-4 sm:h-[365px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[84%] whitespace-pre-line rounded-2xl px-4 py-3 text-[13px] font-semibold leading-6 sm:text-[14px] ${
                      message.role === "user"
                        ? "rounded-br-sm bg-[#9D22F2] text-white shadow-[0_12px_30px_rgba(157,34,242,0.28)]"
                        : "rounded-bl-sm bg-[#111820] text-[#E5E7EB]"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isLoading && <TypingIndicator />}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-white/10 bg-[#141C25] p-4"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/15 bg-[#101820] px-4 text-[14px] font-semibold text-white outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#9D22F2] disabled:cursor-not-allowed disabled:opacity-70"
              />

              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#9D22F2] text-white transition-all duration-300 hover:bg-[#8B18E8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={20} fill="white" strokeWidth={1.8} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {!isOpen && (
        <motion.button
          type="button"
          onClick={handleOpenChat}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{
            opacity: { duration: 0.4 },
            scale: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="fixed bottom-7 right-7 z-[60] flex h-[62px] w-[62px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-purple-700 text-white shadow-[0_18px_45px_rgba(157,34,242,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_60px_rgba(157,34,242,0.55)] sm:h-[68px] sm:w-[68px]"
          aria-label="Open AI assistant"
        >
          <div className="relative">
            <Bot size={32} strokeWidth={2.1} />
            <Sparkles
              size={15}
              className="absolute -right-2 -top-2 text-white"
              fill="white"
            />
          </div>
        </motion.button>

      )} */}

      {!isOpen && (
        <motion.button
          type="button"
          onClick={handleOpenChat}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: [1, 1.08, 1] }}
          transition={{
            opacity: { duration: 0.4 },
            scale: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="fixed bottom-7 right-7 z-[60] flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full bg-[#9D22F2] text-white shadow-[0_18px_45px_rgba(157,34,242,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#8B18E8] hover:shadow-[0_22px_60px_rgba(157,34,242,0.55)] sm:h-[68px] sm:w-[68px]"
          aria-label="Open AI assistant"
        >
          <MessageCircle size={31} fill="white" strokeWidth={1.8} />
        </motion.button>
      )}
    </>
  );
}
