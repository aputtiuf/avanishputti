const contact = {
  firstName: "Avanish",
  lastName: "Putti",
  fullName: "Avanish Putti",
  organization: "University of Florida",
  email: "a.putti@ufl.edu",
  phone: "+17329661263",
  linkedIn: "https://www.linkedin.com/in/avanish-putti/"
};

function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    `ORG:${contact.organization}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `URL:${contact.linkedIn}`,
    "END:VCARD"
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "Avanish-Putti.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

document.getElementById("addContactButton").addEventListener("click", downloadVCard);
