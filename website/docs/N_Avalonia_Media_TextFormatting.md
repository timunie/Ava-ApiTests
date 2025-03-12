# Avalonia.Media.TextFormatting Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_DrawableTextRun">DrawableTextRun</a></td>
<td>A text run that supports drawing content.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_GenericTextParagraphProperties">GenericTextParagraphProperties</a></td>
<td>Generic implementation of TextParagraphProperties</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_GenericTextRunProperties">GenericTextRunProperties</a></td>
<td>Generic implementation of TextRunProperties</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_JustificationProperties">JustificationProperties</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_ShapedBuffer">ShapedBuffer</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_ShapedTextRun">ShapedTextRun</a></td>
<td>A text run that holds shaped characters.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextBounds">TextBounds</a></td>
<td>The bounding rectangle of a range of characters</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextCharacters">TextCharacters</a></td>
<td>A text run that holds text characters.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextCollapsingProperties">TextCollapsingProperties</a></td>
<td>Properties of text collapsing.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextEndOfLine">TextEndOfLine</a></td>
<td>A text run that indicates the end of a line.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextEndOfParagraph">TextEndOfParagraph</a></td>
<td>A text run that indicates the end of a paragraph.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextFormatter">TextFormatter</a></td>
<td>Represents a base class for text formatting.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextLayout">TextLayout</a></td>
<td>Represents a multi line text layout.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextLeadingPrefixCharacterEllipsis">TextLeadingPrefixCharacterEllipsis</a></td>
<td>Ellipsis based on a fixed length leading prefix and suffix growing from the end at character granularity.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a></td>
<td>Represents a line of text that is used for text rendering.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextLineBreak">TextLineBreak</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextParagraphProperties">TextParagraphProperties</a></td>
<td>Provides a set of properties that are used during the paragraph layout.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a></td>
<td>Represents a portion of a <a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a> object.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextRunProperties">TextRunProperties</a></td>
<td>Provides a set of properties, such as typeface or foreground brush, that can be applied to a TextRun object. This is an abstract class.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextShaper">TextShaper</a></td>
<td>A class that is responsible for text shaping.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextTrailingCharacterEllipsis">TextTrailingCharacterEllipsis</a></td>
<td>A collapsing properties to collapse whole line toward the end at character granularity.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextTrailingWordEllipsis">TextTrailingWordEllipsis</a></td>
<td>a collapsing properties to collapse whole line toward the end at word granularity.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_UnshapedTextRun">UnshapedTextRun</a></td>
<td>A group of characters that can be shaped.</td>
</tr>
</table>

## Structures
<table>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a></td>
<td>Represents a single glyph.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_SplitResult_1">SplitResult(T)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextLineMetrics">TextLineMetrics</a></td>
<td>Represents a metric for a <a href="T_Avalonia_Media_TextFormatting_TextLine">TextLine</a> objects, that holds information about ascent, descent, line gap, size and origin of the text line.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextMetrics">TextMetrics</a></td>
<td>A metric that holds information about text specific measurements.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextRange">TextRange</a></td>
<td>References a portion of a text buffer.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextRunBounds">TextRunBounds</a></td>
<td>The bounding rectangle of text run</td>
</tr>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_TextShaperOptions">TextShaperOptions</a></td>
<td>Options to customize text shaping.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_ITextSource">ITextSource</a></td>
<td>Produces <a href="T_Avalonia_Media_TextFormatting_TextRun">TextRun</a> objects that are used by the <a href="T_Avalonia_Media_TextFormatting_TextFormatter">TextFormatter</a>.</td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Media_TextFormatting_LogicalDirection">LogicalDirection</a></td>
<td> </td>
</tr>
</table>
