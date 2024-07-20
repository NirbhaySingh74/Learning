import java.util.PriorityQueue;
import java.util.Queue;

public class LearnPriorityqueue {
    public static void main(String[] args) {
        // create priority queue
        Queue<Integer> pq = new PriorityQueue<>();
        // add element into priorityqueue
        pq.offer(34);
        pq.offer(22);
        pq.offer(56);
        pq.offer(74);
        // print element - it prints value in ascending order
        System.out.println(pq);
        // remove element
        System.out.println(pq.poll());
        // find peek element
        System.out.println(pq.peek());
        System.out.println(pq);
    }
}
