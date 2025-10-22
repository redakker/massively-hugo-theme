// Demo JavaScript file to show ESLint in action
// This file demonstrates proper JavaScript coding standards

/**
 * Simple utility functions with ESLint-compliant code
 */

// Modern JavaScript with proper ESLint formatting
const DemoUtils = {
	// Initialize demo functionality
	init() {
		console.log('Demo utilities initialized');
		this.setupEventListeners();
		this.displayWelcomeMessage();
	},

	// Set up event listeners for demo interactions
	setupEventListeners() {
		const buttons = document.querySelectorAll('.demo-button');

		buttons.forEach(button => {
			button.addEventListener('click', event => {
				this.handleButtonClick(event);
			});
		});
	},

	// Handle button click events
	handleButtonClick(event) {
		const button = event.target;
		const message = button.dataset.message || 'Button clicked!';

		this.showNotification(message);
	},

	// Display a notification message
	showNotification(message) {
		// Create notification element
		const notification = document.createElement('div');
		notification.className =
			'notification bg-blue-500 text-white p-4 rounded-lg fixed top-4 right-4 z-50';
		notification.textContent = message;

		// Add to page
		document.body.appendChild(notification);

		// Remove after 3 seconds
		setTimeout(() => {
			if (notification.parentNode) {
				notification.parentNode.removeChild(notification);
			}
		}, 3000);
	},

	// Display welcome message
	displayWelcomeMessage() {
		const welcomeContainer = document.getElementById('welcome-message');

		if (welcomeContainer) {
			welcomeContainer.innerHTML = `
				<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
					<h3 class="font-bold">ESLint is Working!</h3>
					<p>This JavaScript file follows ESLint coding standards.</p>
					<button class="demo-button bg-green-500 text-white px-3 py-1 rounded mt-2"
							data-message="ESLint demo button clicked!">
						Click Me
					</button>
				</div>
			`;
		}
	},

	// Utility function to format dates
	formatDate(date) {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};

		return new Intl.DateTimeFormat('en-US', options).format(date);
	},

	// Validate email format (basic validation)
	isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	},
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		DemoUtils.init();
	});
} else {
	DemoUtils.init();
}

// Export for module systems (if used)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = DemoUtils;
}
