package com.github.lowouu.igHacks2024;

/* Lina Liu
 * 08/17/2024
 * Web Scraper
 */

import org.jsoup.*; 
import org.jsoup.nodes.*; 

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WebScraper {
	
	 public static void main(String[] args) throws IOException {
		 
		 String text;
		 Document doc;
		 
		 try {
	            // Connect to the URL and get the HTML document
			    //^
	            doc = Jsoup.connect("https://stardewvalley.fandom.com/wiki/Lingcod#:~:text=The%20Lingcod%20is%20a%20fish,Cart%20for%20360%2D1%2C000g.")
	                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
	                .header("Accept-Language", "*")
	                .get();
	            

	            // Extract and output text into the txt file
	            //^
	            text = doc.text();
	            
	            try (BufferedWriter writer = new BufferedWriter(new FileWriter("WebScraped.txt"))) {
	                writer.write(text);
	            }
	            System.out.println(text);
	     }
		 
		 catch (IOException e) {
	            e.printStackTrace();
	     }	 
	 }
}
