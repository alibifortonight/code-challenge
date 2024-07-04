import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axios from 'axios';

const formSchema = z.object({
  word: z.string().min(1, { message: 'Word is required.' }),
});

function AddWordForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await axios.post('/api/word', values);
      form.reset();
      alert('Word added successfully!');
    } catch (error) {
      console.error('Failed to add word:', error);
      alert('Failed to add word. Please try again.');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Word</FormLabel>
              <FormControl>
                <Input placeholder="Enter a new word" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Word</Button>
      </form>
    </Form>
  );
}

export default AddWordForm;