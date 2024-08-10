const emails = [
    {
        subject: "Meeting Reminder",
        body: "Just a reminder about our meeting tomorrow at 10 AM. Just a reminder about our meeting tomorrow at 10 AM.",
        senderEmail: "john.doe@example.com",
        cc: ["jane.doe@example.com"],
        bcc: ["boss@example.com"],
        time: new Date("2023-07-01T09:00:00")
    },
    {
        subject: "Project Update",
        body: "The project is on track and will be completed by the end of the week. The project is on track and will be completed by the end of the week.",
        senderEmail: "project.manager@example.com",
        cc: ["team.member@example.com"],
        bcc: [],
        time: new Date("2023-07-01T10:00:00")
    },
    {
        subject: "Holiday Announcement",
        body: "We are pleased to announce a company holiday on July 4th. We are pleased to announce a company holiday on July 4th.",
        senderEmail: "hr@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-01T11:00:00")
    },
    {
        subject: "Weekly Newsletter",
        body: "Here is the weekly newsletter with all the latest updates. Here is the weekly newsletter with all the latest updates.",
        senderEmail: "newsletter@example.com",
        cc: [],
        bcc: ["subscribers@example.com"],
        time: new Date("2023-07-01T12:00:00")
    },
    {
        subject: "Invoice Attached",
        body: "Please find the attached invoice for the services rendered. Please find the attached invoice for the services rendered.",
        senderEmail: "billing@example.com",
        cc: ["accounting@example.com"],
        bcc: [],
        time: new Date("2023-07-01T13:00:00")
    },
    {
        subject: "New Job Opening",
        body: "We have a new job opening for a Fullstack Developer. We have a new job opening for a Fullstack Developer.",
        senderEmail: "careers@example.com",
        cc: ["hr@example.com"],
        bcc: [],
        time: new Date("2023-07-01T14:00:00")
    },
    {
        subject: "Team Outing",
        body: "We are planning a team outing next weekend. We are planning a team outing next weekend.",
        senderEmail: "team.leader@example.com",
        cc: ["team@example.com"],
        bcc: [],
        time: new Date("2023-07-01T15:00:00")
    },
    {
        subject: "Server Maintenance",
        body: "The server will be down for maintenance from 1 AM to 3 AM. The server will be down for maintenance from 1 AM to 3 AM.",
        senderEmail: "it.support@example.com",
        cc: [],
        bcc: ["admin@example.com"],
        time: new Date("2023-07-01T16:00:00")
    },
    {
        subject: "Performance Review",
        body: "Your performance review is scheduled for next Monday. Your performance review is scheduled for next Monday.",
        senderEmail: "manager@example.com",
        cc: ["employee@example.com"],
        bcc: [],
        time: new Date("2023-07-01T17:00:00")
    },
    {
        subject: "Client Feedback",
        body: "The client has provided positive feedback on the recent project. The client has provided positive feedback on the recent project.",
        senderEmail: "client.services@example.com",
        cc: ["team@example.com"],
        bcc: [],
        time: new Date("2023-07-01T18:00:00")
    },
    {
        subject: "Training Session",
        body: "A training session on the new software will be held on Friday. A training session on the new software will be held on Friday.",
        senderEmail: "training@example.com",
        cc: ["staff@example.com"],
        bcc: [],
        time: new Date("2023-07-01T19:00:00")
    },
    {
        subject: "System Upgrade",
        body: "The system upgrade is scheduled for this weekend. The system upgrade is scheduled for this weekend.",
        senderEmail: "it.admin@example.com",
        cc: [],
        bcc: ["tech@example.com"],
        time: new Date("2023-07-01T20:00:00")
    },
    {
        subject: "Office Renovation",
        body: "The office will be undergoing renovation next month. The office will be undergoing renovation next month.",
        senderEmail: "facilities@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-01T21:00:00")
    },
    {
        subject: "Security Alert",
        body: "Please be aware of a recent security alert regarding phishing emails. Please be aware of a recent security alert regarding phishing emails.",
        senderEmail: "security@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-01T22:00:00")
    },
    {
        subject: "Marketing Campaign",
        body: "Our new marketing campaign will launch next week. Our new marketing campaign will launch next week.",
        senderEmail: "marketing@example.com",
        cc: ["sales@example.com"],
        bcc: [],
        time: new Date("2023-07-01T23:00:00")
    },
    {
        subject: "Bug Report",
        body: "A bug has been reported in the latest software release. A bug has been reported in the latest software release.",
        senderEmail: "qa@example.com",
        cc: ["dev.team@example.com"],
        bcc: [],
        time: new Date("2023-07-02T00:00:00")
    },
    {
        subject: "Customer Support",
        body: "A customer has raised a support ticket regarding their account. A customer has raised a support ticket regarding their account.",
        senderEmail: "support@example.com",
        cc: ["customer.care@example.com"],
        bcc: [],
        time: new Date("2023-07-02T01:00:00")
    },
    {
        subject: "Partnership Proposal",
        body: "We would like to propose a partnership with your company. We would like to propose a partnership with your company.",
        senderEmail: "business.dev@example.com",
        cc: ["partner@example.com"],
        bcc: [],
        time: new Date("2023-07-02T02:00:00")
    },
    {
        subject: "Event Invitation",
        body: "You are invited to our annual company event next month. You are invited to our annual company event next month.",
        senderEmail: "events@example.com",
        cc: ["invitees@example.com"],
        bcc: [],
        time: new Date("2023-07-02T03:00:00")
    },
    {
        subject: "Sales Report",
        body: "Attached is the sales report for the last quarter. Attached is the sales report for the last quarter.",
        senderEmail: "sales@example.com",
        cc: ["finance@example.com"],
        bcc: [],
        time: new Date("2023-07-02T04:00:00")
    },
    {
        subject: "New Feature Launch",
        body: "We are excited to announce the launch of a new feature in our product. We are excited to announce the launch of a new feature in our product.",
        senderEmail: "product.team@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-02T05:00:00")
    },
    {
        subject: "Password Reset",
        body: "Your password reset request has been processed. Please follow the instructions to reset your password. Your password reset request has been processed. Please follow the instructions to reset your password.",
        senderEmail: "no-reply@example.com",
        cc: [],
        bcc: [],
        time: new Date("2023-07-02T06:00:00")
    },
    {
        subject: "Policy Update",
        body: "Please review the updated company policies attached. Please review the updated company policies attached.",
        senderEmail: "admin@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-02T07:00:00")
    },
    {
        subject: "Website Downtime",
        body: "Our website will be down for maintenance tonight from 11 PM to 1 AM. Our website will be down for maintenance tonight from 11 PM to 1 AM.",
        senderEmail: "webmaster@example.com",
        cc: [],
        bcc: ["it.support@example.com"],
        time: new Date("2023-07-02T08:00:00")
    },
    {
        subject: "Thank You",
        body: "Thank you for your hard work on the recent project. Thank you for your hard work on the recent project.",
        senderEmail: "ceo@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-02T09:00:00")
    },
    {
        subject: "Survey Invitation",
        body: "Please participate in our customer satisfaction survey. Please participate in our customer satisfaction survey.",
        senderEmail: "survey@example.com",
        cc: ["customers@example.com"],
        bcc: [],
        time: new Date("2023-07-02T10:00:00")
    },
    {
        subject: "New Hire Orientation",
        body: "Welcome to the company! Your orientation is scheduled for next Monday. Welcome to the company! Your orientation is scheduled for next Monday.",
        senderEmail: "hr@example.com",
        cc: ["new.hires@example.com"],
        bcc: [],
        time: new Date("2023-07-02T11:00:00")
    },
    {
        subject: "Meeting Agenda",
        body: "Attached is the agenda for tomorrow's meeting. Attached is the agenda for tomorrow's meeting.",
        senderEmail: "manager@example.com",
        cc: ["team@example.com"],
        bcc: [],
        time: new Date("2023-07-02T12:00:00")
    },
    {
        subject: "Product Recall",
        body: "We are issuing a recall for the following product. Please see the attached document for details. We are issuing a recall for the following product. Please see the attached document for details.",
        senderEmail: "quality.control@example.com",
        cc: ["distributors@example.com"],
        bcc: [],
        time: new Date("2023-07-02T13:00:00")
    },
    {
        subject: "Press Release",
        body: "Please find the latest press release attached. Please find the latest press release attached.",
        senderEmail: "pr@example.com",
        cc: ["media@example.com"],
        bcc: [],
        time: new Date("2023-07-02T14:00:00")
    },
    {
        subject: "Expense Report",
        body: "Please submit your expense reports by the end of the week. Please submit your expense reports by the end of the week.",
        senderEmail: "finance@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-02T15:00:00")
    },
    {
        subject: "Bug Fixes",
        body: "The following bugs have been fixed in the latest update. The following bugs have been fixed in the latest update.",
        senderEmail: "dev.team@example.com",
        cc: ["qa@example.com"],
        bcc: [],
        time: new Date("2023-07-02T16:00:00")
    },
    {
        subject: "Upcoming Webinar",
        body: "Join us for our upcoming webinar on the latest industry trends. Join us for our upcoming webinar on the latest industry trends.",
        senderEmail: "webinars@example.com",
        cc: ["subscribers@example.com"],
        bcc: [],
        time: new Date("2023-07-02T17:00:00")
    },
    {
        subject: "Job Application",
        body: "Thank you for applying for the position. We will review your application and get back to you soon. Thank you for applying for the position. We will review your application and get back to you soon.",
        senderEmail: "careers@example.com",
        cc: [],
        bcc: [],
        time: new Date("2023-07-02T18:00:00")
    },
    {
        subject: "Service Interruption",
        body: "There will be a brief service interruption tomorrow from 2 PM to 3 PM for system upgrades. There will be a brief service interruption tomorrow from 2 PM to 3 PM for system upgrades.",
        senderEmail: "it.support@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-02T19:00:00")
    },
    {
        subject: "Contract Renewal",
        body: "Your contract is up for renewal next month. Please review the attached document. Your contract is up for renewal next month. Please review the attached document.",
        senderEmail: "admin@example.com",
        cc: ["employee@example.com"],
        bcc: [],
        time: new Date("2023-07-02T20:00:00")
    },
    {
        subject: "Sales Promotion",
        body: "We are running a sales promotion for the next two weeks. Check out the attached flyer for more details. We are running a sales promotion for the next two weeks. Check out the attached flyer for more details.",
        senderEmail: "marketing@example.com",
        cc: ["customers@example.com"],
        bcc: [],
        time: new Date("2023-07-02T21:00:00")
    },
    {
        subject: "Order Confirmation",
        body: "Your order has been confirmed. Please find the details attached. Your order has been confirmed. Please find the details attached.",
        senderEmail: "orders@example.com",
        cc: [],
        bcc: [],
        time: new Date("2023-07-02T22:00:00")
    },
    {
        subject: "Job Interview",
        body: "We would like to invite you for an interview next week. Please see the attached document for details. We would like to invite you for an interview next week. Please see the attached document for details.",
        senderEmail: "hr@example.com",
        cc: [],
        bcc: [],
        time: new Date("2023-07-02T23:00:00")
    },
    {
        subject: "Welcome Aboard",
        body: "Welcome to the team! We are excited to have you on board. Welcome to the team! We are excited to have you on board.",
        senderEmail: "ceo@example.com",
        cc: ["new.hires@example.com"],
        bcc: [],
        time: new Date("2023-07-03T00:00:00")
    },
    {
        subject: "Monthly Report",
        body: "Attached is the monthly report for your review. Attached is the monthly report for your review.",
        senderEmail: "manager@example.com",
        cc: ["team@example.com"],
        bcc: [],
        time: new Date("2023-07-03T01:00:00")
    },
    {
        subject: "Urgent: Action Required",
        body: "Please address the urgent issue with the client's account immediately. Please address the urgent issue with the client's account immediately.",
        senderEmail: "support@example.com",
        cc: ["client.services@example.com"],
        bcc: [],
        time: new Date("2023-07-03T02:00:00")
    },
    {
        subject: "Annual Report",
        body: "Please review the attached annual report. Please review the attached annual report.",
        senderEmail: "admin@example.com",
        cc: ["board@example.com"],
        bcc: [],
        time: new Date("2023-07-03T03:00:00")
    },
    {
        subject: "New Policy",
        body: "A new policy has been implemented. Please read the attached document. A new policy has been implemented. Please read the attached document.",
        senderEmail: "hr@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-03T04:00:00")
    },
    {
        subject: "Internal Audit",
        body: "An internal audit will be conducted next week. Please prepare the necessary documents. An internal audit will be conducted next week. Please prepare the necessary documents.",
        senderEmail: "audit@example.com",
        cc: ["finance@example.com"],
        bcc: [],
        time: new Date("2023-07-03T05:00:00")
    },
    {
        subject: "Technical Support",
        body: "Our technical support team is available 24/7. Please contact us if you have any issues. Our technical support team is available 24/7. Please contact us if you have any issues.",
        senderEmail: "support@example.com",
        cc: ["clients@example.com"],
        bcc: [],
        time: new Date("2023-07-03T06:00:00")
    },
    {
        subject: "Project Proposal",
        body: "Attached is the project proposal for your review. Attached is the project proposal for your review.",
        senderEmail: "project.manager@example.com",
        cc: ["client@example.com"],
        bcc: [],
        time: new Date("2023-07-03T07:00:00")
    },
    {
        subject: "Maintenance Notice",
        body: "There will be a maintenance window on Friday from 2 PM to 4 PM. There will be a maintenance window on Friday from 2 PM to 4 PM.",
        senderEmail: "it.admin@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-03T08:00:00")
    },
    {
        subject: "System Outage",
        body: "We are currently experiencing a system outage. Our team is working to resolve the issue. We are currently experiencing a system outage. Our team is working to resolve the issue.",
        senderEmail: "it.support@example.com",
        cc: ["all@example.com"],
        bcc: [],
        time: new Date("2023-07-03T09:00:00")
    },
    {
        subject: "Weekly Update",
        body: "Here is the weekly update on the project status. Here is the weekly update on the project status.",
        senderEmail: "project.manager@example.com",
        cc: ["team@example.com"],
        bcc: [],
        time: new Date("2023-07-03T10:00:00")
    },
    {
        subject: "Job Offer",
        body: "We are pleased to extend a job offer to you. Please review the attached document for details. We are pleased to extend a job offer to you. Please review the attached document for details.",
        senderEmail: "hr@example.com",
        cc: [],
        bcc: [],
        time: new Date("2023-07-03T11:00:00")
    }
];

export default emails;