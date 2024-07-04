import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import axios from 'axios';

const formSchema = z.object({
  synonym: z.string().min(1, { message: 'Synonym is required.' }),
});

function AddSynonymForm({ wordId }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      synonym: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await axios.post(`/api/synonym/${wordId}`, values);
      form.reset();
      alert('Synonym added successfully!');
    } catch (error) {
      console.error('Failed to add synonym:', error);
      alert('Failed to add synonym. Please try again.');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="synonym"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Synonym</FormLabel>
              <FormControl>
                <Input placeholder="Enter a synonym" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Synonym</Button>
      </form>
    </Form>
  );
}

export default AddSynonymForm;