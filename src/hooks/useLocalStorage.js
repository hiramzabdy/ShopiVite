import React from "react"

function useLocalStorage(itemName, initialValue){
    //states
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
      setTimeout(() => {
        try {
          if(!localStorage.getItem(itemName)){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
          }
          let localStorageItems = JSON.parse(localStorage.getItem(itemName))
          setItem(localStorageItems)
          setLoading(false)
        } catch (error) {
          setError(error)
          setLoading(false)
        }
      },500)
    }, [])  
  
    const saveItem = (newItems) =>{
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItem(newItems)
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    }
}

export {useLocalStorage}