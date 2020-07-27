    export default {
    
    (2523393,'<p>Page layout settings like paper format, orientation, margins, spacing options, but also staff size can be defined in separate files in LilyPond. This work package will provide an interface for setting all sorts of layout options in the context of the <em>Engraving Preview</em> module.</p><table><tbody><tr><td style=\"text-align: right;\"><strong>Type:</strong></td><td><p><em>User interface<br /></em></p></td></tr><tr><td style=\"text-align: right;\"><strong>Complexity:</strong></td><td>Low</td></tr><tr><td colspan=\"1\" style=\"text-align: right;\"><strong>Technologies:</strong></td><td colspan=\"1\">JavaScript, LilyPond (Scheme)</td></tr><tr><td style=\"text-align: right;\"><strong>Dependencies:</strong></td><td>None</td></tr><tr><td style=\"text-align: right;\"><strong>State:</strong></td><td>--</td></tr></tbody></table><p style=\"text-align: right;\"><ac:link><ri:page ri:content-title=\"2.2.2 Rendering Hints\" /><ac:plain-text-link-body><![CDATA[<= Back]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"2.2 Engrave Preview\" /><ac:plain-text-link-body><![CDATA[Up]]></ac:plain-text-link-body></ac:link> || <ac:link><ri:page ri:content-title=\"2.2.4 Manage recompilation\" /><ac:plain-text-link-body><![CDATA[Next =>]]></ac:plain-text-link-body></ac:link></p><hr /><p>There are many possible options that could be set in such an interface, and many should be explored and implemented.</p><p>However, the admin of an edition should be able to control which items are accessible to the user (for example through an array in a configuration file that controls the display of the individual fields).</p><h5>Page layout</h5><ul><li>Page size and orientation (from list and custom)</li><li>Page layout (margins, ragged-settings, page numbering)</li><li>Forcing number of pages or systems(-per-page)</li><li>Advanced spacing options (distances between systems or from headers to systems etc.)</li><li>etc.</li></ul><h5>Breaks</h5><p>The edition-engraver is also capable of inserting manual breaks. This can be used to</p><ul><li>provide an interface to manually forcing line and page breaks (either graphically in the score or through a numerical interface on the page layout page)</li><li>select break sets corresponding to the different original sources.</li></ul><p>These functions are contained and accessible in the&nbsp;<a href=\"https://github.com/openlilylib/page-layout\"><span class=\"confluence-link\">page-layout</span></a> openLilyLib package.<span class=\"confluence-link\">&nbsp;</span></p><h5>Headers</h5><p>This module could also provide an interface for editing headers (although this is probably handled better in the MEI file) (for example a comment about the current rendering could/should be inserted). In any case the layout of the headers (positioning, choice of fields, formatting) could be modified at this stage. This could be useful for end-users but even more for editors.</p><h5>Score Structure</h5><p>When such an interface is already there it can be used to define the score structure to be exported. That means the user (or editor) could select the parts to be printed or not. The rendering of parts can be configured, for example setting the instrument name, choosing transposition, maybe also set options like printing given staves larger or colored.</p><p>It has to be considered carefully if this information should then be modified on the LilyPond output stage or rather on the stage of pre-compiling the MEI data..</p><h5>Other Options</h5><ul><li>Switch the output of annotations on and off</li><li>Highlight annotated items or those manipulated graphically through coloring (useful while developing)</li><li>Choose notation fonts or stylesheets (if provided by the editors)</li><li>etc.</li></ul>',2490786,2),

    
    }