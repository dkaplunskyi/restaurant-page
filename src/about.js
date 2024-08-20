const iframe = document.createElement('iframe');
const about_page = document.createElement('div');

iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2717890745166!2d-77.03888422439192!3d38.89489967172459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7a320765227%3A0xcefe101855fab5d7!2sNational%20Christmas%20Tree!5e0!3m2!1sen!2sus!4v1724131653954!5m2!1sen!2sus';

iframe.width = "600";
iframe.height = "450";
iframe.style.border = "0";
iframe.allowFullscreen = "";
iframe.loading = "lazy";

about_page.append(iframe);

export { about_page };