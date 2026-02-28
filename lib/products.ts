export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  heroImage: string;
  screenshots: string[];
  videoUrl?: string;
  stats: {
    value: string;
    label: string;
  }[];
  useCases: {
    title: string;
    description: string;
    image: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  }[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  privacyPolicy: string;
  termsOfService: string;
}

export const products: Product[] = [
  {
    slug: 'socialai',
    name: 'SocialAI',
    tagline: 'AI-Powered Social Customer Service Platform',
    description: [
      'SocialAI revolutionizes how brands interact with their customers on social media.',
      'Define AI behavior rules using natural language—no coding required.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '50K+', label: 'Daily Messages' },
      { value: '<2s', label: 'Response Time' },
      { value: '24/7', label: 'Availability' },
    ],
    useCases: [
      {
        title: 'E-commerce Support',
        description: 'Handle order inquiries, returns, and product questions automatically.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      },
      {
        title: 'Brand Management',
        description: 'Monitor mentions, respond to comments, and maintain brand reputation.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        title: 'Lead Generation',
        description: 'Qualify leads and schedule appointments through social conversations.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      },
    ],
    testimonials: [
      {
        quote: 'SocialAI reduced our response time by 80% while maintaining our brand voice perfectly.',
        author: 'Sarah Chen',
        role: 'Head of Customer Success, TechCorp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        quote: 'The AI handles 70% of inquiries automatically. Our team can finally focus on complex issues.',
        author: 'Michael Rodriguez',
        role: 'VP Operations, RetailBrand',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    ],
    features: [
      { icon: 'MessageSquare', title: 'Natural Language Rules', description: 'Define AI behavior in plain English' },
      { icon: 'Clock', title: '24/7 Automation', description: 'Never miss a customer inquiry' },
      { icon: 'Users', title: 'Human Handoff', description: 'Seamless agent takeover' },
      { icon: 'BarChart', title: 'Smart Analytics', description: 'Real-time insights dashboard' },
      { icon: 'Brain', title: 'Multi-Model AI', description: 'GPT-4 & Claude integration' },
      { icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 compliant' },
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'Meta Graph API', 'Redis'],
    privacyPolicy: `# Privacy Policy

**Last Updated: February 2024**

## 1. Introduction

Welcome to SocialAI ("we," "our," or "us"). This Privacy Policy explains how XYVN, Inc. collects, uses, discloses, and safeguards your information when you use our AI-powered social customer service platform ("Service"). Please read this privacy policy carefully. By using SocialAI, you agree to the collection and use of information in accordance with this policy.

## 2. Information We Collect

### 2.1 Account Information
- Email address for authentication
- Name and profile information
- Brand and business information you provide
- Team member details and role assignments

### 2.2 Social Media Data
When you connect your Instagram Business Account or Facebook Page, we access:
- Account identifiers and display names
- Direct messages and messenger conversations
- Post comments and engagement data
- Customer contact information (platform IDs, names, profile pictures)
- Access tokens (encrypted using AES-256 encryption)

### 2.3 Customer Interaction Data
- Message content (text, images, audio, stickers, links)
- Conversation history and metadata
- Customer profiles and interaction summaries
- AI-generated responses and conversation quality flags

### 2.4 AI Training Data
- Notebook rules and configurations you create
- Test cases and expected behaviors
- Feedback on AI response quality
- Uncovered topics and improvement suggestions

### 2.5 Technical Data
- IP addresses and device information
- Browser type and operating system
- Usage patterns and feature engagement
- Error logs and performance metrics

## 3. How We Use Your Information

### 3.1 Service Delivery
- Process and respond to customer messages via AI
- Enable human agent takeover and seamless handoffs
- Generate conversation summaries and customer profiles
- Provide analytics and quality insights

### 3.2 Service Improvement
- Train and improve AI response accuracy
- Identify uncovered topics and suggest rule improvements
- Analyze conversation quality patterns
- Develop new features based on usage data

### 3.3 Communication
- Send service notifications and alerts
- Notify team members of human takeover requests
- Provide system status updates
- Share product updates (with consent)

## 4. Data Storage and Security

### 4.1 Encryption
- All Meta access tokens are encrypted using AES-256 before storage
- Data in transit is protected using TLS 1.3
- Database connections use SSL encryption

### 4.2 Infrastructure
- Data is stored on secure PostgreSQL databases
- Redis caching with encrypted connections
- Deployed on SOC 2 compliant infrastructure (Vercel, Railway)

### 4.3 Access Controls
- Role-based access (Owner, Admin, Editor, Viewer)
- Team member permissions management
- Audit logging for sensitive operations

## 5. Third-Party Services

We integrate with the following third-party services:

### 5.1 Meta Platforms (Facebook/Instagram)
- Purpose: Social media message processing
- Data shared: Messages, comments, user interactions
- Their privacy policy: https://www.facebook.com/privacy/policy

### 5.2 AI Providers (OpenAI/Anthropic)
- Purpose: AI-powered response generation
- Data shared: Conversation context (anonymized)
- Their privacy policies apply to data processing

### 5.3 Analytics Services
- Purpose: Service monitoring and improvement
- Data shared: Aggregated usage statistics

## 6. Data Retention

- **Conversation data**: Retained for the duration of your subscription plus 30 days
- **Customer profiles**: Retained while you maintain an active account
- **AI training data**: Retained indefinitely in anonymized form
- **Access tokens**: Deleted immediately upon disconnection or account deletion

## 7. Your Rights

### 7.1 Access and Portability
- Request a copy of your data in machine-readable format
- Export conversation history and analytics

### 7.2 Correction and Deletion
- Update or correct your account information
- Request deletion of your data (subject to legal requirements)
- Remove connected social media accounts

### 7.3 Consent Management
- Opt-out of non-essential communications
- Modify data processing preferences
- Withdraw consent at any time

## 8. GDPR Compliance

For users in the European Economic Area:
- We process data under legitimate interest and consent bases
- You have rights to access, rectify, erase, and port your data
- You may lodge complaints with your local supervisory authority
- Data transfers outside the EEA are protected by Standard Contractual Clauses

## 9. CCPA Compliance

For California residents:
- You have the right to know what personal information we collect
- You may request deletion of your personal information
- You have the right to opt-out of the sale of personal information
- We do not sell personal information to third parties

## 10. Children's Privacy

SocialAI is not intended for users under 16 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.

## 11. Changes to This Policy

We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of the Service after changes constitutes acceptance.

## 12. Contact Us

For privacy-related inquiries:
- Email: privacy@xyvn.io
- Address: XYVN, Inc., Privacy Department

For data subject requests, please email: dpo@xyvn.io`,
    termsOfService: `# Terms of Service

**Last Updated: February 2024**

## 1. Agreement to Terms

These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and XYVN, Inc. ("Company," "we," "our," or "us") governing your access to and use of the SocialAI platform and services ("Service"). By accessing or using SocialAI, you agree to be bound by these Terms.

## 2. Service Description

SocialAI is an AI-powered social customer service automation platform that enables businesses to:
- Connect Instagram Business and Facebook Page accounts
- Define AI behavior rules using natural language
- Automate customer message responses via AI
- Enable human agent takeover when needed
- Analyze conversation quality and improve AI performance

## 3. Account Registration

### 3.1 Eligibility
- You must be at least 18 years old
- You must have authority to bind the entity you represent
- You must comply with Meta's platform terms

### 3.2 Account Responsibilities
- Provide accurate and complete registration information
- Maintain the security of your account credentials
- Notify us immediately of unauthorized access
- Accept responsibility for all activities under your account

### 3.3 Team Access
- Account owners may invite team members
- Role assignments (Owner, Admin, Editor, Viewer) determine permissions
- Account owners are responsible for team member actions

## 4. Platform Authorization

### 4.1 Meta Platform Connection
- You grant us permission to access your connected social accounts
- You authorize us to send and receive messages on your behalf
- You are responsible for complying with Meta's Terms of Service
- Meta access tokens are stored with AES-256 encryption

### 4.2 Scope of Access
- Direct messages and messenger conversations
- Post comments and engagement data
- Account information and page details
- Customer interaction history

## 5. AI-Powered Features

### 5.1 AI Response Generation
- AI responses are generated based on your notebook rules
- You are responsible for the accuracy of your AI rules
- AI may occasionally produce unexpected or incorrect responses
- Human oversight is recommended for sensitive communications

### 5.2 AI Limitations
- AI cannot guarantee 100% response accuracy
- Complex queries may require human intervention
- AI operates within defined rule parameters
- Fallback mechanisms exist for AI failures

### 5.3 Content Responsibility
- You are responsible for AI-generated content sent to customers
- Review and adjust AI rules regularly for quality assurance
- Monitor conversation quality through our analytics dashboard

## 6. Acceptable Use

### 6.1 Permitted Uses
- Legitimate business customer service operations
- Brand communication and engagement
- Lead generation and qualification
- Customer support automation

### 6.2 Prohibited Uses
- Spam, harassment, or abusive communications
- Misleading or deceptive messaging
- Violation of Meta's platform policies
- Collection of data for unauthorized purposes
- Impersonation or fraudulent activities
- Transmission of malware or harmful content
- Circumventing rate limits or security measures

## 7. Intellectual Property

### 7.1 Our Property
- SocialAI platform, software, and technology
- User interface designs and branding
- AI models and algorithms (as services)
- Documentation and marketing materials

### 7.2 Your Property
- Your business data and customer information
- Notebook rules and configurations you create
- Customizations and content you provide

### 7.3 License Grant
You grant us a limited license to:
- Process your data to provide the Service
- Analyze aggregated usage for service improvement
- Display your brand name in your account interface

## 8. Payment Terms

### 8.1 Subscription Plans
- Services are provided on a subscription basis
- Plan features and pricing are as displayed at signup
- Upgrades take effect immediately
- Downgrades take effect at the next billing cycle

### 8.2 Billing
- Subscription fees are billed in advance
- All fees are non-refundable unless otherwise stated
- We may change pricing with 30 days notice
- Failed payments may result in service suspension

### 8.3 Taxes
- You are responsible for applicable taxes
- Prices displayed may not include taxes
- Tax exemption requires valid documentation

## 9. Service Level

### 9.1 Availability
- We target 99.9% platform uptime
- Scheduled maintenance will be communicated in advance
- Emergency maintenance may occur without notice

### 9.2 Support
- Support is provided via email and in-app channels
- Response times vary by subscription tier
- Premium support available for enterprise plans

## 10. Data and Privacy

### 10.1 Data Handling
- Data is processed according to our Privacy Policy
- We implement industry-standard security measures
- You retain ownership of your business data

### 10.2 Data Export
- You may export your data at any time
- Export formats include standard file types
- Certain processed data may not be exportable

## 11. Limitation of Liability

### 11.1 Service Limitations
TO THE MAXIMUM EXTENT PERMITTED BY LAW:
- The Service is provided "AS IS" without warranties
- We do not guarantee specific business outcomes
- We are not liable for AI response inaccuracies
- We are not responsible for Meta platform changes

### 11.2 Liability Cap
Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.

### 11.3 Exclusions
We are not liable for:
- Indirect, incidental, or consequential damages
- Loss of profits, data, or business opportunities
- Third-party actions or platform availability
- Force majeure events

## 12. Indemnification

You agree to indemnify and hold harmless XYVN, Inc. from claims arising from:
- Your use of the Service
- Violation of these Terms
- Infringement of third-party rights
- Content transmitted through your account

## 13. Termination

### 13.1 By You
- You may terminate your account at any time
- Cancellation takes effect at the end of the billing period
- Data export is available for 30 days after termination

### 13.2 By Us
We may terminate or suspend your account for:
- Violation of these Terms
- Non-payment of fees
- Abusive or illegal activities
- Extended periods of inactivity

### 13.3 Effect of Termination
- Access to the Service will be revoked
- Your data will be retained for 30 days then deleted
- Confidentiality obligations survive termination

## 14. Dispute Resolution

### 14.1 Governing Law
These Terms are governed by the laws of Delaware, USA.

### 14.2 Arbitration
Disputes shall be resolved through binding arbitration in accordance with AAA Commercial Arbitration Rules.

### 14.3 Class Action Waiver
You waive the right to participate in class action lawsuits.

## 15. General Provisions

### 15.1 Modifications
We may modify these Terms with reasonable notice. Continued use constitutes acceptance.

### 15.2 Severability
Invalid provisions shall be modified to the minimum extent necessary.

### 15.3 Entire Agreement
These Terms constitute the complete agreement between parties.

### 15.4 Assignment
You may not assign these Terms without our consent.

## 16. Contact Information

For questions about these Terms:
- Email: legal@xyvn.io
- Address: XYVN, Inc., Legal Department`,
  },
  {
    slug: 'vita-ai',
    name: 'Vita AI',
    tagline: 'Your Personal AI Nutrition & Health Coach',
    description: [
      'Transform your health journey with AI-powered nutrition tracking.',
      'Snap a photo, get instant nutritional insights and personalized recommendations.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    ],
    stats: [
      { value: '95%', label: 'Food Recognition' },
      { value: '1M+', label: 'Foods in Database' },
      { value: '10', label: 'Languages' },
      { value: '4.8★', label: 'App Store Rating' },
    ],
    useCases: [
      {
        title: 'Weight Management',
        description: 'Track calories and macros effortlessly to reach your goals.',
        image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop',
      },
      {
        title: 'Fitness Nutrition',
        description: 'Optimize your diet for peak athletic performance.',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      },
      {
        title: 'Health Monitoring',
        description: 'Manage dietary needs for diabetes, allergies, or medical conditions.',
        image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop',
      },
    ],
    testimonials: [
      {
        quote: 'Lost 20 pounds in 3 months! The AI coach kept me accountable and motivated.',
        author: 'Jennifer Park',
        role: 'Fitness Enthusiast',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      },
      {
        quote: 'Finally an app that understands Asian cuisine! Perfect for tracking my meals.',
        author: 'David Liu',
        role: 'Software Engineer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
    ],
    features: [
      { icon: 'Camera', title: 'Photo Recognition', description: 'Instant food identification' },
      { icon: 'TrendingUp', title: 'Progress Tracking', description: 'Visualize your journey' },
      { icon: 'MessageCircle', title: 'AI Coach', description: 'Personalized guidance' },
      { icon: 'Activity', title: 'Health Sync', description: 'Apple Health & Google Fit' },
      { icon: 'Target', title: 'Smart Goals', description: 'Adaptive calorie targets' },
      { icon: 'Globe', title: 'Multi-Language', description: '10 languages supported' },
    ],
    techStack: ['Flutter', 'Dart', 'Supabase', 'OpenAI', 'TensorFlow', 'HealthKit'],
    privacyPolicy: `# Privacy Policy

**Last Updated: February 2024**

## 1. Introduction

Welcome to Vita AI ("we," "our," or "us"). This Privacy Policy explains how XYVN, Inc. collects, uses, discloses, and safeguards your information when you use our AI-powered nutrition and health management mobile application ("App"). We are committed to protecting your health data with the highest standards of privacy and security.

## 2. Information We Collect

### 2.1 Personal Profile Information
- Gender, age, height, and weight
- Activity level and fitness goals
- Dietary preferences and restrictions
- Health conditions and allergies
- Language preference

### 2.2 Health and Nutrition Data
- Food photos and meal descriptions
- Nutritional intake records (calories, macros, micronutrients)
- Weight tracking history
- Body Mass Index (BMI) calculations
- Daily calorie and nutrition goals

### 2.3 Activity Data
When you grant permission, we collect:
- Step count from Apple HealthKit (iOS)
- Step count from Google Fit (Android)
- Daily activity summaries

### 2.4 AI Interaction Data
- Conversations with AI Coach
- Food recognition results and corrections
- AI-generated meal recommendations
- Personalized nutrition suggestions
- User feedback on AI responses

### 2.5 Technical Data
- Device identifiers (securely stored via flutter_secure_storage)
- App version and operating system
- Crash reports and error logs
- Feature usage analytics
- Push notification tokens (Firebase FCM)

### 2.6 Optional Data
- Photos uploaded for feedback/support
- User-submitted feedback and suggestions
- Recipe preferences and favorites

## 3. How We Use Your Information

### 3.1 Core Service Delivery
- AI-powered food recognition and nutritional analysis
- Personalized calorie and macro recommendations
- BMR (Basal Metabolic Rate) and TDEE calculations
- Progress tracking and health insights
- AI Coach personalized guidance

### 3.2 Health Monitoring
- Track weight changes over time
- Monitor nutritional intake patterns
- Analyze step count and activity levels
- Generate daily and weekly health summaries

### 3.3 Personalization
- Customize AI Coach communication style
- Adapt recommendations to your goals
- Tailor food suggestions to dietary preferences
- Localize content for your language (10 languages supported)

### 3.4 Service Improvement
- Improve food recognition accuracy
- Enhance AI response quality
- Develop new features based on usage patterns
- Analyze aggregated health trends (anonymized)

### 3.5 Communication
- Send personalized health reminders (with permission)
- Deliver AI Coach notifications via Firebase FCM
- Provide app updates and feature announcements
- Respond to support inquiries

## 4. Data Storage and Security

### 4.1 Secure Storage
- Device identifiers stored via flutter_secure_storage
- Backend data stored on Supabase (PostgreSQL) with encryption
- Cloudflare Workers for secure API processing
- All data transmitted over HTTPS/TLS

### 4.2 Local Storage
- AI Coach conversation history stored locally (SharedPreferences)
- Meal photos cached temporarily on device
- User preferences synced to secure backend

### 4.3 Health Data Protection
- Health data is never sold to third parties
- AI models process data without retaining personal identifiers
- Aggregated insights are anonymized before analysis

## 5. Third-Party Services

### 5.1 AI Providers
- **OpenAI**: Food recognition and AI Coach conversations
- **DeepSeek**: Alternative AI processing for specific regions
- Data shared: Food images, conversation context (anonymized)
- AI providers do not retain your personal health data

### 5.2 Health Platforms
- **Apple HealthKit** (iOS): Step count synchronization
- **Google Fit** (Android): Activity data integration
- Data is read-only and synced with your explicit permission

### 5.3 Payment Processing
- **RevenueCat**: Subscription management
- **Apple App Store / Google Play**: In-app purchases
- Payment information is processed directly by Apple/Google

### 5.4 Analytics and Notifications
- **Firebase Cloud Messaging**: Push notifications
- Analytics data is aggregated and anonymized

## 6. Data Retention

- **Account data**: Retained while your account is active
- **Nutrition history**: Retained for the lifetime of your account
- **AI conversation history**: Stored locally, cleared on app uninstall
- **Activity data**: Synced daily, historical data retained
- **After account deletion**: All personal data deleted within 30 days

## 7. Your Rights and Controls

### 7.1 Access and Export
- View all your nutrition and health data in the app
- Export your meal history and progress data
- Request a copy of your complete data file

### 7.2 Correction and Deletion
- Edit meal entries and nutritional data
- Correct personal profile information
- Delete your entire account and all associated data

### 7.3 Permission Management
- Control HealthKit/Google Fit data access
- Manage push notification preferences
- Adjust data sharing settings

### 7.4 Account Deletion
- Delete your account directly from the app settings
- Compliant with Apple App Store and Google Play requirements
- All personal data permanently removed upon deletion

## 8. International Data Transfers

Vita AI is available globally with support for 10 languages. Your data may be processed in different regions to provide the service. We ensure appropriate safeguards are in place for international data transfers.

## 9. Children's Privacy

Vita AI is not intended for users under 13 years of age. We do not knowingly collect personal information from children. Parents or guardians who believe their child has provided us with personal information should contact us for data removal.

## 10. GDPR Compliance (EU Users)

For users in the European Economic Area:
- **Legal basis**: Consent and legitimate interest for service provision
- **Rights**: Access, rectification, erasure, restriction, portability, objection
- **Data Protection Officer**: dpo@xyvn.io
- **Supervisory authority**: You may lodge complaints with your local authority

## 11. CCPA Compliance (California Users)

For California residents:
- **Right to know**: Information about data collection practices
- **Right to delete**: Request deletion of personal information
- **Right to opt-out**: We do not sell your personal information
- **Non-discrimination**: Equal service regardless of privacy choices

## 12. Health Data Notice

Your health and nutrition data is particularly sensitive. We commit to:
- Never selling your health data to third parties
- Never using your data for insurance or employment purposes
- Providing transparent control over your health information
- Maintaining strict access controls on health data

## 13. Changes to This Policy

We may update this Privacy Policy to reflect changes in our practices. Significant changes will be notified through the app or email. Continued use of Vita AI after changes constitutes acceptance of the updated policy.

## 14. Contact Us

For privacy-related inquiries:
- **Email**: privacy@xyvn.io
- **Support**: In-app feedback feature
- **Data requests**: dpo@xyvn.io

We respond to all privacy inquiries within 30 days.`,
    termsOfService: `# Terms of Service

**Last Updated: February 2024**

## 1. Agreement to Terms

These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and XYVN, Inc. ("Company," "we," "our," or "us") governing your use of the Vita AI mobile application ("App"). By downloading, installing, or using Vita AI, you agree to be bound by these Terms.

## 2. Service Description

Vita AI is an AI-powered nutrition and health management application that provides:
- AI food recognition via photo or text description
- Nutritional analysis and calorie tracking
- Weight and health progress monitoring
- Step counting via HealthKit/Google Fit integration
- Personalized AI Coach for nutrition guidance
- Recipe recommendations and meal planning
- Multi-language support (10 languages)

## 3. Eligibility

### 3.1 Age Requirements
- You must be at least 13 years old to use Vita AI
- Users under 18 should have parental consent
- Age-restricted features may have additional requirements

### 3.2 Health Disclaimer
- Vita AI is not a medical device or service
- The App does not provide medical diagnosis or treatment
- Consult healthcare professionals for medical advice
- AI recommendations are for informational purposes only

## 4. Account Creation

### 4.1 Device-Based Accounts
- Accounts are created automatically based on device ID
- No email or password registration required
- Device identifiers are securely stored

### 4.2 Account Security
- You are responsible for maintaining device security
- Do not share your device with unauthorized users
- Notify us of any suspected unauthorized access

## 5. Subscription and Payment

### 5.1 Free and Premium Features
- Basic features are available for free
- VIP subscription unlocks premium features
- Subscription plans and pricing displayed in the App

### 5.2 In-App Purchases
- Payments processed through Apple App Store or Google Play
- Subscriptions renew automatically unless canceled
- Cancel anytime through your device's subscription settings

### 5.3 Refunds
- Refund policies are governed by Apple/Google
- Contact Apple Support or Google Play for refund requests
- We cannot process refunds directly

### 5.4 Price Changes
- Subscription prices may change with notice
- Existing subscriptions honored until renewal
- Continued use after price changes constitutes acceptance

## 6. AI-Powered Features

### 6.1 Food Recognition
- AI analyzes photos to identify foods and estimate nutrition
- Accuracy may vary based on image quality and food type
- Users can manually correct AI identifications
- Nutritional data is estimates, not precise measurements

### 6.2 AI Coach
- Provides personalized nutrition and health guidance
- Responses generated by AI (OpenAI/DeepSeek)
- Not a substitute for professional medical advice
- Conversation style can be customized in settings

### 6.3 Limitations
- AI may occasionally provide inaccurate information
- Complex dietary needs require professional consultation
- AI cannot diagnose health conditions
- Results should be verified with healthcare providers

## 7. Health Platform Integration

### 7.1 Apple HealthKit (iOS)
- Optional integration to read step count data
- Data is read-only; we do not write to HealthKit
- Disable at any time in iOS Health app settings

### 7.2 Google Fit (Android)
- Optional integration to read activity data
- Requires explicit user permission
- Revoke access through Google Fit settings

### 7.3 Data Sync
- Activity data synced automatically when permitted
- Previous day's data retrieved on app launch
- Historical data retained for progress tracking

## 8. User Content

### 8.1 Food Photos
- You retain ownership of photos you capture
- Grant us license to process photos for AI analysis
- Photos may be temporarily stored for processing

### 8.2 Feedback and Suggestions
- Submitted feedback becomes our property
- We may use feedback to improve the App
- You waive any claims to submitted suggestions

### 8.3 Prohibited Content
- Do not upload inappropriate or offensive images
- Do not attempt to manipulate AI with harmful content
- Violations may result in account termination

## 9. Acceptable Use

### 9.1 Permitted Uses
- Personal health and nutrition tracking
- Setting and monitoring fitness goals
- Accessing AI-powered dietary guidance
- Sharing progress with healthcare providers

### 9.2 Prohibited Uses
- Reverse engineering or modifying the App
- Attempting to access other users' data
- Using the App for commercial purposes without permission
- Distributing malware or harmful code
- Violating applicable laws or regulations

## 10. Intellectual Property

### 10.1 Our Property
- Vita AI app, design, and branding
- AI models and algorithms (as services)
- Recipe content and nutritional databases
- Marketing materials and documentation

### 10.2 Your Property
- Your personal health and nutrition data
- Photos you capture (you retain ownership)
- Custom settings and preferences

### 10.3 Open Source
- Certain components may use open-source licenses
- Open-source attributions available in App settings

## 11. Health and Medical Disclaimer

### 11.1 Not Medical Advice
VITA AI IS NOT A MEDICAL SERVICE. THE APP PROVIDES GENERAL NUTRITION INFORMATION AND SHOULD NOT BE USED AS A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.

### 11.2 Consult Professionals
- Always consult healthcare providers for medical conditions
- Discuss dietary changes with doctors or dietitians
- Do not rely solely on AI recommendations for health decisions

### 11.3 Emergency Situations
- Do not use Vita AI for medical emergencies
- Contact emergency services for urgent health issues
- The App cannot provide emergency medical guidance

## 12. Limitation of Liability

### 12.1 Service Provided "As Is"
THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

### 12.2 Liability Limitations
TO THE MAXIMUM EXTENT PERMITTED BY LAW:
- We are not liable for health outcomes from using the App
- We are not responsible for AI accuracy or recommendations
- We are not liable for third-party platform issues
- Total liability limited to amounts paid in the past 12 months

### 12.3 Exclusions
We are not liable for:
- Indirect, incidental, or consequential damages
- Loss of data or health information
- Decisions made based on AI recommendations
- Third-party service interruptions

## 13. Indemnification

You agree to indemnify and hold harmless XYVN, Inc. from claims arising from:
- Your use of the App
- Violation of these Terms
- Your health decisions based on App information
- Content you submit through the App

## 14. Termination

### 14.1 By You
- Delete your account through App settings
- Uninstall the App at any time
- Data deletion processed within 30 days

### 14.2 By Us
We may terminate your account for:
- Violation of these Terms
- Abusive or harmful behavior
- Extended periods of inactivity
- Legal or regulatory requirements

### 14.3 Effect of Termination
- Access to the App will be revoked
- Your data will be deleted per our Privacy Policy
- Subscription cancellation required separately

## 15. Changes to Terms

We may modify these Terms with notice through the App. Continued use after changes constitutes acceptance. Material changes will be communicated clearly.

## 16. Dispute Resolution

### 16.1 Governing Law
These Terms are governed by the laws of Delaware, USA.

### 16.2 Informal Resolution
Contact us first to resolve disputes informally: legal@xyvn.io

### 16.3 Arbitration
Unresolved disputes shall be settled by binding arbitration under AAA rules.

### 16.4 Class Action Waiver
You agree to resolve disputes individually, not as part of any class action.

## 17. General Provisions

### 17.1 Entire Agreement
These Terms constitute the complete agreement between you and us.

### 17.2 Severability
If any provision is invalid, the remainder remains in effect.

### 17.3 No Waiver
Failure to enforce any right does not constitute a waiver.

### 17.4 Assignment
You may not assign these Terms; we may assign to affiliates or successors.

## 18. Contact Information

For questions about these Terms:
- **Email**: legal@xyvn.io
- **Support**: In-app feedback feature
- **Website**: https://xyvn.io/contact`,
  },
  {
    slug: 'seedlight',
    name: 'Seedlight',
    tagline: 'Next-Generation E-commerce Platform',
    description: [
      'Build stunning online stores with enterprise-grade features.',
      'Modern design, lightning performance, global scale.',
    ],
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
    ],
    stats: [
      { value: '3.2x', label: 'Conversion Boost' },
      { value: '<1s', label: 'Page Load' },
      { value: '99.99%', label: 'Uptime' },
      { value: '50+', label: 'Countries' },
    ],
    useCases: [
      {
        title: 'Fashion & Apparel',
        description: 'Showcase collections with immersive product galleries.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      },
      {
        title: 'Electronics',
        description: 'Detailed specs, comparisons, and tech-focused layouts.',
        image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=400&fit=crop',
      },
      {
        title: 'Food & Beverage',
        description: 'Subscription models and recurring order management.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      },
    ],
    testimonials: [
      {
        quote: 'Our conversion rate increased by 45% after migrating to Seedlight.',
        author: 'Amanda Foster',
        role: 'CEO, StyleHouse',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      },
      {
        quote: 'The fastest e-commerce platform we\'ve ever used. Customers love it.',
        author: 'James Wilson',
        role: 'CTO, TechGadgets',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      },
    ],
    features: [
      { icon: 'ShoppingCart', title: 'Smart Cart', description: 'Optimized checkout flow' },
      { icon: 'Palette', title: 'Modern Design', description: 'Beautiful themes' },
      { icon: 'Globe', title: 'Multi-Language', description: 'Global reach' },
      { icon: 'CreditCard', title: 'Payments', description: 'Stripe, PayPal & more' },
      { icon: 'Package', title: 'Inventory', description: 'Real-time tracking' },
      { icon: 'TrendingUp', title: 'Analytics', description: 'Sales insights' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Vercel', 'Redis'],
    liveUrl: 'https://seedlight.tech',
    privacyPolicy: '# Privacy Policy\n\nWe protect your shopping data...',
    termsOfService: '# Terms of Service\n\nBy using Seedlight...',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}