
export default function authentication_token(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    // Convert last numeric part to number and round to nearest 10
    let numbers = password.replace(/\D/g, ''); // Extract numbers
    if (numbers) {
        let roundedNumber = Math.round(parseInt(numbers) / 10) * 10;
        password = password.replace(numbers, roundedNumber.toString());
    }
    
    return password;
}