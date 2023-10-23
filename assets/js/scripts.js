// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    let nextParticipantIndex = 2;

    document.getElementById("add-participant").addEventListener("click", (event) => {
        event.preventDefault();

        const participantsList = document.getElementById("participants-list");

        const participantDiv = document.createElement("div");
        participantDiv.className = "participant";

        // Name
        const nameLabel = document.createElement("label");
        nameLabel.htmlFor = `participant-name-${nextParticipantIndex}`;
        nameLabel.innerText = "Name:";
        participantDiv.appendChild(nameLabel);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = `participant-name-${nextParticipantIndex}`;
        nameInput.required = true;
        participantDiv.appendChild(nameInput);

        // Email
        const emailLabel = document.createElement("label");
        emailLabel.htmlFor = `participant-email-${nextParticipantIndex}`;
        emailLabel.innerText = "Email:";
        participantDiv.appendChild(emailLabel);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.id = `participant-email-${nextParticipantIndex}`;
        emailInput.required = true;
        participantDiv.appendChild(emailInput);

        // Role
        const roleLabel = document.createElement("label");
        roleLabel.htmlFor = `participant-role-${nextParticipantIndex}`;
        roleLabel.innerText = "Role:";
        participantDiv.appendChild(roleLabel);

        const roleInput = document.createElement("input");
        roleInput.type = "text";
        roleInput.id = `participant-role-${nextParticipantIndex}`;
        roleInput.required = true;
        participantDiv.appendChild(roleInput);

        // Organization
        const orgLabel = document.createElement("label");
        orgLabel.htmlFor = `participant-organization-${nextParticipantIndex}`;
        orgLabel.innerText = "Organization:";
        participantDiv.appendChild(orgLabel);

        const orgInput = document.createElement("input");
        orgInput.type = "text";
        orgInput.id = `participant-organization-${nextParticipantIndex}`;
        orgInput.required = true;
        participantDiv.appendChild(orgInput);

        // Append to participants list and increment the index
        participantsList.insertBefore(participantDiv, document.getElementById("add-participant"));
        nextParticipantIndex++;
    });

    document.getElementById("remove-participant").addEventListener("click", (event) => {
        event.preventDefault();

        const participants = document.querySelectorAll(".participant");
        if (participants.length > 1) {
            participants[participants.length - 1].remove();
        }
    });
});
