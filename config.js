// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "Pastry Delicio",
    bio: "Delicio – Le goût de la perfection",
    profileImage: "https://scontent.falg7-6.fna.fbcdn.net/v/t39.30808-6/608261508_122107958583160557_615074857772544196_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEeEnOY5iELoBP6hGn_-RIN9GL6HS8yFzn0YvodLzIXOZaUhGyWOLauoDqNAOC1-FbI7fWXUqUA2emnbYKdIV8f&_nc_ohc=oblewh7-3VIQ7kNvwEkYLA4&_nc_oc=Adkyvh-ycwIAY7hj0HW435MihOCXRLBql3a_SzgMnKlfPzUF4RlM_qzgwvrFR0iN6xA&_nc_zt=23&_nc_ht=scontent.falg7-6.fna&_nc_gid=tD6YdKrAk0dhMOLcMnuRFA&oh=00_AfmA3VaIKaskoH2qpmm32QPo0jCF4Mw2ubiULmffnyCaeg&oe=695988D0",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/1CED1f2N78/",
        instagram: "https://www.instagram.com/delicio_pastry?igsh=MTQ0NXB5YTFrZ2Fkbw==",
        tiktok: "https://www.tiktok.com/@delicio.pastry?_r=1&_t=ZS-92cocxrRJo8",
        whatsapp: "+213778051351",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://maps.app.goo.gl/tVuhremff3GyijRc8",
        phone: "0778051351"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: false,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}


