import java.util.LinkedList;
import java.util.Queue;

public class LearnQueue {
    public static void main(String[] args) {
        // create queue
        Queue<Integer> queue = new LinkedList<>();

        // push element into the queue
        queue.offer(10);
        queue.offer(20);
        queue.offer(30);
        queue.offer(40);
        queue.offer(50);
        // print all element present in queue
        System.out.println(queue);
        // remove elements from queue - so it works on fifo fashion so the element which
        // inserted first will be poppedout first
        System.out.println(queue.poll());
        // get peek element from the queue
        System.out.println(queue.peek());
        System.out.println(queue);
    }
}
