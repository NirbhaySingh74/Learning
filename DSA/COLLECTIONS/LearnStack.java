package DSA.COLLECTIONS;

import java.util.Stack;

public class LearnStack {
    public static void main(String[] args) {
        Stack<String> fruits = new Stack<>();
        fruits.push("papaya");
        fruits.push("Apple");
        fruits.push("orange");
        fruits.push("banana");
        // System.out.println(fruits);
        System.out.println(fruits.peek());
        // remove top element
        System.out.println(fruits.pop());
        System.out.println(fruits);
    }
}
