// scripts.js

document.addEventListener('DOMContentLoaded', function() {

    // Dynamically adding and removing participants
    const participantsList = document.getElementById('participants-list');

    // Adding a new participant input group
    document.getElementById('add-participant').addEventListener('click', function(event) {
        event.preventDefault();

        const participants = document.querySelectorAll('.participant');
        const nextParticipantIndex = participants.length + 1;

        const participantDiv = document.createElement('div');
        participantDiv.className = 'participant';

        const nameLabel = document.createElement('label');
        nameLabel.htmlFor = `participant-name-${nextParticipantIndex}`;
        nameLabel.innerText = 'Name:';
        participantDiv.appendChild(nameLabel);

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = `participant-name-${nextParticipantIndex}`;
        nameInput.required = true;
        participantDiv.appendChild(nameInput);

        const emailLabel = document.createElement('label');
        emailLabel.htmlFor = `participant-email-${nextParticipantIndex}`;
        emailLabel.innerText = 'Email:';
        participantDiv.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = `participant-email-${nextParticipantIndex}`;
        emailInput.required = true;
        participantDiv.appendChild(emailInput);

        const roleLabel = document.createElement('label');
        roleLabel.htmlFor = `participant-role-${nextParticipantIndex}`;
        roleLabel.innerText = 'Role:';
        participantDiv.appendChild(roleLabel);

        const roleInput = document.createElement('input');
        roleInput.type = 'text';
        roleInput.id = `participant-role-${nextParticipantIndex}`;
        roleInput.required = true;
        participantDiv.appendChild(roleInput);

        participantsList.insertBefore(participantDiv, participantsList.lastChild.previousSibling);
    });

    // Removing the last participant input group
    document.getElementById('remove-participant').addEventListener('click', function(event) {
        event.preventDefault();

        const participants = document.querySelectorAll('.participant');
        if (participants.length > 1) {
            participants[participants.length - 1].remove();
        } else {
            alert('You must have at least one participant.');
        }
    });
});
