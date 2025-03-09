export default function authentication_token(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Extract the last numeric part from the password
    let lastNumberMatch = password.match(/\d+$/); // Find the last number in the string

    if (lastNumberMatch) {
        let lastNumber = parseInt(lastNumberMatch[0]); // Convert to number
        let roundedNumber = Math.round(lastNumber / 10) * 10; // Round to nearest 10
        
        // Replace only the numeric part in the password
        password = password.replace(lastNumberMatch[0], roundedNumber.toString());
    }

    return password;
}
