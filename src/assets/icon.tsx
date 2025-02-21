import { RFValue } from "react-native-responsive-fontsize"
import Svg, { Path } from "react-native-svg"

interface IconProps {
    width?: number
    height?: number
    color?: string
    size?: number
}

export const BackArrowIcon = ({width = RFValue(28), height = RFValue(28), color = 'white'}: IconProps) => {
    return (
        <Svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color={color} width={width} height={height}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
        </Svg>

    )
}