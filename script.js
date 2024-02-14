// Sample family data
const family = {
    name: "Fev Family",
    photo: "family.jpg",
    members: [
        { name: "Fev", relation: "Spouse", photo: "fev.jpg" },
        { name: "Minte", relation: "Child", photo: "minte.jpg" },
        { name: "Fira", relation: "Child", photo: "fira.jpg" },
        { name: "Fenu", relation: "Child", photo: "fenu.jpg"}
      ]
    };
  
  // Update the HTML elements with family information
  document.getElementById("family-name").textContent = family.name;
  document.getElementById("family-photo").src = family.photo;
  
  const familyMembersList = document.getElementById("family-members");
  const selectedPhoto = document.getElementById("selected-photo");
  
  family.members.forEach(member => {
    const option = document.createElement("option");
    option.value = member.photo;
    option.textContent = member.name;
    familyMembersList.appendChild(option);
  });
  
  function displaySelectedPhoto() {
    const selectedMember = family.members[familyMembersList.selectedIndex - 1];
    if (selectedMember) {
      selectedPhoto.src = selectedMember.photo;
    } else {
      selectedPhoto.src = "";
    }
  }