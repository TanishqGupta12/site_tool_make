// Import NextAuth
import NextAuth from 'next-auth';

// Extend the next-auth module
declare module 'next-auth' {
  // Extend the User interface with your custom properties
  interface User {
    id: number;
    email?: string;
    salutation?: string;
    first_name?: string;
    last_name?: string;
    position?: string;
    organization?: string;
    address?: string;
    city?: string;
    mobile?: string;
    online_status?: string;
    locale?: string;
    otp?: string;
    avatar?: string;
    authentication_token?: string;
    custom_fields?: string;
    encrypted_password?: string;
    reset_password_token?: string;
    reset_password_sent_at?: Date;
    current_event_id?: string;
    createdAt: Date;
    updatedAt: Date;
    roleId?: number;
    f1?: string;
    f2?: string;
    f3?: string;
    f4?: string;
    f5?: string;
    f6?: string;
    f7?: string;
    f8?: string;
    f9?: string;
    f10?: string;
    f11?: string;
    f12?: string;
    f13?: string;
    f14?: string;
    f15?: string;
    events: EventUser[];
    QuizAttemptResults: QuizAttemptResult[];
    QuizAttempts: QuizAttempt[];
    QuizResults: QuizResult[];
    role?: Role;
  }

  // Extend the Session interface to include your custom User type
  interface Session {
    user: User; // Replace the default `user` with your custom `User` interface
  }

  // Optionally extend the JWT interface if you are using custom tokens
  interface JWT {
    user: User; // Add user to JWT token to preserve user data
  }
}
