import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitManuscript = () => {
    const navigate = useNavigate()
  return (
    <div className="submit-manuscript-guidelines">
      <h2 className="section-title">Submit Manuscript</h2>
      <div className="guidelines-text">
        <p>Authors are requested to kindly follow the following guidelines while submitting their manuscript:</p>
        <ol className="ordered-list">
          <li><b>Font:</b> Your font should generally be 12 point Times New Roman. Though some agents and editors may prefer different serif or sans serif fonts like Arial or Courier New, Times New Roman with a 12 point font size is the industry standard.</li>
          <li><b>Margins:</b> Your pages should include one-inch margins on all sides (so your top, bottom, left, and right margins should all be uniform). These should be the default margins in MS Word and other word processors like Scrivener.</li>
          <li><b>Indentations:</b> For the first line of a new paragraph, you should indent a half-inch. For most word processors, you can do this by hitting the tab key once.</li>
          <li><b>Line spacing:</b> All lines should be double spaced. Double-spacing your lines makes the manuscript easier to read and mark up. Do not add an extra space between paragraphs.</li>
          <li><b>Alignment:</b> Your words should be aligned on the left-hand side of your page, but not justified. The right-hand side of your page will not be uniform.</li>
          <li><b>Page numbers:</b> Page numbers begin with the number one and are numbered continuously, beginning with the first new page after the title page. Pages in the front matter, such as the table of contents, copyright page, or ISBN info are numbered with Roman numerals.</li>
          <li><b>Scene breaks:</b> For scene breaks, add a blank line with a hashmark or three asterisks in the center to indicate a new scene.</li>
          <li><b>Italics:</b> In the past, writers used underlining to indicate words that they intended to italicize. Nowadays, writers simply use italics.</li>
          <li><b>Sentence separation:</b> Use one space between sentences after a period. Though many people instinctively hit the space bar twice to put two spaces between sentences, this is not the correct practice.</li>
          <li><b>Ending:</b> To indicate the end of your manuscript, write the word “END” and center it after the last line.</li>
          <li><b>Page size:</b> You should use the standard page size of 8.5 by 11 inches.</li>
        </ol>
      </div>
      <button onClick={() => navigate('/paperForm')}>Online Submission</button>
    </div>
  );
};


export default SubmitManuscript
