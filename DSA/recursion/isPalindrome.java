package DSA.recursion;

public class isPalindrome {

    public static boolean isPalindrome(String str, int start, int end) {

        if (start >= end) {
            return true;
        }

        if (str.charAt(start) != str.charAt(end)) {
            return false;
        }

        return isPalindrome(str, start + 1, end - 1);
    }

    public static void main(String[] args) {
        String str = "naman";
        System.out.println("Is \"" + str + "\" a palindrome? " + isPalindrome(str, 0, str.length() - 1));

        String str2 = "hello";
        System.out.println("Is \"" + str2 + "\" a palindrome? " + isPalindrome(str2, 0, str2.length() - 1));
    }
}
