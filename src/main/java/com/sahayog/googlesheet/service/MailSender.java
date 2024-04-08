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
import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class MailSender {

    public static void sendMail(String to, String subject, String body) {
        // Sender's email address
        final String from = "sahayogritik@gmail.com";
        // Sender's Gmail password
        final String password = "apby zjfz pjnb vvvl";

        // Setup mail server properties
        Properties properties = new Properties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        // Get the default Session object
        Session session = Session.getDefaultInstance(properties);

        try {
            // Create a MimeMessage object
            MimeMessage message = new MimeMessage(session);

            // Set From: header field
            message.setFrom(new InternetAddress(from));

            // Set To: header field
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject(subject);

            // Set the actual message
            message.setText(body);

            // Send message using Transport
            Transport transport = session.getTransport("smtp");
            transport.connect("smtp.gmail.com", from, password);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();

            System.out.println("Mail sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

//    public static void main(String[] args) {
//        // Example usage
//        sendMail("recipient@example.com", "Test Subject", "This is a test email sent from Java.");
//    }
}

