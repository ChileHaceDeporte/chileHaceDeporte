import { createContext, useState, useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { auth } from '../service/auth'
import { signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  sendPasswordResetEmail, 
  sendEmailVerification, 
  onAuthStateChanged,
  signOut } from "firebase/auth";




const AuthContext = createContext({})


const AuthProvider = ({children}) => {

  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    auth.onAuthStateChanged(userData => {
      if (userData){
        if (userData.emailVerified){
          setAuthData(userData)
          setLoading(false)
        } 
      } 
      else setLoading(false) 

    })

  }, []);
  
  const sendAlert = message => { Alert.alert(null, message)}
  
  const signIn = async (email, password, isLoading ) => {
    
    try{
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      
      if (user.emailVerified ){
        setAuthData( user )
      }

      else {
        await signOut(auth)
        sendAlert('Correo no verificado')
        isLoading(false)
      }
    }
    catch (err) {
      console.log(err.message)
      sendAlert('Correo o clave incorrecta')
      isLoading(false)
    }
  }

  const signUp = async (email, password, isLoading, navigateSignIn) => {
    
    try{
      const { user }  = await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(user)
      await signOut(auth)
      sendAlert('Te hemos enviado un vínculo para verificar tu dirección de correo electrónico. Luego podrás iniciar sesión.')
      navigateSignIn()
    }
    catch (err){
      console.log(err.message)
      sendAlert('Dirección de correo ya se encuentra en uso')
    }
    finally{ isLoading(false) }
  }

  const resetPass = async (email, isLoading, navigateSignIn) => {
    
    try{
      await sendPasswordResetEmail(auth, email)
      sendAlert('Te hemos enviado un vínculo para restablecer tu contraseña')
      navigateSignIn()
    }
    catch(err){
      console.log(err.message)
      sendAlert('Dirección de correo no encontrada')
    }
    finally{ isLoading(false) }
  }

  const logOut = async () => { 
    await signOut(auth)
    setAuthData(null) 
  }

  return <AuthContext.Provider value={{ authData, loading, signIn, signUp, resetPass, logOut }}>
    {children}
  </AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider')

  return context
}

export {AuthContext, AuthProvider, useAuth}