"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSubmit = () => {
    if (question.trim()) {
      // Clear the command menu state first
      setOpen(false);
      setQuestion('');
      
      // Encode the question and use ISO string for consistent timestamp
      const encodedQuestion = encodeURIComponent(question);
      const timestamp = new Date().toISOString();
      
      // Use replace with scroll: false to avoid page jump
      router.replace(`/ask?q=${encodedQuestion}&t=${encodeURIComponent(timestamp)}`, { 
        scroll: false
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ask a Question</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about open source..."
            className="min-h-[100px] mb-4"
            autoFocus
          />
          <Button 
            onClick={handleSubmit}
            className="w-full"
            disabled={!question.trim()}
          >
            Ask Question
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 