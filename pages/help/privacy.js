import React from 'react'
import Head from 'next/head'

const privacy = () => {
  return (
    <div>
        <Head>
            <title>Privacy Policy | Exam Rush</title>
        </Head>
      <div className="max-w-4xl mx-auto p-16 py-36">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy for ExamRush</h1>
          <p className="text-sm mb-2">Effective Date: June 30, 2024</p>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
              <p>Welcome to ExamRush. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, <a href="http://www.examrush.live" className="text-purple-600 underline">www.examrush.live</a>, and use our services.</p>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
              <ul className="list-disc list-inside">
                  <li><strong>Personal Information:</strong> When you register on our website, we may collect personal details such as your name, email address, and phone number.</li>
                  <li><strong>Educational Information:</strong> Information related to your academic background, study habits, and preferences.</li>
                  <li><strong>Usage Data:</strong> Details of your visits to our website and the resources you access, including but not limited to, traffic data, location data, and other communication data.</li>
                  <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website. Cookies are small data files stored on your device.</li>
              </ul>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside">
                  <li>To provide and maintain our services.</li>
                  <li>To notify you about changes to our services.</li>
                  <li>To allow you to participate in interactive features of our services.</li>
                  <li>To provide customer support.</li>
                  <li>To gather analysis or valuable information so that we can improve our services.</li>
                  <li>To monitor the usage of our services.</li>
                  <li>To detect, prevent, and address technical issues.</li>
              </ul>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
              <p>We do not share your personal information with third parties except in the following situations:</p>
              <ul className="list-disc list-inside">
                  <li>With your consent.</li>
                  <li>To comply with legal obligations.</li>
                  <li>To protect and defend the rights or property of ExamRush.</li>
                  <li>To prevent or investigate possible wrongdoing in connection with our services.</li>
                  <li>To protect the personal safety of users of our services or the public.</li>
              </ul>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
              <p>You have the right to access, update, or delete the personal information we have on you. If you wish to exercise these rights, please contact us at [Insert Contact Information].</p>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc list-inside">
                  <li>By email: [Insert Email Address]</li>
                  <li>By visiting this page on our website: [Insert Website URL]</li>
                  <li>By phone number: [Insert Phone Number]</li>
              </ul>
          </section>
      </div>
    </div>
  )
}

export default privacy