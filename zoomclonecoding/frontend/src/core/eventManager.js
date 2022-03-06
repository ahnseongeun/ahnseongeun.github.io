export const EventManager = (() => {
    //TODO
    const eventMapper = {
        event: {
            className,
            handler
        }
    } = {};

    const registedHandler = {}; //event, handler

    const addEventHandler = (className, event, handler) => {
        if (!eventMapper[event]) eventMapper[event] = [];
        if (eventMapper[event].some((v) => v.className === className)) {
            eventMapper[event] = eventMapper[event].filter(
                (v) => v.className !== className  
            );
            eventMapper[event].push({className, handler});
        };
        
        const regist = () => {
            registedHandler.forEach((v) => {
                document.removeEventListener(v.event, v.handler);
            });

            Object.keys(eventMapper).forEach((event) => {
                const eventHandler = (e) => {
                    const candidates = eventMapper[event];
                    const targets = candidates.filter(
                    (candidates) => 
                        e.target.classList.contains(candidates.className) ||
                        e.target.closest(`.${candidates.className}`)
                    );
                    targets.forEach((target) => {
                        target.handler(e);
                    });
                };
                registedHandler.push({event, eventHandler});
                document.addEventListener(event, eventHandler);
            });
        };
        return { addEventHandler, regist};
    };
});

export default EventManager;