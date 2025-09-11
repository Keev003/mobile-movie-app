import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date}: Movie) => {
    console.log(poster_path)
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image 
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placehold.co/600x400/1a1a1a/ffffff.png`
                    }}
                    style={{ width: '100%', height: 208, borderRadius: 12 }} 
                    // used style instead of className with nativewind, not sure why it didnt wanna apply nativewind properties. 
                    contentFit='cover'
                />
                <Text className='text-sm font-bold text-white mt-2'>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard