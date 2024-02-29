export function AlertSuccessNotification({ message } : { message: string }){
    return (
        <div className="bg-green-500 border-l-4 border-green-700 p-4">
            <p className="text-white font-bold italic">{message}</p>
        </div>
    );
}

export function AlertErrorNotification({ message } : { message: string }){
    return (
        <div className="bg-red-500 border-l-4 border-red-700 p-4">
            <p className="text-white font-bold italic">{message}</p>
        </div>
    );
}

export function AlertInfoNotification({ message } : { message: string }){
    return (
        <div className="bg-orange-500 border-l-4 border-orange-700 p-4">
            <p className="text-white font-bold italic">{message}</p>
        </div>
    );
}