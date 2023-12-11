import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types'

const schema = z.object({
  nickname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirm: z.string().min(6),
})
.refine( async (data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"],
  });

export const load = (async () => {
  // Server API:
  const form = await superValidate(schema);

  // Unless you throw, always return { form } in load and form actions.
  return { form };
});

export const actions: Actions = {
  sveltekitForms: async ({ request, event }) => {
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
    

    // Yep, return { form } here too
    return { form };
  },
  new: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
<<<<<<< Updated upstream
    const form = await superValidate(request, schema);
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
    console.log(formData)
=======
    const form = await superValidate(request, schema);
    console.log('POST', form)
>>>>>>> Stashed changes

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/member/auth/callback?next=/member/signIn`,
      },
    })

    if (error) {
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }

    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }

    if (form.data.password !== form.data.passwordConfirm) {
      return message(form, 'Passwords do not match', {
        status: 403
      });
     } // else{
    

<<<<<<< Updated upstream
    return {
      message: 'Please check your email for a magic link to log into the website.',
      success: true,
      form,
    }
=======
    // return {
    //   message: 'Please check your email for a magic link to log into the website.',
    //   success: true,
    //   form,
    // }}
>>>>>>> Stashed changes
  },
};