import { useEffect } from "react"

export const useNoScroll = (state: boolean = false) => {

    useEffect(() => {
        if (document?.body && (state === true)) {
            document.body.style.overflow = "hidden"
        }
        return (() => {
            if (document?.body) {
                document.body.style.overflow = "auto"
            }
        })
    }, [state])
}