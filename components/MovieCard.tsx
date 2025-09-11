import { icons } from '@/constants/icons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'


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
                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} style={{ width: 16, height: 16 }} />
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard