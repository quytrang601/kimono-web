import React, { useState, useEffect } from 'react';
import './Sakura.css';
import '../../../styles/animation.css'
const Sakura = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        setPetals(Array.from({ length: 40 }).map(() => ({
            size: 6 + Math.random() * 6,
            duration: 8 + Math.random() * 10,
            delay: Math.random() * 10,
            left: Math.random() * 100
        })));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
            {petals.map((petal, i) => (
                <div
                    key={i}
                    className="absolute sakura-petal-v2"
                    style={{
                        left: `${petal.left}vw`,
                        top: `-${petal.size}px`,
                        width: `${petal.size}px`,
                        height: `${petal.size * 1.2}px`,
                        opacity: 0.6,
                        animation: `sakura-fall-v2 ${petal.duration}s linear infinite`,
                        animationDelay: `${petal.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default Sakura;