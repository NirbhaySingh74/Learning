package DSA.BASICMATH;

public class checkArmstrong {

    public static boolean isArmstrong(int num) {
        int originalNum = num;
        int digits = (int) Math.log10(num) + 1;
        int sum = 0;
        while (num != 0) {
            int reminder = num % 10;
            // System.out.println(reminder);
            sum += Math.pow(reminder, digits);
            // System.out.println("sum" + sum);
            num = num / 10;
        }

        return sum == originalNum;
    }

    public static void main(String[] args) {
        System.out.println(isArmstrong(153));
        System.out.println(isArmstrong(9474));
        System.out.println(isArmstrong(123));
    }

}
