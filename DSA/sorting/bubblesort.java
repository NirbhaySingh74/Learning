package DSA.sorting;

import java.util.Arrays;

public class bubblesort {
    public static int[] bubble_sort(int arr[], int n) {
        for (int i = n - 1; i >= 0; i--) {
            for (int j = 0; j <= i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int arr[] = { 13, 46, 24, 52, 20, 9 };
        System.out.println(Arrays.toString(bubble_sort(arr, arr.length)));
    }
}
