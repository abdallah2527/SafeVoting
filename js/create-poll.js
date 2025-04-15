document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const optionList = document.querySelector('.option-list');
    const addOptionBtn = document.querySelector('.add-option-btn');
    const addOtherBtn = document.querySelector('.add-other-btn');
    const addDescriptionBtn = document.querySelector('.add-description-btn');
    const showAdvancedBtn = document.querySelector('.show-advanced-btn');

    // Add new option
    addOptionBtn.addEventListener('click', () => {
        const optionCount = optionList.children.length;
        const newOption = document.createElement('div');
        newOption.className = 'input-group mb-2';
        newOption.innerHTML = `
            <input type="text" class="form-control" placeholder="Option ${optionCount + 1}">
            <button class="btn btn-outline-secondary" type="button">
                <i class="fas fa-times"></i>
            </button>
        `;
        optionList.appendChild(newOption);
    });

    // Add "Other" option
    addOtherBtn.addEventListener('click', () => {
        const newOption = document.createElement('div');
        newOption.className = 'input-group mb-2';
        newOption.innerHTML = `
            <input type="text" class="form-control" placeholder="Other">
            <button class="btn btn-outline-secondary" type="button">
                <i class="fas fa-times"></i>
            </button>
        `;
        optionList.appendChild(newOption);
    });

    // Remove option
    optionList.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-times')) {
            const optionGroup = e.target.closest('.input-group');
            if (optionList.children.length > 2) {
                optionGroup.remove();
            }
        }
    });

    // Add description or image
    addDescriptionBtn.addEventListener('click', () => {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'mt-3';
        descriptionContainer.innerHTML = `
            <textarea class="form-control" rows="3" placeholder="Add description"></textarea>
            <div class="mt-2">
                <button type="button" class="btn btn-outline-secondary">
                    <i class="fas fa-image"></i> Add image
                </button>
            </div>
        `;
        addDescriptionBtn.parentNode.insertBefore(descriptionContainer, addDescriptionBtn.nextSibling);
        addDescriptionBtn.style.display = 'none';
    });

    // Show advanced settings
    showAdvancedBtn.addEventListener('click', () => {
        const advancedSettings = document.createElement('div');
        advancedSettings.className = 'advanced-settings mt-4';
        advancedSettings.innerHTML = `
            <h5 class="mb-3">Advanced Settings</h5>
            <div class="row g-3">
                <div class="col-md-6">
                    <label class="form-label">End Date</label>
                    <input type="datetime-local" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Time Zone</label>
                    <select class="form-select">
                        <option>UTC</option>
                        <option>Local Time</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Custom URL</label>
                    <input type="text" class="form-control" placeholder="custom-url">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Password Protection</label>
                    <input type="password" class="form-control" placeholder="Optional">
                </div>
            </div>
        `;
        showAdvancedBtn.parentNode.insertBefore(advancedSettings, showAdvancedBtn.nextSibling);
        showAdvancedBtn.style.display = 'none';
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Poll created successfully!');
        // Redirect to results page or poll page
        window.location.href = 'index.html';
    });
}); 