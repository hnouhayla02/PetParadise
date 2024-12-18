import { User } from '../types';

// Simulated auth service (in production, this would connect to a backend)
class AuthService {
  private static instance: AuthService;
  private users: Map<string, User & { password: string }> = new Map(); // Include password in user object
  private currentUser: User | null = null;

  private constructor() {}
  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async signUp(email: string, password: string, name: string): Promise<User> {
    if (this.users.has(email)) {
      throw new Error('Email already exists');
    }

    const user: User & { password: string } = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      password, // Store the password with the user
    };

    this.users.set(email, user);
    this.currentUser = user;
    return user;
  }

  async signIn(email: string, password: string): Promise<User> {
    const user = this.users.get(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Check if the password matches
    if (user.password !== password) {
      throw new Error('Invalid credentials');
    }

    this.currentUser = user;
    return user;
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  async resetPassword(email: string): Promise<void> {
    if (!this.users.has(email)) {
      throw new Error('Email not found');
    }
    // In production, send reset email
  }
}

export const authService = AuthService.getInstance();
