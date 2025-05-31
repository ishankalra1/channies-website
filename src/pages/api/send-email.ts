import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
    name: string;
    email: string;
    telephone?: string;
    subject: string;
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false,
            message: 'Method not allowed' 
        });
    }

    try {
        const { name, email, telephone, subject, message }: FormData = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All required fields must be filled'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Validate message length
        if (message.length < 20 || message.length > 300) {
            return res.status(400).json({
                success: false,
                message: 'Message must be between 80-300 characters'
            });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: `New Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <h2 style="color: #1a365d; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px;">
                        New Contact Form Submission
                    </h2>
                    <p><strong style="color: #4a5568;">Name:</strong> ${name}</p>
                    <p><strong style="color: #4a5568;">Email:</strong> ${email}</p>
                    ${telephone ? `<p><strong style="color: #4a5568;">Phone:</strong> ${telephone}</p>` : ''}
                    <p><strong style="color: #4a5568;">Subject:</strong> ${subject}</p>
                    <div style="margin-top: 15px;">
                        <strong style="color: #4a5568; display: block; margin-bottom: 5px;">Message:</strong>
                        <div style="background: #f7fafc; padding: 15px; border-radius: 4px; border-left: 4px solid #4299e1;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>
            `,
        });

        return res.status(200).json({ 
            success: true,
            message: 'Email sent successfully' 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Failed to send email. Please try again later.',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}