import java.util.HashMap;
import java.util.Map;

public class countFrequency {

    public static void main(String[] args) {
        int arr[] = { 10, 5, 10, 15, 10, 5 };
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int num : arr) {
            if (map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            System.out.println("Element: " + entry.getKey() + ", Frequency: " + entry.getValue());
        }
    }
}
