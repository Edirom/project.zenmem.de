    export default {
    
    (2523314,'<p>The &ldquo;edition-engraver&rdquo; is a LilyPond library that allows to apply rendering hints (or to inject elements) in the second stage of compiling a LilyPond score. This will play a central role in the <code>mei2ly</code> project. Currently the edition-engraver is being rewritten from scratch, and it is not clear whether work on this tool will still be necessary in the project context.</p><table><tbody><tr><td style=\"text-align: right;\"><strong>Type:</strong></td><td>Core functionality</td></tr><tr><td style=\"text-align: right;\"><strong>Complexity:</strong></td><td>Medium to high</td></tr><tr><td style=\"text-align: right;\"><strong>Technology:</strong></td><td>Scheme</td></tr><tr><td style=\"text-align: right;\"><strong>Dependencies:</strong></td><td><ac:link><ri:page ri:content-title=\"2.1.1 &ldquo;ID&rdquo; Infrastructure for LilyPond\" /><ac:plain-text-link-body><![CDATA[2.1.1 “ID” Infrastructure for LilyPond]]></ac:plain-text-link-body></ac:link>, <ac:link><ri:page ri:content-title=\"2.1.3 openLilyLib\" /><ac:plain-text-link-body><![CDATA[2.1.3, openLilyLib]]></ac:plain-text-link-body></ac:link></td></tr><tr><td style=\"text-align: right;\"><strong>State:</strong></td><td><p>The edition-engraver is in testing use by a number of LilyPond power users. It is not ready to be recommended for general use or even inclusion in LilyPond itself. Some substantial improvements have to be made to make it usable for <code>mei2ly</code>. For historical reasons this will be tackled in the context of a complete rewrite that has just started.</p><p>It is possible that the bulk of the work has already been finished by the LilyPond community when <code>mei2ly</code> can start. But it has to be expected that there will be work left, either finishing the rewrite or adapting the edition-engraver to specific needs of the project.</p></td></tr></tbody></table><p style=\"text-align: right;\"><ac:link><ri:page ri:content-title=\"2.1.1 &ldquo;ID&rdquo; Infrastructure for LilyPond\" /><ac:plain-text-link-body><![CDATA[<= Back]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"2.1 Requirements\" /><ac:plain-text-link-body><![CDATA[Up]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"2.1.3 openLilyLib\" /><ac:plain-text-link-body><![CDATA[Next =>]]></ac:plain-text-link-body></ac:link></p><hr /><p>Some background:</p><p>The edition-engraver (currently hosted&nbsp;<a href=\"https://github.com/openlilylib/snippets/tree/master/editorial-tools/edition-engraver\">here</a>) is a &ldquo;plugin&rdquo;/library that is loaded and works in the context of LilyPond compiling documents. It &ldquo;installs&rdquo; itself in the score and its staves and voices and &ldquo;listens&rdquo; for &ldquo;mods&rdquo; that can be targeted at different &ldquo;editions&rdquo;. The mods are clearly separated from the content, and it is possible to define arbitrary sets of rendering hints for arbitrary numbers of different editions (where an &ldquo;edition&rdquo; can refer to an output target (media/paper format) or a reading (variants or score/part etc.)). This will be a core item for creating user interfaces to graphically fine-tune a score rendering and persistently store the modifications.</p><p>The major drawback of the current proof-of-concept implementation of the edition-engraver is the way it addresses items in a score. This works through pointing at a &ldquo;moment&rdquo; (e.g. &ldquo;measure 123, 4th quaver&rdquo;) and an indexed voice/staff context (e.g. &ldquo;5th voice&rdquo;). This is extremely limited and completely prevents the use for non-fixed scores where either the lengths or the score set-up change. Therefore the plan is to replace this addressing with a scheme using IDs.</p>',2490698,2),

    
    }