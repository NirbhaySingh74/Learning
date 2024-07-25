package DSA.BASICMATH;

public class FindGcd {

    public static int FindGCD(int num1, int num2) {
        int ans = 1;
        for (int i = 1; i < num1 / 2; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                ans = i;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        System.out.println(FindGCD(20, 15));
    }
}
