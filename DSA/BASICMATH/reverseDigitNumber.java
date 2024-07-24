package DSA.BASICMATH;

public class reverseDigitNumber {
    public static void main(String[] args) {
        int num = 48948;
        int reversedNum = 0;

        while (num > 0) {
            int rem = num % 10;
            reversedNum = reversedNum * 10 + rem;
            num = num / 10;
        }

        System.out.println("Reversed Number: " + reversedNum);
    }
}
