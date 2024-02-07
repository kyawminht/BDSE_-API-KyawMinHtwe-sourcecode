package com.lithan.kyn;

import java.security.SecureRandom;
import java.util.Base64;

public class TokenSecretGenerator {
    public static void main(String[] args) {
        // Define the length of the token secret
        int tokenSecretLength = 32;

        // Generate a random byte array
        byte[] randomBytes = new byte[tokenSecretLength];
        new SecureRandom().nextBytes(randomBytes);

        // Convert the byte array to a base64-encoded string
        String tokenSecret = Base64.getEncoder().encodeToString(randomBytes);

        System.out.println("Generated Token Secret: " + tokenSecret);
    }
}
