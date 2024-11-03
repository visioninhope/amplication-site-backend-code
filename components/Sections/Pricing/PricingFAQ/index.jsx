import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import * as analytics from '../../../../lib/analytics';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <a onClick={toggleOpen} className="cursor-pointer w-full">
      <div className="flex flex-col justify-between  items-start border border-solid border-dark-black-70  rounded-lg p-4">
        <div className="flex flex-row w-full">
          <span className="flex-1 text-lg text-white pr-4 ">{question}</span>
          <span
            className={`text-md text-white self-start justify-self-end transition-transform duration-400 ease-in  ${
              !isOpen ? 'rotate-[270deg]' : 'rotate-90'
            } `}
          >
            &lt;
          </span>
        </div>

        <div
          className={`text-sm text-gray overflow-hidden transition-all duration-400 ease-in  ${
            !isOpen ? 'max-h-0 pt-0' : 'max-h-[500px] pt-4 '
          } `}
        >
          {answer}
        </div>
      </div>
    </a>
  );
};

const PricingFAQ = () => {
  const handleBookDemoClick = useCallback(() => {
    analytics.event({
      action: 'bookDemoClicked',
      params: {
        buttonLocation: 'faq',
      },
    });
  }, []);

  return (
    <div className="max-w-[960px] m-auto">
      <h2 className="my-12 mx-auto  text-[32px] !font-semibold leading-[48px] tracking-normal text-center ">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-2">
        <Question
          question="What plan is best for me and my team?"
          answer={
            <div>
              Choosing the right plan depends on your project needs:
              <ul>
                <li>
                  <p>
                    <br />
                    <strong>Free Plan:</strong>
                    <br />
                    Ideal for individual looking to harness the power of our
                    code generation engine. This plan includes core features
                    like Node.js support, database integration, roles &
                    permissions, GraphQL & REST APIs, and unlimited code
                    generation builds.
                  </p>
                </li>
                <li>
                  <p>
                    <br />
                    <strong>Enterprise Plan:</strong>
                    <br />
                    Best for organizations seeking to take their platform
                    engineering to the next level, standardize backend services,
                    and streamline development processes. This plan includes
                    features for creating live templates that embed your
                    organization’s best practices and standards, building
                    private plugins tailored to your specific needs, and gaining
                    visibility into all services through a comprehensive service
                    catalog, all while actively reducing technical debt. It also
                    offers advanced security features like SSO and 2FA, as well
                    as premium support.{' '}
                    <Link
                      href={process.env.NEXT_PUBLIC_BOOK_MEETING_URL}
                      passHref={true}
                    >
                      <a
                        onClick={handleBookDemoClick}
                        className="text-secondary-purple"
                        target="_blank"
                      >
                        Contact us for a personalized quote
                      </a>
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </div>
          }
        />
        <Question
          question="We have our own best practices and standards - can we ask Amplication to generate the code in our own flavor?"
          answer={
            <div>
              Absolutely! Amplication allows you to customize code generation to
              match your organization&apos;s unique best practices and
              standards. You can use private plugins to extend
              Amplication&apos;s capabilities, integrating your own tools,
              workflows, and coding conventions. Additionally, you can create
              custom live templates that reflect your specific requirements,
              ensuring that the generated services continuously follow your
              evolving guidelines. This flexibility ensures that the services
              generated by Amplication align perfectly with your
              organization&apos;s flavor and development preferences.
            </div>
          }
        />
        <Question
          question="How can Amplication help us maintain our best practices and standards while reducing technical debt?"
          answer={
            <div>
              Amplication streamlines the process of maintaining best practices
              and standards across your development projects by offering live
              templates that embed organizational guidelines and are easily
              updatable. This ensures all services are consistently aligned with
              the latest standards. Additionally, Amplication provides technical
              debt monitoring and proactive alerts, helping teams address
              discrepancies and keep technical debt under control.
            </div>
          }
        />
        <Question
          question="Can I pay for Amplication through my AWS account (AWS billing)?"
          answer={
            <div>
              Yes, we support this billing method. Please contact us for
              assistance.
            </div>
          }
        />
        <Question
          question="We are working with the enterprise edition of GitLab / BitBucket, will it work with Amplication?"
          answer={
            <div>
              The Enterprise Plan Supports Bitbucket, AWS CodeCommit, GitLab,
              Azure DevOps, and any other Git provider.
            </div>
          }
        />
        <Question
          question="Can you assist with deploying to various cloud providers like AWS?"
          answer={
            <div>
              Yes, Amplication offers plugins and guides for deployment to
              services such as Kubernetes, Docker Desktop, and AWS&apos;s ECS.
              You can also create a custom plugin for other cloud providers.
            </div>
          }
        />
        <Question
          question="How can I customize the generated code, and will the generated code override my changes?"
          answer={
            <div>
              You can customize the generated code, and Amplication&apos;s Smart
              Git Sync ensures your custom code takes precedence over the
              generated code, so your changes won&apos;t be overridden.
            </div>
          }
        />
        <Question
          question="Does Amplication support advanced security features like 2FA, audit logs, and SSO for organizational security concerns?"
          answer={
            <div>
              Yes, the Enterprise plan includes support for Single Sign-On
              (SSO), audit logs, and Two-Factor Authentication (2FA).
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PricingFAQ;
