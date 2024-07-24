package DSA.BASICMATH;

public class countDigits {
    public static void main(String[] args) {
        int num = 154673745;
        int count = 0;
        while (num > 0) {
            num = num / 10;
            count++;
        }
        System.out.println(count);
    }
}
