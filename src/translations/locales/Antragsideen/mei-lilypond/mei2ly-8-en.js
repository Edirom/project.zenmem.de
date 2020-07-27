    export default {
    
    (2523304,'<p>Although not strictly necessary for the declared goal of rendering MEI/Edirom editions through LilyPond a LilyPond-to-MEI conversion will add a lot to the MEI ecosystem. The main advantages/use cases are:</p><ul><li>Editing documents exported from MEI to LilyPond and converting them back to MEI. <br />This will make it possible to re-link between MEI data and generated LilyPond files.</li><li>Eventually this can make it possible to develop editing environments that allow switching between editing modes.</li><li>Using LilyPond as a tool for primary music entry in MEI editions. <br />Writing music in LilyPond is generally more efficient than writing MEI by orders of magnitude. At the same time LilyPond offers a format that can (other than Finale or Sibelius with their very limited export functionality) store a wealth of semantic information which can then be transferred to the actual MEI data.</li><li>Importing existing editions from LilyPond.</li></ul><p>This task is pretty complex, and there is no clear idea yet about the best possible approach. Several suggestions have been made and several solutions have half-heartedly been addressed so far, but there are some inherent complexities that make it likely that only a combined approach or substantially limited support for LilyPond\'s possibilities will be satisfying (more discussion below).</p><table><tbody><tr><td style=\"text-align: right;\"><strong>Type:</strong></td><td>Format converter (optional)</td></tr><tr><td style=\"text-align: right;\"><strong>Complexity:</strong></td><td>High</td></tr><tr><td style=\"text-align: right;\"><strong>Technologies:</strong></td><td>Scheme, XSLT, (Python)</td></tr><tr><td style=\"text-align: right;\"><strong>Dependencies:</strong></td><td><code>Possibly <ac:link><ri:page ri:content-title=\"1.1.2 Let LilyPond Compile XML Data\" /></ac:link> (&ldquo;in reverse&rdquo;)</code></td></tr><tr><td style=\"text-align: right;\"><strong>State:</strong></td><td>Several partial solutions have been implemented, several approaches discussed. It is presumably possible to build on these.</td></tr></tbody></table><p style=\"text-align: right;\"><ac:link><ri:page ri:content-title=\"1.1.4 Let LilyPond Write .ly file\" /><ac:plain-text-link-body><![CDATA[<= Back]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"1 Content / Fundamentals\" /><ac:plain-text-link-body><![CDATA[Up]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"1.2 LilyPond Preparations\" /><ac:plain-text-link-body><![CDATA[Next =>]]></ac:plain-text-link-body></ac:link></p><hr /><h3>Thoughts</h3><p>Exporting from LilyPond format is inherently complex because there is no 1-to-1 representation of &quot;elements&quot; in the input to the output or even the actual score\'s content. Practically any LilyPond input can be processed through Scheme, from built-in functions like transpositions and reused variables up to algorithmic or even random content generation. Therefore any converter that works on the input files must accept incompleteness - or reimplement Scheme. The approach to avoid this problem is to have LilyPond itself do the parsing and then intercept its processing at a later stage (which is roughly equivalent to the stage discussed in <ac:link><ri:page ri:content-title=\"1.1.2 Let LilyPond Compile XML Data\" /></ac:link>). However, this also doesn\'t contain <em>everything</em> (for example top-level texts like headers etc.).</p><p>In order to achieve a c<em>omprehensive</em><em> </em>conversion an approach will have to make use of LilyPond\'s own parser <em>and</em> perform some external parsing. Four existing approaches should be closely reviewed and built upon:</p><h5>Frescobaldi /python-ly</h5><p><a href=\"http://frescobaldi.org\">Frescobaldi</a> is a comprehensive LilyPond IDE written in Python/PyQt. It handles LilyPond\'s input language through <a href=\"https://github.com/wbsoft/python-ly\">python-ly</a>, a pure Python library under active development by the Frescobaldi team. <code>python-ly</code> targets understanding the LilyPond <em>input file</em> (and not the score) as a DOM and allowing manipulations of that DOM. Peter Bjuhr is working on a MusicXML export feature in Frescobaldi, and this works pretty well already - with the exception of the limitations mentioned above. However, it is probably a good environment to &quot;host&quot; an export in.</p><h5>Abjad</h5><p>It looks like the <a href=\"https://github.com/Abjad/abjad\">Abjad</a> Python library offers support for parsing LilyPond that should be explored. In particular it should be compared to the approach taken by python-ly.</p><h5>Lychee</h5><p>As mentioned in <ac:link><ri:page ri:content-title=\"1.1.2 Let LilyPond Compile XML Data\" /></ac:link> nCoda works on Lychee, an &ldquo;MEI arbiter&rdquo; that&nbsp;may provide most of the work for mei2ly just to build upon. Of course this is also subject to the Scheme limitation explained above.</p><h5>Native LIlyPond export</h5><p>As a <a href=\"https://www.google-melange.com/gsoc/project/details/google/gsoc2015/david156/5668600916475904\">Google Summer of Code</a> project 2015 a working draft has been implemented exporting LilyPond scores to MusicXML through LilyPond itself. This builds on the SXML approach and gave first experiences with ad-hoc versions of Guile 2. The approach can be reused more or less completely, with the secondary transformation to MEI instead of MusicXML presumably being not too complicated.</p>',2490682,2),

    
    }