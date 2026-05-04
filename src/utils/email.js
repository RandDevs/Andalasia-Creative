export const handleEmailClick = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  
  const email = "pdamaraputra@andalasiacreative.com";
  
  // Simple mobile device detection
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, mailto: works perfectly and opens the native app (Gmail/Apple Mail)
    window.location.href = `mailto:${email}`;
  } else {
    // On desktop, open Gmail web compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  }
};
