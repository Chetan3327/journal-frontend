import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinReviewer = () => {
  const navigate = useNavigate()
  return (
    <div className="join-as-reviewer">
      <h2>Join as Reviewer</h2>
      <p>
        BODH: BPIT International Journal of Technology and Management (BBIJTM) is
        a leading international research journal catering to different subject areas.
        All the papers published in the Journal are reviewed by a panel of reviewers
        for their scientific merit. The Manuscript decisions are solely based on the
        results of the peer reviews.
      </p>

      <p>We invite Reviewers with the best academic qualification for reviewing papers in the area of their interest. Approved reviewers will receive papers in their field for reviewing purposes.</p>
      <button onClick={() => navigate('/ReviewerForm')}>Join as Reviewer</button>
      <h3>Responsibilities of Reviewers:</h3>
      <ul>
        <li>Examine in detail the assigned articles for review by Chief Editor or Publisher.</li>
        <li>Review a minimum of 3 articles in a calendar year.</li>
        <li>Examine the manuscript as per author guidelines.</li>
        <li>Examine the aim and objectives of the work carried out.</li>
        <li>Check the correctness of the conclusions, results, and recommendations along with references.</li>
        <li>Perform copyediting and proofreading in accordance with publishing standards of the manuscripts, especially grammar, punctuation, and spelling.</li>
        <li>Ensure the coverage areas of the manuscript are relevant to the scopes of journals.</li>
        <li>Check for plagiarism-related issues, if any.</li>
        <li>Provide suggestions based on the structure of the manuscript. There is no limit for the maximum inputs in general.</li>
      </ul>

      <h3>Benefits of Reviewers:</h3>
      <ul>
        <li>Get prestigious professional recognition and a certificate of appointment as a reviewer.</li>
        <li>Receive a 50% waiver for your own manuscripts as the main author/corresponding author in any of our journals.</li>
        <li>Enhance your knowledge and quality through various research work.</li>
      </ul>

      <h3>Agreement:</h3>
      <ul>
        <li>The position of a Reviewer is honorary, and no remuneration will be provided for the job. However, the publisher can provide special allowances for quality services.</li>
        <li>This agreement may be terminated at any time due to a lack of mutual understanding on common aspects, as per the policies of the publisher, or due to repetitive unsatisfactory performance of the assigned work.</li>
        <li>A Reviewer agrees to display their name, photograph, and other contact details on the website of the site and hardcopy of the journal.</li>
        <li>A Reviewer agrees to maintain publication ethics and will never disclose the author's name or contact details to anyone except the publisher.</li>
      </ul>

      <h3>Eligibility of Reviewer:</h3>
      <ul>
        <li>Should be an expert with experience in the specialist field related to the journal.</li>
        <li>Should have a minimum of 2 years of professional experience in research and publication with at least 5 publications in peer-reviewed journals.</li>
        <li>Preferences will be given to individuals who have the enthusiasm to undertake the reviewer role, our Fellow members, or Life Members.</li>
      </ul>
    </div>
  );
};


export default JoinReviewer
