import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

// type TrafficLightColor = 'red' | 'green' | 'yellow';
type TrafficLightColor = keyof typeof colors;


export const useTrafficLight = () => {


    const [light, setLight] = useState<TrafficLightColor>('red');

    const [countdown, setCountdown] = useState(5)

    //Countdown Effect
    useEffect(() => {

        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);


        return () => {
            clearInterval(intervalId);
        }


    }, [countdown]);


    //Change light color effect
    useEffect(() => {
        if (countdown > 0) return;

        if (light === 'red') {
            setCountdown(5);
            setLight('green');
            return;
        }
        if (light === 'green') {
            setCountdown(2);
            setLight('yellow');
            return;
        }
        if (light === 'yellow') {
            setCountdown(5);
            setLight('red');
            return;
        }


    }, [countdown])

    return {
        // Props
        countdown,

        //Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        // Methods

    };

};
