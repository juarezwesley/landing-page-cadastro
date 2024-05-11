        document.addEventListener("DOMContentLoaded", function() {
            const numSnowflakes = 30; // Número de flocos de neve

            for (let i = 0; i < numSnowflakes; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snow');
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.animationDuration = `${Math.random() * 10 + 2}s`; // Duração aleatória entre 2 e 12 segundos
                document.querySelector('.snow-wrapper').appendChild(snowflake);
            }
        });