 // Function to show login form
        function showLogin() {
            document.getElementById('login-toggle').checked = true;
            hideNotification();
        }

        // Function to show registration form
        function showRegister() {
            document.getElementById('register-toggle').checked = true;
            hideNotification();
        }

        // Function to show password reset form
        function showReset() {
            document.getElementById('reset-toggle').checked = true;
            hideNotification();
        }

        // Function to show notification
        function showNotification(message, type) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = 'notification ' + type;
            notification.style.display = 'block';
            
            // Auto hide after 5 seconds
            setTimeout(hideNotification, 5000);
        }

        // Function to hide notification
        function hideNotification() {
            const notification = document.getElementById('notification');
            notification.style.display = 'none';
        }

        // Password visibility toggling
        function setupPasswordToggling() {
            const toggleButtons = document.querySelectorAll('.toggle-password');
            
            toggleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const input = this.previousElementSibling;
                    const icon = this.querySelector('i');
                    
                    if (input.type === 'password') {
                        input.type = 'text';
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    } else {
                        input.type = 'password';
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                });
            });
        }

        // Form validation and submission
        document.addEventListener('DOMContentLoaded', function() {
            // Show login form by default
            document.getElementById('login-toggle').checked = true;
            
            // Setup password toggling
            setupPasswordToggling();
            
            // Add form validation
            const forms = {
                login: document.getElementById('loginForm'),
                register: document.getElementById('registerForm'),
                reset: document.getElementById('resetForm')
            };
            
            // Login form submission
            forms.login.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                if (!email || !password) {
                    showNotification('Please fill in all fields', 'error');
                    return;
                }
                
                // Simulate successful login
                showNotification('Login successful! Redirecting...', 'success');
                this.reset();
            });
            
            // Register form submission
            forms.register.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('register-name').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirm = document.getElementById('register-confirm').value;
                
                if (!name || !email || !password || !confirm) {
                    showNotification('Please fill in all fields', 'error');
                    return;
                }
                
                if (password !== confirm) {
                    showNotification('Passwords do not match!', 'error');
                    document.getElementById('register-confirm').style.borderColor = 'red';
                    return;
                }
                
                // Simulate successful registration
                showNotification('Registration successful! Please check your email to verify your account.', 'success');
                this.reset();
                
                // Switch to login after a delay
                setTimeout(showLogin, 3000);
            });
            
            // Reset form submission
            forms.reset.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('reset-email').value;
                
                if (!email) {
                    showNotification('Please enter your email', 'error');
                    return;
                }
                
                // Simulate successful reset request
                showNotification('Password reset instructions sent to your email', 'success');
                this.reset();
                
                // Switch to login after a delay
                setTimeout(showLogin, 3000);
            });
        });