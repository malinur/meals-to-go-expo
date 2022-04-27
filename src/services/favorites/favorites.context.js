import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@favorites', jsonValue)
    } catch (e) {
      console.log('fav error', e)
    }
  }

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites')
      if (value !== null) {
        setFavorites(JSON.parse(value))
      }
    } catch (e) {
      console.log('fav error', e)
    }
  }

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    )
    setFavorites(newFavorites)
  }

  useEffect(() => {
    loadFavorites().then()
  }, [])

  useEffect(() => {
    saveFavorites(favorites).then()
  }, [favorites])

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
