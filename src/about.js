const iframe = document.createElement('iframe');
const about_page = document.createElement('div');

iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12375.288994158476!2d-77.16001955!3d39.156024349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d317d7994347%3A0x4aeb71e833827d85!2sGiant%20Food!5e0!3m2!1sen!2sus!4v1724130724748!5m2!1sen!2sus';

iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowFullscreen = "";
iframe.loading = "lazy";

about_page.append(iframe);

export { about_page };