import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

const schema = z.object({
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirm: z.string().min(6),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"],
  });

export const load = (async () => {
  // Server API:
  const form = await superValidate(schema);

  // Unless you throw, always return { form } in load and form actions.
  return { form };
});

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);
    console.log('POST', form);

    // Convenient validation check:
    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }
    
    if (form.data.password !== form.data.passwordConfirm) {
      return message(form, 'Passwords do not match', {
        status: 400
      });
    }
    // TODO: Do something with the validated form.data

    // Yep, return { form } here too
    return { form };
  }
};