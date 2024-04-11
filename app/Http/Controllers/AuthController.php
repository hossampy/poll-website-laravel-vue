<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request){
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);
        /** @var \App\Models\User $user */

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);

    }
    public function login(Request $request)
    {
        // Validate the incoming request data
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required',
            ],
            'remember' => 'boolean'
        ]);

        // Extract the 'remember' field from the credentials, default to false if not provided
        $remember = $credentials['remember'] ?? false;

        // Remove the 'remember' field from the credentials array
        unset($credentials['remember']);

        // Attempt to authenticate the user using the provided credentials
        if (!Auth::attempt($credentials, $remember)) {
            // If authentication fails, return a response with an error message
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        }

        // If authentication succeeds, retrieve the authenticated user
        $user = Auth::user();

        // Generate a new API token for the user
        $token = $user->createToken('main')->plainTextToken;

        // Return a response with the authenticated user and the token
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
}
