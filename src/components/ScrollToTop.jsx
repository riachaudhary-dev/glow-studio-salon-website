import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash, key} = useLocation();

    useEffect(() => {
        let scrollTimer;

        if (hash) {
            const sectionId = decodeURIComponent(hash.substring(1));

            // Wait for the page transition to finish
            scrollTimer = setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 450);

        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }

        return () => {
            clearTimeout(scrollTimer);
        };

    }, [pathname, hash,key]);

    return null;
};

export default ScrollToTop;
