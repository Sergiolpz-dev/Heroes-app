import { useEffect, useState } from "react";

export const TrafficLightWithEffect = () => {

    const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse'
    }

    // type TrafficLightColor = 'red' | 'green' | 'yellow';
    type TrafficLightColor = keyof typeof colors;

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






    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1>Semaforo con useEffect</h1>
                <h2>{countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease"
                        style={{ width: `${(countdown / 5) * 100}%` }}
                    ></div>
                </div>

                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}

            </div>
        </div>
    );
};