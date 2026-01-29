"use client"

import * as React from "react"
import { Paperclip, ArrowUp, X, ChevronDown, Mic, Globe, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Constants ---
const MODELS = [
  { id: "gpt-4o", name: "GPT-4o", icon: "https://cdn.brandfetch.io/idR3duQxYl/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1749527471692" },
  { id: "claude-3-5", name: "Claude 3.5", icon: "https://cdn.brandfetch.io/idW5s392j1/w/338/h/338/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1738315794862" },
  { id: "gemini-pro", name: "Gemini Pro", icon: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1755835725776" },
]

// --- Component ---
interface SmartAiInputProps {
  onSend: (message: string, files: File[], model: string) => void
  disabled?: boolean
}

export default function SmartAiInput({ onSend, disabled }: SmartAiInputProps) {
  const [value, setValue] = React.useState("")
  const [files, setFiles] = React.useState<File[]>([])
  const [selectedModel, setSelectedModel] = React.useState(MODELS[0])
  
  // State for UI behavior
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [showModelMenu, setShowModelMenu] = React.useState(false)
  const [isOverflowVisible, setIsOverflowVisible] = React.useState(false) // Fix for dropdown clipping
  
  const containerRef = React.useRef<HTMLDivElement>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  // 1. Handle Click Outside (Collapse input & Close Menu)
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Close menu if open
        setShowModelMenu(false)
        
        // Collapse input only if empty
        if (!value.trim() && files.length === 0) {
          setIsExpanded(false)
          setIsOverflowVisible(false)
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [value, files])

  // 2. Auto-resize textarea
  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 280)}px`
    }
  }, [value])

  const handleSend = () => {
    if ((!value.trim() && files.length === 0) || disabled) return
    onSend(value, files, selectedModel.id)
    setValue("")
    setFiles([])
    // We keep it expanded after send for better UX, or you can collapse it:
    // setIsExpanded(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
    if (e.key === "Escape") {
      setShowModelMenu(false)
      if (!value.trim()) setIsExpanded(false)
      textareaRef.current?.blur()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files || [])])
      setIsExpanded(true)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 font-sans antialiased">
      <div
        ref={containerRef}
        className={cn(
          "relative flex flex-col w-full rounded-[26px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] border",
          isExpanded
            ? "bg-white dark:bg-[#1a1a1a] border-black/5 dark:border-white/10 shadow-xl shadow-black/5"
            : "bg-[#f4f4f4] dark:bg-[#222] border-transparent hover:bg-[#efefef] dark:hover:bg-[#2a2a2a]"
        )}
      >
        {/* --- Top Section: Model Selector --- */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onAnimationComplete={() => setIsOverflowVisible(true)} // Enable overflow after animation
              className={cn(
                "w-full",
                isOverflowVisible ? "overflow-visible" : "overflow-hidden"
              )}
            >
              <div className="px-3 pt-3 relative">
                <button
                  onClick={() => setShowModelMenu(!showModelMenu)}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-full text-[11px] font-medium bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <img 
                    src={selectedModel.icon} 
                    alt="" 
                    className="w-3.5 h-3.5 rounded-full object-cover opacity-90"
                  />
                  <span>{selectedModel.name}</span>
                  <ChevronDown className="w-3 h-3 opacity-40" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {showModelMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      className="absolute left-3 top-12 z-50 w-44 p-1 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 rounded-xl shadow-lg shadow-black/5"
                    >
                      {MODELS.map((model) => (
                        <button
                          key={model.id}
                          onClick={() => {
                            setSelectedModel(model)
                            setShowModelMenu(false)
                          }}
                          className={cn(
                            "flex items-center gap-2 w-full px-2 py-1.5 text-xs rounded-lg transition-colors",
                            selectedModel.id === model.id
                              ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                              : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5"
                          )}
                        >
                           <img 
                            src={model.icon} 
                            className="w-3.5 h-3.5 rounded-full opacity-80" 
                           />
                          {model.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Middle: Files & Input --- */}
        <div className="flex flex-col">
           {/* Attached Files */}
           <AnimatePresence>
            {files.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2 pb-1">
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/5 pl-2 pr-1.5 py-1 rounded-md text-[10px] text-zinc-600 dark:text-zinc-300 shadow-sm">
                      <span className="truncate max-w-[100px]">{file.name}</span>
                      <button onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))} className="p-0.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-sm transition-colors">
                        <X className="w-3 h-3 text-zinc-400 hover:text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Main Textarea */}
          <div className="relative px-4 py-3">
            <textarea
              ref={textareaRef}
              value={value}
              disabled={disabled}
              onClick={() => { setIsExpanded(true); setIsOverflowVisible(true); }}
              onFocus={() => { setIsExpanded(true); setIsOverflowVisible(true); }}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isExpanded ? `Ask ${selectedModel.name} anything...` : "How can I help you?"}
              rows={1}
              className={cn(
                "w-full bg-transparent border-none resize-none focus:ring-0 focus:outline-none px-0 py-0 min-h-[24px] max-h-[280px] custom-scrollbar",
                "text-[15px] leading-relaxed text-zinc-900 dark:text-zinc-100",
                "placeholder:text-zinc-500 dark:placeholder:text-zinc-500",
                !isExpanded && "cursor-text"
              )}
            />
          </div>
        </div>

        {/* --- Bottom: Actions Toolbar --- */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 pb-3">
                {/* Left Actions */}
                <div className="flex items-center gap-1">
                  <input type="file" multiple className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                  <TooltipButton 
                    icon={<Paperclip className="w-4 h-4" />} 
                    label="Attach"
                    onClick={() => fileInputRef.current?.click()} 
                  />
                  <TooltipButton 
                    icon={<Globe className="w-4 h-4" />} 
                    label="Search"
                    onClick={() => {}} 
                  />
                </div>

                {/* Right Action: Send */}
                <div className="flex items-center">
                  <AnimatePresence mode="wait">
                    {(value.trim() || files.length > 0) ? (
                      <motion.button
                        key="send"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSend}
                        className="flex items-center justify-center w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-md hover:opacity-90 transition-opacity"
                      >
                        <ArrowUp className="w-4 h-4" strokeWidth={3} />
                      </motion.button>
                    ) : (
                      <motion.button
                        key="mic"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                         <Mic className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// --- Minimal Tooltip Button Helper ---
function TooltipButton({ icon, onClick, label }: { icon: React.ReactNode; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="group relative p-2 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-xl transition-all duration-200"
      aria-label={label}
    >
      {icon}
    </button>
  )
}