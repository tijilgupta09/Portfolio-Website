import { useRef } from "react"

export const onMouseMovement = () => {
    const elementRef = useRef(null);

    const handleMouseMovement = (e) => {
        const { current : item } = elementRef;
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.setProperty('--mouseX', `${x}px`);
        item.style.setProperty('--mouseY', `${y}px`);
    }

    return { elementRef, handleMouseMovement };
}