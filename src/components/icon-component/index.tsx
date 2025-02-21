import React from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'

interface IconComponentProps {
    Icon: any
    size?: number
    onPress?: () => {}
    style?: ViewStyle
}

export const IconComponent = ({Icon, size, onPress, style}: IconComponentProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{alignItems: 'flex-start'}, style]}>
            {Icon}
        </TouchableOpacity>
    )
}