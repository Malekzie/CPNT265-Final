// import { redirect }  from '@sveltejs/kit'

// export const load =  async ({ url, locals: { getSession } }) => {
//   const session = await getSession()

//   // if the user is not logged in return them to the account page
//   if (session) {
//     throw redirect(303, '/')
//   }

//   if (!session) {
//     throw redirect(303, '/login')
//   }

// }

// Use this code block if you want to have a preauth page before users can access any other page