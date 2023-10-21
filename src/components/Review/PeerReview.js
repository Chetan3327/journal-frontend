import React from 'react';

const PeerReview = () => {
  return (
    <div className="peer-review-process">
      <h2>Peer Review Process</h2>
      <p>
        All papers submitted to the BODH: BPIT International Journal of Technology
        and Management (BBIJTM) are peer-reviewed according to the following procedure:
      </p>

      <div className="review-step">
        <h3>Initial Review</h3>
        <p>
          Chief Editor evaluates each paper to determine if its topic and content
          meets the submission criteria of BODH: BPIT International Journal of
          Technology and Management (BBIJTM). Papers that do not meet minimum
          criteria are returned to the authors. This is in the best interest of the
          authors who could then decide to either correct the problems or to submit
          the paper to a more appropriate journal or conference.
        </p>
      </div>

      <div className="review-step">
        <h3>Peer Review</h3>
        <p>
          Peer review is a process of self-regulation by a profession or a process
          of evaluation involving qualified individuals within the relevant field.
          Peer review methods are employed to maintain standards, improve
          performance, and provide credibility. In academia, peer review is often
          used to determine an academic paper’s suitability for publication. In case
          of blind peer review, the identity of the authors would not be revealed to
          reviewer/referee until the paper is published in the journal.
        </p>
        <p>
          Each paper is reviewed by at least two referees under peer review process,
          where both the referees and the authors are kept anonymous. Peer reviewers
          read the article and provide feedback to the editor based on its originality,
          soundness of methodology, impact on design research, and relevance to design
          practices. After collecting the referees’ review reports, the Sub-Editor makes
          a recommendation on the acceptability of the paper to the Chief Editor.
        </p>
      </div>

      <div className="review-step">
        <h3>Recommendation</h3>
        <p>
          Based on the referees’ comments and the Sub-Editor’s recommendation, the Chief
          Editor makes a final decision on the acceptability of the paper. If an article
          finally meets editorial and peer standards, he communicates the decision to the
          authors along with referees’ reports. The final decision can be “Strongly Accepted,”
          “Marginally Accepted,” “Accepted with Changes,” “Revision required,” or “Rejected.”
          A revised paper should be re-submitted within 15 days of the decision. It will usually
          be returned to the original referees for evaluation.
        </p>
      </div>
    </div>
  );
};

export default PeerReview;
