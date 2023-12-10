// Returns the session to every page in the app, validating the user's session
export const load = async ({ locals: { getSession }}) => {
  return {
    session: await getSession(),
  }
}