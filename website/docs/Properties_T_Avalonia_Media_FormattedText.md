# FormattedText Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Baseline">Baseline</a></td>
<td>The distance from the top of the first line to the baseline of the first line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Extent">Extent</a></td>
<td>The distance from the topmost black pixel of the first line to the bottommost black pixel of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_FlowDirection">FlowDirection</a></td>
<td>Defines the flow direction</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Height">Height</a></td>
<td>The distance from the top of the first line to the bottom of the last line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_LineHeight">LineHeight</a></td>
<td>Gets or sets the height of, or the spacing between, each line where zero represents the default line height.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxLineCount">MaxLineCount</a></td>
<td>Defines the maximum number of lines to display. The last line of text displayed is the lineCount-1'th line, or the last whole line that will fit within the count set by MaxTextHeight, whichever occurs first. Use the Trimming property to control how the omission of text is indicated</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxTextHeight">MaxTextHeight</a></td>
<td>Sets the maximum length of a column of text. The last line of text displayed is the last whole line that will fit within this limit, or the nth line as specified by MaxLineCount, whichever occurs first. Use the Trimming property to control how the omission of text is indicated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_MaxTextWidth">MaxTextWidth</a></td>
<td>The MaxTextWidth property defines the alignment edges for the FormattedText. For example, left aligned text is wrapped such that the leftmost glyph alignment point on each line falls exactly on the left edge of the rectangle. Note that for many fonts, especially in italic style, some glyph strokes may extend beyond the edges of the alignment rectangle. For this reason, it is recommended that clients draw text with at least 1/6 em (i.e of the font size) unused margin space either side. Zero value of MaxTextWidth is equivalent to the maximum possible paragraph width.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangAfter">OverhangAfter</a></td>
<td>The distance from the bottom of the last line to the extent bottom.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangLeading">OverhangLeading</a></td>
<td>The maximum distance from the leading black pixel to the leading alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_OverhangTrailing">OverhangTrailing</a></td>
<td>The maximum distance from the trailing black pixel to the trailing alignment point of a line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_TextAlignment">TextAlignment</a></td>
<td>Defines the alignment of text within the column</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Trimming">Trimming</a></td>
<td>Defines how omission of text is indicated. CharacterEllipsis trimming allows partial words to be displayed, while WordEllipsis removes whole words to fit. Both guarantee to include an ellipsis ('...') at the end of the lines where text has been trimmed as a result of line and column limits.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_Width">Width</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, excluding the width of whitespace characters at the end of the line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FormattedText_WidthIncludingTrailingWhitespace">WidthIncludingTrailingWhitespace</a></td>
<td>The maximum advance width between the leading and trailing alignment points of a line, including the width of whitespace characters at the end of the line.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_FormattedText">FormattedText Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

