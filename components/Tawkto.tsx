'use client';

import { useRef } from "react";
// @ts-ignore
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export const Tawkto = () => {
    const tawkMessengerRef = useRef<any>(null);

    return (
        <TawkMessengerReact
            propertyId="69eb5238b49be01c31d28a8a"
            widgetId="1jmvjible"
            ref={tawkMessengerRef}
            onLoad={() => console.log('onLoad works!')}
            onMinimize={() => tawkMessengerRef.current?.minimize()}
            onBeforeLoad={() => console.log("onBeforeLoad works!")}
            onStatusChange={(status: any) => console.log("onStatusChange works!", status)}
            onChatMaximized={() => console.log("onChatMaximized works!")}
        />
    );
};
