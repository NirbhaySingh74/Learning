import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class LearnHashMap {
    public static void main(String[] args) {
        // key - value
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        map.put("Nirbhay", 10);
        map.put("Kunal", 20);
        map.put("temp", 11);
        map.put("Nirbhay", 11);
        System.out.println(map);

        // search key in map
        // if (map.containsKey("Nirbhay")) {
        // System.out.println("key is present in map");
        // } else {
        // System.out.println("key is not present in map");
        // }

        // get key's value in map if key not present in map it return null
        // System.out.println(map.get("Nirbha"));

        // iterate on hashMap

        // for (Map.Entry<String, Integer> e : map.entrySet()) {
        // System.out.println(e.getKey());
        // System.out.println(e.getValue());
        // }

        // get only keys and iterate on it
        Set<String> keys = map.keySet();
        for (String key : keys) {
            System.out.println(key + map.get(key));
        }

        // remove key
        map.remove("Nirbhay");

        System.out.println(map);
    }
}
