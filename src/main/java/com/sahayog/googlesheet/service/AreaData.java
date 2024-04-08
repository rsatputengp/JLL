/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sahayog.googlesheet.service;

/**
 *
 * @author ritik
 */
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AreaData {

    private JsonObject data;

    public AreaData(String jsonFilePath) throws IOException {
        JsonParser parser = new JsonParser();
        FileReader reader = new FileReader(jsonFilePath);
        this.data = parser.parse(reader).getAsJsonObject();
        reader.close();
    }

    public JsonArray getArea(String zone, String region, String area) {
        JsonObject zoneData = data.getAsJsonObject(zone);
        if (zoneData != null) {
            JsonObject regionData = zoneData.getAsJsonObject(region);
            if (regionData != null) {
                return regionData.getAsJsonArray(area); // Changed to getAsJsonArray
            }
        }
        return null;
    }

    public List<String> getAreasForRegion(String zone, String region) {
        JsonObject zoneData = data.getAsJsonObject(zone);
        if (zoneData != null) {
            JsonObject regionData = zoneData.getAsJsonObject(region);
            if (regionData != null) {
                List<String> areaList = new ArrayList<>();
                for (String area : regionData.keySet()) {
                    areaList.add(area);
                }
                return areaList;
            }
        }
        return null;
    }

    public boolean setArea(String zone, String region, String area, JsonObject newData) throws IOException {
        JsonObject zoneData = data.getAsJsonObject(zone);
        if (zoneData != null) {
            JsonObject regionData = zoneData.getAsJsonObject(region);
            if (regionData != null) {
                regionData.add(area, newData);
                FileWriter writer = new FileWriter("updated_data.json");
                writer.write(data.toString());
                writer.close();
                return true;
            }
        }
        return false;
    }

    public List<String> convertJsonArrayToList(JsonArray jsonArray) {
        List<String> list = new ArrayList<>();
        for (JsonElement jsonElement : jsonArray) {
            list.add(jsonElement.getAsString());
        }
        return list;
    }

    public static void main(String[] args) {
        try {
            AreaData areaData = new AreaData("/home/ritik/NetBeansProjects/JLL/src/main/resources/static/js/zone_Data.json");

            // Getter example
            JsonArray nagpur1Data = areaData.getArea("Zone-1", "Region-2", "Nagpur-1");
            System.out.println(nagpur1Data); // Output: {"0":"Kanhan","1":"Saoner","2":"Parsivani","3":"Ramtek","4":"Kalmeshwar"}
            // Getter example
            List<String> Data = areaData.getAreasForRegion("Zone-1", "Region-2");
            System.out.println(Data); // Output: {"Nagpur-1":["Kanhan","Saoner","Parsivani","Ramtek","Kalmeshwar"],"Nagpur-2":["Hingna","Mouda","Katol","Manish Nagar","Umred","Kuhi"],"Wardha":["Wardha","Seloo","Deoli","Karanja Gadge","Samudrapur"],"Yawatmal-1":["Arni","Dharwa","Digras","Umarkhed","Wani"],"Yawatmal-2":["Kalamb","Pandherkawada","Yawatmal"]}

            // Setter example
//            JsonObject newData = new JsonObject();
//            newData.addProperty("0", "New Area 1");
//            newData.addProperty("1", "New Area 2");
//            areaData.setArea("Zone-1", "Region-2", "Nagpur-1", newData);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
