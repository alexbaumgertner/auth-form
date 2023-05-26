const login = async <T> (loginData: T) => {
  try {
    const loginResponse = await fetch(
      '/api/auth/signin',
      {
        method: 'post',
        body: JSON.stringify(loginData),
      })

    if (loginResponse.status === 200) {
      return loginResponse.json()
    } else {
      return { error: 'Error in login' }
    }
  } catch (error) {
    return error
  }
}

const signup = async <T> (authData: T) => {
  try {
    const signupResponse = await fetch(
      '/api/auth/signup',
      {
        method: 'post',
        body: JSON.stringify(authData),
      })

    if (signupResponse.status === 200) {
      return signupResponse.json()
    } else {
      return { error: 'Error in signup' }
    }
  } catch (error) {
    return error
  }
}

const reset = async <T> (resetData: T) => {
  try {
    const resetResponse = await fetch(
      '/api/auth/reset',
      {
        method: 'post',
        body: JSON.stringify(resetData),
      })

    if (resetResponse.status === 200) {
      return resetResponse.json()
    } else {
      return { error: 'Error in reset' }
    }
  } catch (error) {
    return error
  }
}

export {
  login,
  signup,
  reset,
}
