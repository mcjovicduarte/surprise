document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const loveMessage = document.getElementById('love-message');
    const surpriseBtn = document.getElementById('surprise-btn');
    
    const messages = [
        "Every moment with you is precious! ❤️",
        "I Love You So Much Love! 💓",
        "You're the best thing that's ever happened to me! 💝",
        "Akong KangKong Chips Ha AHAHHAHAHA 💖",
        "Random Naning Uban HAAHHAHAA! 💕",
        "Together forever, my love! 💘",
        "Thank you so much for being my Good Girl! 💖",
        "Wa nakoy masulti HAHHAHAHA! 💕",
        "I'm so happy to be with you! 💖",
        "Amping ara ah Ayw na sigeg ka late! 💕",
        "I'm so thankful for you! 💖",
        "I'm so grateful for you! 💖",
        "Mao nani ang last! 💖",
        

    ];
    
    let messageIndex = 0;
    
    heart.addEventListener('click', () => {
        heart.style.transform = 'scale(1.2)';
        setTimeout(() => {
            heart.style.transform = 'scale(1)';
        }, 200);
        
        messageIndex = (messageIndex + 1) % messages.length;
        loveMessage.style.opacity = '0';
        
        setTimeout(() => {
            loveMessage.textContent = messages[messageIndex];
            loveMessage.style.opacity = '1';
        }, 300);
    });
    
    const emojis = ['❤️', '💖', '💝', '💕', '💓', '💘'];
    
    function createFloatingEmoji() {
        const emoji = document.createElement('span');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.top = window.innerHeight + 'px';
        emoji.style.fontSize = '24px';
        emoji.style.animation = 'float 3s ease-out';
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            document.body.removeChild(emoji);
        }, 3000);
    }
    
    surpriseBtn.addEventListener('click', () => {
        for(let i = 0; i < 10; i++) {
            setTimeout(createFloatingEmoji, i * 300);
        }
    });
    
    // Add floating animation style
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}); 